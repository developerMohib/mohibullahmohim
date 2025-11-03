// app/dashboard/blog/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Edit,
  Trash2,
  Eye,
  FileText,
  Calendar,
  BarChart3,
  MessageSquare,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Mock data - replace with your actual data
const blogPosts = [
  {
    id: 1,
    title: 'Mastering React Hooks in 2024',
    excerpt: 'Learn how to effectively use React Hooks in modern applications...',
    status: 'published',
    views: 1245,
    comments: 23,
    likes: 45,
    date: '2024-01-15',
    lastEdited: '2024-01-15',
    category: 'React',
    readTime: '5 min',
    featured: true
  },
  {
    id: 2,
    title: 'Next.js 14 Best Practices and Patterns',
    excerpt: 'Discover the latest best practices for Next.js 14 development...',
    status: 'published',
    views: 892,
    comments: 15,
    likes: 32,
    date: '2024-01-14',
    lastEdited: '2024-01-14',
    category: 'Next.js',
    readTime: '8 min',
    featured: true
  },
  {
    id: 3,
    title: 'Advanced TypeScript Tips for Developers',
    excerpt: 'Take your TypeScript skills to the next level with these advanced patterns...',
    status: 'draft',
    views: 0,
    comments: 0,
    likes: 0,
    date: '2024-01-13',
    lastEdited: '2024-01-13',
    category: 'TypeScript',
    readTime: '6 min',
    featured: false
  },
  {
    id: 4,
    title: 'Complete Guide to CSS Grid Layout',
    excerpt: 'Master CSS Grid with this comprehensive guide and examples...',
    status: 'published',
    views: 1234,
    comments: 31,
    likes: 67,
    date: '2024-01-12',
    lastEdited: '2024-01-12',
    category: 'CSS',
    readTime: '10 min',
    featured: false
  },
  {
    id: 5,
    title: 'Building Scalable Node.js Applications',
    excerpt: 'Learn how to build scalable and maintainable Node.js applications...',
    status: 'scheduled',
    views: 0,
    comments: 0,
    likes: 0,
    date: '2024-01-20',
    lastEdited: '2024-01-13',
    category: 'Node.js',
    readTime: '12 min',
    featured: false
  },
  {
    id: 6,
    title: 'Introduction to Machine Learning with Python',
    excerpt: 'Get started with machine learning using Python and scikit-learn...',
    status: 'draft',
    views: 0,
    comments: 0,
    likes: 0,
    date: '2024-01-13',
    lastEdited: '2024-01-13',
    category: 'Machine Learning',
    readTime: '15 min',
    featured: false
  }
];

const statsData = [
  {
    title: 'Total Posts',
    value: '24',
    description: '+3 this month',
    icon: FileText,
    color: 'text-blue-600'
  },
  {
    title: 'Published',
    value: '18',
    description: '75% of total',
    icon: Eye,
    color: 'text-green-600'
  },
  {
    title: 'Drafts',
    value: '4',
    description: 'Needs review',
    icon: Edit,
    color: 'text-yellow-600'
  },
  {
    title: 'Total Views',
    value: '45.2K',
    description: '+12% this month',
    icon: BarChart3,
    color: 'text-purple-600'
  }
];

export default function BlogManagementPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'views':
        return b.views - a.views;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'date':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500 hover:bg-green-600';
      case 'draft': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'scheduled': return 'bg-blue-500 hover:bg-blue-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'Published';
      case 'draft': return 'Draft';
      case 'scheduled': return 'Scheduled';
      default: return status;
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/dashboard/blog/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      // Add your delete logic here
      console.log('Deleting post:', id);
    }
  };

  const handleView = (id: number) => {
    router.push(`/blog/${id}`);
  };

  const handleNewPost = () => {
    router.push('/dashboard/blog/write');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage your blog posts, drafts, and published content
            </p>
          </div>
          <Button 
            onClick={handleNewPost}
            className="mt-4 sm:mt-0 cursor-pointer"
            size="lg"
          >
            <Plus className="h-4 w-4 mr-2" />
            Write New Post
          </Button>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts by title, content, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="date">Sort by Date</option>
                  <option value="views">Sort by Views</option>
                  <option value="title">Sort by Title</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>
              Manage all your blog posts. {sortedPosts.length} posts found.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 border rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Post Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        {post.featured && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            Featured
                          </Badge>
                        )}
                        <Badge className={getStatusColor(post.status)}>
                          {getStatusText(post.status)}
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold text-lg mt-2 mb-1">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <BarChart3 className="h-3 w-3" />
                          {post.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {post.comments} comments
                        </div>
                        <div>⏱️ {post.readTime}</div>
                        <div>📁 {post.category}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleView(post.id)}
                        className="cursor-pointer"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(post.id)}
                        className="cursor-pointer"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {sortedPosts.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">No posts found</h3>
                  <p className="text-muted-foreground mt-2">
                    {searchTerm || statusFilter !== 'all' 
                      ? 'Try adjusting your search or filters' 
                      : 'Get started by creating your first blog post'
                    }
                  </p>
                  {(searchTerm || statusFilter !== 'all') ? (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm('');
                        setStatusFilter('all');
                      }}
                      className="mt-4 cursor-pointer"
                    >
                      Clear filters
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNewPost}
                      className="mt-4 cursor-pointer"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Write Your First Post
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Content Calendar</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Plan and schedule your posts
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Post Analytics</h3>
              <p className="text-sm text-muted-foreground mt-1">
                View detailed performance metrics
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold">Comments</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Manage and moderate comments
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}