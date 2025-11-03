"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';import { 
  BarChart3, 
  Users,
  FileText,
  MessageSquare,
  Settings,
  Plus,
  Edit,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
const quickLinks = [
  { id: 1, name: 'Write New Blog', icon: Edit, href: '/dashboard/write-blog', color: 'text-blue-600' },
  { id: 2, name: 'Manage Blogs', icon: FileText, href: '/dashboard/blogs-management', color: 'text-green-600' },
  { id: 3, name: 'View Comments', icon: MessageSquare, href: '/dashboard/comments', color: 'text-purple-600' },
  { id: 4, name: 'Site Analytics', icon: BarChart3, href: '/dashboard/analytics', color: 'text-orange-600' },
  { id: 5, name: 'User Management', icon: Users, href: '/dashboard/users-management', color: 'text-red-600' },
  { id: 6, name: 'Settings', icon: Settings, href: '/dashboard/settings', color: 'text-gray-600' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
  const handleQuickLinkClick = (href: string) => {
    router.push(href);
  };
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* Sidebar component can be placed here */}    
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Manage your website content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <motion.div
                      key={link.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-start h-12 mb-2 cursor-pointer"
                        onClick={() => handleQuickLinkClick(link.href)}
                      >
                        <link.icon className={`h-4 w-4 mr-3 ${link.color}`} />
                        {link.name}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Blog Write */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
                >
                  <h4 className="font-semibold mb-2">Quick Blog Post</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Start writing a new blog post immediately
                  </p>
                  <Button 
                    className="w-full cursor-pointer"
                    onClick={() => handleQuickLinkClick('/dashboard/write-blog')}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Write New Post
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}