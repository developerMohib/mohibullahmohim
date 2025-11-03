'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  FileText,
  MessageSquare,
  User,
} from 'lucide-react';



const recentVisitors = [
  { id: 1, name: 'John Doe', email: 'john@example.com', location: 'New York', visited: '2 hours ago', page: '/blog/react-tips' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', location: 'London', visited: '4 hours ago', page: '/portfolio' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', location: 'Tokyo', visited: '5 hours ago', page: '/blog/javascript' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', location: 'Sydney', visited: '1 day ago', page: '/about' },
];

const subscribers = [
  { id: 1, email: 'user1@example.com', date: '2024-01-15', status: 'active' },
  { id: 2, email: 'user2@example.com', date: '2024-01-14', status: 'active' },
  { id: 3, email: 'user3@example.com', date: '2024-01-13', status: 'active' },
  { id: 4, email: 'user4@example.com', date: '2024-01-10', status: 'inactive' },
];

const recentBlogs = [
  { id: 1, title: 'Mastering React Hooks', views: 1245, comments: 23, status: 'published', date: '2024-01-15' },
  { id: 2, title: 'Next.js Best Practices', views: 892, comments: 15, status: 'published', date: '2024-01-14' },
  { id: 3, title: 'TypeScript Tips', views: 567, comments: 8, status: 'draft', date: '2024-01-13' },
  { id: 4, title: 'CSS Grid Guide', views: 1234, comments: 31, status: 'published', date: '2024-01-12' },
];

const statsData = [
  {
    title: 'Total Visitors',
    value: '12,458',
    description: '+12% from last month',
    icon: Users,
    trend: 'up'
  },
  {
    title: 'Subscribers',
    value: '2,350',
    description: '+18% from last month',
    icon: User,
    trend: 'up'
  },
  {
    title: 'Blog Posts',
    value: '47',
    description: '+3 new this week',
    icon: FileText,
    trend: 'up'
  },
  {
    title: 'Comments',
    value: '156',
    description: '+12 waiting moderation',
    icon: MessageSquare,
    trend: 'up'
  }
];

export default function DashboardPage() {


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'inactive': return 'bg-gray-500';
      case 'active': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };



  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Manage your personal website content and analytics.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {statsData.map((stat) => (
            <motion.div key={stat.title} variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
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

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-4">






          {/* Right Side - Data Tables */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Recent Visitors Table */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Visitors</CardTitle>
                <CardDescription>
                  Latest visitors to your website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentVisitors.map((visitor) => (
                    <motion.div
                      key={visitor.id}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{visitor.name}</p>
                          <p className="text-sm text-muted-foreground">{visitor.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{visitor.location}</p>
                        <p className="text-sm text-muted-foreground">{visitor.visited}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subscribers and Blogs Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Subscribers Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Subscribers</CardTitle>
                  <CardDescription>
                    Your email newsletter subscribers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {subscribers.map((subscriber) => (
                      <div
                        key={subscriber.id}
                        className="flex items-center justify-between p-2 rounded-lg border"
                      >
                        <div>
                          <p className="font-medium text-sm">{subscriber.email}</p>
                          <p className="text-xs text-muted-foreground">Joined {subscriber.date}</p>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={getStatusColor(subscriber.status)}
                        >
                          {subscriber.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Blogs Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Blog Posts</CardTitle>
                  <CardDescription>
                    Your latest blog posts performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentBlogs.map((blog) => (
                      <motion.div
                        key={blog.id}
                        whileHover={{ scale: 1.02 }}
                        className="p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm line-clamp-1">{blog.title}</h4>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${getStatusColor(blog.status)}`}
                          >
                            {blog.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>👁️ {blog.views} views</span>
                          <span>💬 {blog.comments} comments</span>
                          <span>{blog.date}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Website Performance</CardTitle>
                <CardDescription>
                  Overview of your website metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">78%</div>
                    <div className="text-sm text-muted-foreground">Bounce Rate</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2m 34s</div>
                    <div className="text-sm text-muted-foreground">Avg. Session</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">45%</div>
                    <div className="text-sm text-muted-foreground">New Visitors</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">3.2</div>
                    <div className="text-sm text-muted-foreground">Pages/Visit</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}