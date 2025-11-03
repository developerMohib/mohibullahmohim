// app/dashboard/blog/write/page.tsx
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Save,
  Eye,
  Send,
  Tag,
  ImageDown,
  X,
  Menu
} from 'lucide-react';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';

export default function WriteBlogPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [blogPost, setBlogPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    status: 'draft',
    category: 'technology',
    tags: [] as string[],
    featuredImage: null as File | null,
    featuredImageUrl: '',
  });

  const categories = [
    'technology',
    'programming',
    'web-development',
    'design',
    'personal'
  ];

  const handleAddTag = () => {
    if (newTag.trim() && !blogPost.tags.includes(newTag.trim())) {
      setBlogPost(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setBlogPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        toast.error('Please select a valid image file (JPEG, PNG, WebP, GIF)');
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error('Image size should be less than 5MB');
        return;
      }

      setBlogPost(prev => ({
        ...prev,
        featuredImage: file,
        featuredImageUrl: URL.createObjectURL(file)
      }));
    }
  };

  const handleRemoveImage = () => {
    setBlogPost(prev => ({
      ...prev,
      featuredImage: null,
      featuredImageUrl: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSaveDraft = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', blogPost.title);
      formData.append('content', blogPost.content);
      formData.append('excerpt', blogPost.excerpt);
      formData.append('status', blogPost.status);
      formData.append('category', blogPost.category);
      formData.append('tags', JSON.stringify(blogPost.tags));
      
      if (blogPost.featuredImage) {
        formData.append('featuredImage', blogPost.featuredImage);
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Draft saved successfully!');
    } catch (error) {
      console.log(error);
      toast.error('Error saving draft. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePublish = async () => {
    if (!blogPost.title.trim()) {
      toast.warning('Please enter a title for your blog post.');
      return;
    }

    if (!blogPost.content.trim()) {
      toast.warning('Please write some content for your blog post.');
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', blogPost.title);
      formData.append('content', blogPost.content);
      formData.append('excerpt', blogPost.excerpt);
      formData.append('status', 'published');
      formData.append('category', blogPost.category);
      formData.append('tags', JSON.stringify(blogPost.tags));
      
      if (blogPost.featuredImage) {
        formData.append('featuredImage', blogPost.featuredImage);
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Blog post published successfully!');
      router.push('/dashboard/blog-management');
    } catch (error) {
      console.log(error);
      toast.error('Error publishing post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const wordCount = blogPost.content.split(/\s+/).filter(word => word.length > 0).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="h-10 w-10 p-0"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        {/* Header - Improved for mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Write Blog Post</h1>
            <p className="text-muted-foreground mt-1 lg:mt-2 text-sm lg:text-base">
              Create and publish engaging content
            </p>
          </div>
          
          {/* Action Buttons - Better mobile layout */}
          <div className="flex flex-col xs:flex-row gap-2 w-full sm:w-auto">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsPreview(!isPreview)}
                className="flex-1 xs:flex-none cursor-pointer text-sm"
                size="sm"
              >
                <Eye className="h-4 w-4 mr-2" />
                {isPreview ? 'Edit' : 'Preview'}
              </Button>
              <Button
                onClick={handleSaveDraft}
                disabled={isLoading}
                variant="outline"
                className="flex-1 xs:flex-none cursor-pointer text-sm"
                size="sm"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
            <Button
              onClick={handlePublish}
              disabled={isLoading}
              className="cursor-pointer text-sm"
              size="sm"
            >
              <Send className="h-4 w-4 mr-2" />
              {isLoading ? 'Publishing...' : 'Publish'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Main Editor - Full width on mobile */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            {/* Title Input */}
            <Card className="border-0 lg:border shadow-none lg:shadow-sm">
              <CardContent className="p-4 lg:p-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base lg:text-lg font-semibold">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter your blog post title..."
                    value={blogPost.title}
                    onChange={(e) => setBlogPost(prev => ({ ...prev, title: e.target.value }))}
                    className="text-lg lg:text-xl font-bold h-12 lg:h-14"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card className="border-0 lg:border shadow-none lg:shadow-sm">
              <CardHeader className="px-4 lg:px-6 py-4 lg:py-6">
                <CardTitle className="text-lg lg:text-xl">Content</CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Write your blog post content
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6">
                {isPreview ? (
                  <div className="prose prose-sm lg:prose-lg max-w-none">
                    <h1>{blogPost.title || 'Untitled'}</h1>
                    {blogPost.featuredImageUrl && (
                      <div className="my-4 lg:my-6">
                        <Image
                          src={blogPost.featuredImageUrl}
                          alt="Featured"
                          width={800}
                          height={400}
                          className="w-full h-48 lg:h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="whitespace-pre-wrap mt-4 text-sm lg:text-base">
                      {blogPost.content}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 lg:space-y-4">
                    <Textarea
                      placeholder="Start writing your blog post here..."
                      value={blogPost.content}
                      onChange={(e) => setBlogPost(prev => ({ ...prev, content: e.target.value }))}
                      className="min-h-[300px] lg:min-h-[400px] resize-none text-base lg:text-lg leading-relaxed"
                    />
                    <div className="flex justify-between text-xs lg:text-sm text-muted-foreground">
                      <div>
                        {wordCount} words • {readTime} min read
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Improved mobile behavior */}
          <div className={`
            space-y-4 lg:space-y-6
            ${sidebarOpen 
              ? 'fixed inset-0 z-40 bg-background p-4 lg:p-0 lg:relative lg:bg-transparent lg:block' 
              : 'hidden lg:block'
            }
          `}>
            {/* Mobile Close Button */}
            {sidebarOpen && (
              <div className="flex justify-between items-center mb-4 lg:hidden">
                <h2 className="text-lg font-semibold">Post Settings</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Publish Settings */}
            <Card className="border-0 lg:border shadow-none lg:shadow-sm">
              <CardHeader className="px-4 lg:px-6 py-4 lg:py-6">
                <CardTitle className="text-base lg:text-lg">Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6 space-y-3 lg:space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status" className="text-sm lg:text-base">Status</Label>
                  <select
                    id="status"
                    value={blogPost.status}
                    onChange={(e) => setBlogPost(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-md text-sm lg:text-base"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm lg:text-base">Category</Label>
                  <select
                    id="category"
                    value={blogPost.category}
                    onChange={(e) => setBlogPost(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-md text-sm lg:text-base"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Tags - Improved mobile layout */}
            <Card className="border-0 lg:border shadow-none lg:shadow-sm">
              <CardHeader className="px-4 lg:px-6 py-4 lg:py-6">
                <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                  <Tag className="h-4 w-4" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6 space-y-3 lg:space-y-4">
                <div className="flex flex-col xs:flex-row gap-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    className="flex-1 text-sm lg:text-base"
                  />
                  <Button
                    onClick={handleAddTag}
                    variant="outline"
                    className="cursor-pointer text-sm lg:text-base"
                    size="sm"
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  {blogPost.tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1 cursor-pointer text-xs lg:text-sm py-1"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      {tag}
                      <span className="ml-1">×</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Image - Better mobile layout */}
            <Card className="border-0 lg:border shadow-none lg:shadow-sm">
              <CardHeader className="px-4 lg:px-6 py-4 lg:py-6">
                <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                  <ImageDown className="h-4 w-4" />
                  Featured Image
                </CardTitle>
                <CardDescription className="text-xs lg:text-sm">
                  Upload a featured image for your blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6 space-y-3 lg:space-y-4">
                <div className="space-y-2">
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                    onChange={handleImageUpload}
                    className="cursor-pointer text-xs lg:text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    JPEG, PNG, WebP, GIF • Max 5MB
                  </p>
                </div>

                {blogPost.featuredImageUrl && (
                  <div className="space-y-2 lg:space-y-3">
                    <div className="relative">
                      <Image
                        src={blogPost.featuredImageUrl}
                        alt="Featured preview"
                        width={400}
                        height={200}
                        className="w-full h-32 lg:h-40 object-cover rounded-lg border"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full"
                        onClick={handleRemoveImage}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-xs lg:text-sm text-muted-foreground">
                      <p>File: {blogPost.featuredImage?.name}</p>
                      <p>Size: {((blogPost.featuredImage?.size || 0) / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                )}

                {!blogPost.featuredImageUrl && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 lg:p-6 text-center">
                    <ImageDown className="h-6 w-6 lg:h-8 lg:w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs lg:text-sm text-gray-500 mb-1 lg:mb-2">
                      No featured image selected
                    </p>
                    <p className="text-xs text-gray-400">
                      Click browse to select an image
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Excerpt */}
            <Card className="border-0 lg:border shadow-none lg:shadow-sm">
              <CardHeader className="px-4 lg:px-6 py-4 lg:py-6">
                <CardTitle className="text-base lg:text-lg">Excerpt</CardTitle>
                <CardDescription className="text-xs lg:text-sm">
                  Brief summary of your post
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6">
                <Textarea
                  placeholder="Write a short excerpt..."
                  value={blogPost.excerpt}
                  onChange={(e) => setBlogPost(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={3}
                  className="text-sm lg:text-base"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}