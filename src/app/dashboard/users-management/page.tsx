// app/dashboard/users/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Users,
  UserPlus,
  Search,
  Mail,
  Edit,
  Trash2,
  Shield,
  UserCheck,
  UserX,
  Download,
  Send,
  Ban,
} from 'lucide-react';
import { useState } from 'react';

// Type definitions
type UserRole = 'admin' | 'editor' | 'author' | 'subscriber';
type UserStatus = 'active' | 'inactive' | 'suspended';

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinDate: string;
  lastLogin: string;
  posts: number;
  comments: number;
  avatar: string;
  phone: string;
}

interface StatData {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface FilterOption {
  value: string;
  label: string;
}

// Mock data
const usersData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-01-20',
    posts: 12,
    comments: 45,
    avatar: '/avatars/john.jpg',
    phone: '+1 (555) 123-4567'
  },
  {
    id: 2,
    name: 'Sarah Smith',
    email: 'sarah.smith@example.com',
    role: 'author',
    status: 'active',
    joinDate: '2024-01-10',
    lastLogin: '2024-01-19',
    posts: 8,
    comments: 23,
    avatar: '/avatars/sarah.jpg',
    phone: '+1 (555) 987-6543'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'subscriber',
    status: 'inactive',
    joinDate: '2024-01-05',
    lastLogin: '2024-01-12',
    posts: 0,
    comments: 5,
    avatar: '/avatars/mike.jpg',
    phone: '+1 (555) 456-7890'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'author',
    status: 'active',
    joinDate: '2024-01-08',
    lastLogin: '2024-01-20',
    posts: 15,
    comments: 34,
    avatar: '/avatars/emily.jpg',
    phone: '+1 (555) 234-5678'
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'subscriber',
    status: 'suspended',
    joinDate: '2024-01-12',
    lastLogin: '2024-01-18',
    posts: 0,
    comments: 2,
    avatar: '/avatars/david.jpg',
    phone: '+1 (555) 345-6789'
  },
  {
    id: 6,
    name: 'Lisa Brown',
    email: 'lisa.brown@example.com',
    role: 'editor',
    status: 'active',
    joinDate: '2024-01-03',
    lastLogin: '2024-01-20',
    posts: 23,
    comments: 67,
    avatar: '/avatars/lisa.jpg',
    phone: '+1 (555) 876-5432'
  }
];

const statsData: StatData[] = [
  {
    title: 'Total Users',
    value: '1,234',
    description: '+12% from last month',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Active Users',
    value: '892',
    description: '72% of total users',
    icon: UserCheck,
    color: 'text-green-600'
  },
  {
    title: 'New This Month',
    value: '45',
    description: '+8 from last month',
    icon: UserPlus,
    color: 'text-purple-600'
  },
  {
    title: 'Suspended',
    value: '23',
    description: 'Needs attention',
    icon: UserX,
    color: 'text-red-600'
  }
];

const roleOptions: FilterOption[] = [
  { value: 'all', label: 'All Roles' },
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'author', label: 'Author' },
  { value: 'subscriber', label: 'Subscriber' }
];

