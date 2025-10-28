'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Code, Database, Zap, Shield, Smartphone, Server } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/fakedata/blogs';
import { useTheme } from 'next-themes';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { theme } = useTheme();

    // Helper functions for theme-based styling
    const getBackgroundColor = () => {
        return theme === 'light' ? 'bg-gray-50' : 'bg-gray-900';
    };

    const getTextColor = (type: 'primary' | 'secondary' = 'primary') => {
        if (type === 'primary') {
            return theme === 'light' ? 'text-gray-900' : 'text-white';
        }
        return theme === 'light' ? 'text-gray-600' : 'text-gray-400';
    };

    const getCardStyle = () => {
        return theme === 'light' 
            ? 'bg-white border-gray-200 shadow-md hover:shadow-lg' 
            : 'bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70';
    };

    const getInputStyle = () => {
        return theme === 'light' 
            ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500' 
            : 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500';
    };

    const getCategoryButtonStyle = (isActive: boolean) => {
        if (isActive) {
            return theme === 'light' 
                ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
        }
        return theme === 'light' 
            ? 'hover:bg-gray-50 text-gray-600' 
            : 'hover:bg-gray-700/50 text-gray-400';
    };

    const categories = [
        { id: 'all', name: 'All Posts', icon: BookOpen, count: blogPosts.length },
        { id: 'frontend', name: 'Frontend', icon: Code, count: blogPosts.filter(post => post.category === 'frontend').length },
        { id: 'backend', name: 'Backend', icon: Server, count: blogPosts.filter(post => post.category === 'backend').length },
        { id: 'database', name: 'Database', icon: Database, count: blogPosts.filter(post => post.category === 'database').length },
        { id: 'security', name: 'Security', icon: Shield, count: blogPosts.filter(post => post.category === 'security').length },
        { id: 'mobile', name: 'Mobile', icon: Smartphone, count: blogPosts.filter(post => post.category === 'mobile').length },
        { id: 'devops', name: 'DevOps', icon: Zap, count: blogPosts.filter(post => post.category === 'devops').length },
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter(post => post.featured);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCategoryIcon = (category: string) => {
        const categoryObj = categories.find(cat => cat.id === category);
        return categoryObj ? categoryObj.icon : BookOpen;
    };

    return (
        <div className={`min-h-screen py-12 ${getBackgroundColor()}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                        Developer Insights
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Tech Blog & Tutorials
                    </h1>
                    <p className={`text-xl ${getTextColor('secondary')} max-w-3xl mx-auto leading-relaxed`}>
                        Explore in-depth tutorials, best practices, and cutting-edge technologies in modern web development.
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <div className="relative">
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
                        <Input
                            type="text"
                            placeholder="Search articles, technologies, tutorials..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`pl-10 pr-4 py-3 w-full rounded-xl ${getInputStyle()}`}
                        />
                    </div>
                </motion.div>

                {/* Featured Posts */}
                {activeCategory === 'all' && searchQuery === '' && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className={`text-2xl md:text-3xl font-bold ${getTextColor('primary')} mb-8 flex items-center`}>
                            <Zap className="w-6 h-6 mr-2 text-yellow-500" />
                            Featured Articles
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                >
                                    <Card className={`hover:shadow-xl transition-all duration-300 group cursor-pointer h-full ${getCardStyle()}`}>
                                        <CardHeader className="pb-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    {React.createElement(getCategoryIcon(post.category), { className: "w-3 h-3" })}
                                                    {post.category}
                                                </Badge>
                                                <div className={`flex items-center text-sm ${getTextColor('secondary')}`}>
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                            <CardTitle className={`text-xl md:text-2xl group-hover:text-blue-600 transition-colors ${getTextColor('primary')}`}>
                                                <Link href={`/blogs/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </CardTitle>
                                            <CardDescription className={`text-base mt-2 ${getTextColor('secondary')}`}>
                                                {post.excerpt}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between">
                                                <div className={`flex items-center text-sm ${getTextColor('secondary')}`}>
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {formatDate(post.date)}
                                                </div>
                                                <div className="flex gap-1">
                                                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                                        <Badge key={tagIndex} variant="outline" className="text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Categories & Posts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Categories Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <Card className={`sticky top-24 ${getCardStyle()}`}>
                            <CardHeader>
                                <CardTitle className={`text-lg ${getTextColor('primary')}`}>Categories</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {categories.map((category) => {
                                    const IconComponent = category.icon;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${getCategoryButtonStyle(activeCategory === category.id)}`}
                                        >
                                            <div className="flex items-center">
                                                <IconComponent className="w-4 h-4 mr-3" />
                                                <span>{category.name}</span>
                                            </div>
                                            <Badge variant="secondary" className="text-xs">
                                                {category.count}
                                            </Badge>
                                        </button>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Posts Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeCategory}-${searchQuery}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {filteredPosts.map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                    >
                                        <Card className={`hover:shadow-lg transition-all duration-300 group cursor-pointer h-full ${getCardStyle()}`}>
                                            <CardHeader className="pb-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <Badge variant="secondary" className="flex items-center gap-1">
                                                        {React.createElement(getCategoryIcon(post.category), { className: "w-3 h-3" })}
                                                        {post.category}
                                                    </Badge>
                                                    <div className={`flex items-center text-sm ${getTextColor('secondary')}`}>
                                                        <Clock className="w-4 h-4 mr-1" />
                                                        {post.readTime}
                                                    </div>
                                                </div>
                                                <CardTitle className={`text-lg group-hover:text-blue-600 transition-colors ${getTextColor('primary')}`}>
                                                    <Link href={`/blogs/${post.slug}`}>
                                                        {post.title}
                                                    </Link>
                                                </CardTitle>
                                                <CardDescription className={`mt-2 line-clamp-2 ${getTextColor('secondary')}`}>
                                                    {post.excerpt}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center justify-between">
                                                    <div className={`flex items-center text-sm ${getTextColor('secondary')}`}>
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        {formatDate(post.date)}
                                                    </div>
                                                    <Link href={`/blog/${post.slug}`}>
                                                        <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                                                            Read More
                                                            <ArrowRight className="w-4 h-4 ml-1" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-wrap gap-1 mt-3">
                                                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                                        <Badge key={tagIndex} variant="outline" className="text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* No Results */}
                        {filteredPosts.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                            >
                                <BookOpen className={`w-16 h-16 mx-auto mb-4 ${theme === 'light' ? 'text-gray-300' : 'text-gray-600'}`} />
                                <h3 className={`text-xl font-semibold mb-2 ${getTextColor('primary')}`}>No articles found</h3>
                                <p className={getTextColor('secondary')}>
                                    Try adjusting your search or filter criteria
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Blog;