const statusOptions: FilterOption[] = [
  { value: 'all', label: 'All Status' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
];

type BulkAction = 'activate' | 'suspend' | 'delete' | 'email';

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const filteredUsers = usersData.filter((user: User) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusColor = (status: UserStatus): string => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'suspended': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleColor = (role: UserRole): string => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'editor': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'author': return 'bg-green-100 text-green-800 border-green-200';
      case 'subscriber': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleIcon = (role: UserRole): React.ReactNode => {
    switch (role) {
      case 'admin': return <Shield className="h-3 w-3" />;
      case 'editor': return <Edit className="h-3 w-3" />;
      case 'author': return <UserCheck className="h-3 w-3" />;
      case 'subscriber': return <Users className="h-3 w-3" />;
      default: return <Users className="h-3 w-3" />;
    }
  };

  const handleUserSelect = (userId: number): void => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = (): void => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const handleBulkAction = (action: BulkAction): void => {
    if (selectedUsers.length === 0) return;

    switch (action) {
      case 'activate':
        console.log('Activating users:', selectedUsers);
        break;
      case 'suspend':
        console.log('Suspending users:', selectedUsers);
        break;
      case 'delete':
        if (confirm(`Are you sure you want to delete ${selectedUsers.length} users?`)) {
          console.log('Deleting users:', selectedUsers);
        }
        break;
      case 'email':
        console.log('Sending email to users:', selectedUsers);
        break;
    }
    setSelectedUsers([]);
  };

  const handleEditUser = (user: User): void => {
    console.log('Editing user:', user);
  };

  const handleDeleteUser = (user: User): void => {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      console.log('Deleting user:', user);
    }
  };

  const handleSuspendUser = (user: User): void => {
    console.log('Suspending user:', user);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage users, roles, and permissions for your website
            </p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button variant="outline" className="cursor-pointer">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="cursor-pointer">
              <UserPlus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {statsData.map((stat: StatData, index: number) => (
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

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <span className="font-medium text-blue-900">
                  {selectedUsers.length} users selected
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('activate')}
                  className="cursor-pointer"
                >
                  <UserCheck className="h-4 w-4 mr-1" />
                  Activate
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('suspend')}
                  className="cursor-pointer"
                >
                  <Ban className="h-4 w-4 mr-1" />
                  Suspend
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('email')}
                  className="cursor-pointer"
                >
                  <Send className="h-4 w-4 mr-1" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('delete')}
                  className="cursor-pointer text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <select
                  value={roleFilter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRoleFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  {roleOptions.map((option: FilterOption) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <select
                  value={statusFilter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  {statusOptions.map((option: FilterOption) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Manage all registered users. {filteredUsers.length} users found.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">
                      <input
                        type="checkbox"
                        checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                        onChange={handleSelectAll}
                        className="rounded"
                      />
                    </th>
                    <th className="text-left py-3 px-2">User</th>
                    <th className="text-left py-3 px-2">Role</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Posts</th>
                    <th className="text-left py-3 px-2">Last Login</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user: User, index: number) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 px-2">
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => handleUserSelect(user.id)}
                          className="rounded"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <Badge variant="secondary" className={getRoleColor(user.role)}>
                          <span className="flex items-center gap-1">
                            {getRoleIcon(user.role)}
                            {user.role}
                          </span>
                        </Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Badge variant="secondary" className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2">
                        <div className="text-center">
                          <div className="font-medium">{user.posts}</div>
                          <div className="text-xs text-muted-foreground">posts</div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <div className="text-sm">
                          {new Date(user.lastLogin).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(user.lastLogin).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditUser(user)}
                            className="cursor-pointer h-8 w-8 p-0"
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuspendUser(user)}
                            className="cursor-pointer h-8 w-8 p-0"
                          >
                            <Ban className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteUser(user)}
                            className="cursor-pointer h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">No users found</h3>
                  <p className="text-muted-foreground mt-2">
                    {searchTerm || roleFilter !== 'all' || statusFilter !== 'all'
                      ? 'Try adjusting your search or filters'
                      : 'No users registered yet'
                    }
                  </p>
                  {(searchTerm || roleFilter !== 'all' || statusFilter !== 'all') && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm('');
                        setRoleFilter('all');
                        setStatusFilter('all');
                      }}
                      className="mt-4 cursor-pointer"
                    >
                      Clear filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Role Distribution</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Overview of user roles
                  </p>
                </div>
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Admins</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Editors</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Authors</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Subscribers</span>
                  <span className="font-medium">2</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Activity</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    User engagement metrics
                  </p>
                </div>
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Today</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Active This Week</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>New This Month</span>
                  <span className="font-medium">6</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Quick Actions</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Manage user accounts
                  </p>
                </div>
                <UserPlus className="h-8 w-8 text-purple-600" />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" size="sm" className="cursor-pointer justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Welcome Email
                </Button>
                <Button variant="outline" size="sm" className="cursor-pointer justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export User List
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}