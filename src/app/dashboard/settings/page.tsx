// app/dashboard/settings/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Save,
  Shield,
  Bell,
  User,
  Globe,
  Eye,
  EyeOff,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
  Key,
  Smartphone,
  Database,
  Palette
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'contacts';
  showOnlineStatus: boolean;
  allowIndexing: boolean;
  dataSharing: boolean;
}

interface SecuritySession {
  id: string;
  device: string;
  browser: string;
  location: string;
  lastActive: string;
  current: boolean;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<string>('general');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Password states
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  
  // Profile states
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe',
    bio: 'Full-stack developer and tech enthusiast',
    website: 'https://johndoe.com',
    location: 'New York, USA'
  });

  // Notification states


  // Privacy states
  const [privacy, setPrivacy] = useState<PrivacySettings>({
    profileVisibility: 'public',
    showOnlineStatus: true,
    allowIndexing: true,
    dataSharing: false
  });

  // Security sessions
  const [sessions, setSessions] = useState<SecuritySession[]>([
    {
      id: '1',
      device: 'Windows PC',
      browser: 'Chrome 119.0',
      location: 'New York, USA',
      lastActive: '2024-01-20T10:30:00Z',
      current: true
    },
    {
      id: '2',
      device: 'MacBook Pro',
      browser: 'Safari 17.0',
      location: 'New York, USA',
      lastActive: '2024-01-19T15:45:00Z',
      current: false
    },
    {
      id: '3',
      device: 'iPhone 15',
      browser: 'Mobile Safari',
      location: 'Boston, USA',
      lastActive: '2024-01-18T08:20:00Z',
      current: false
    }
  ]);

  const tabs = [
    { id: 'general', label: 'General', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Globe },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'backup', label: 'Backup & Data', icon: Database }
  ];

  const handlePasswordChange = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match!');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters long!');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
            toast.success('Password changed successfully!');
      
      // Reset form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Error changing password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmergencyPasswordReset = (): void => {
    if (confirm('This will log you out of all devices and send a password reset link to your email. Continue?')) {
      // Add emergency reset logic here
      toast.warning('Password reset link sent to your email!');
    }
  };

  const handleTerminateSession = (sessionId: string): void => {
    if (confirm('Are you sure you want to terminate this session?')) {
      setSessions(sessions.filter(session => session.id !== sessionId));
    }
  };

  const handleTerminateAllSessions = (): void => {
    if (confirm('This will log you out of all devices except this one. Continue?')) {
      setSessions(sessions.filter(session => session.current));
    }
  };

  const handleExportData = (): void => {
    // Add data export logic here
    console.log('Exporting user data...');
    alert('Your data export has started. You will receive an email when it is ready.');
  };

  const handleDeleteAccount = (): void => {
    if (confirm('This will permanently delete your account and all associated data. This action cannot be undone. Continue?')) {
      if (prompt('Please type "DELETE" to confirm:') === 'DELETE') {
        // Add account deletion logic here
        console.log('Account deletion confirmed');
        alert('Your account has been scheduled for deletion.');
      }
    }
  };

  const renderGeneralSettings = (): React.ReactNode => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your personal information and how others see you on the site.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={profileData.username}
                onChange={(e) => setProfileData({...profileData, username: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input
              id="bio"
              value={profileData.bio}
              onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
              placeholder="Tell us about yourself..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={profileData.website}
                onChange={(e) => setProfileData({...profileData, website: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={profileData.location}
                onChange={(e) => setProfileData({...profileData, location: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecuritySettings = (): React.ReactNode => (
    <div className="space-y-6">
      {/* Emergency Password Change */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-100">
            <AlertTriangle className="h-5 w-5" />
            Emergency Password Change
          </CardTitle>
          <CardDescription className="text-red-700 dark:text-red-300">
            Change your password immediately if you suspect unauthorized access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleEmergencyPasswordReset}
            variant="destructive"
            className="w-full sm:w-auto cursor-pointer"
          >
            <Key className="h-4 w-4 mr-2" />
            Emergency Password Reset
          </Button>
        </CardContent>
      </Card>

      {/* Regular Password Change */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your password regularly to keep your account secure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="cursor-pointer">
              {isLoading ? 'Changing Password...' : 'Change Password'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>
            Manage your active sessions across different devices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Smartphone className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{session.device}</div>
                    <div className="text-sm text-muted-foreground">
                      {session.browser} • {session.location}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last active: {new Date(session.lastActive).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {session.current && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Current
                    </Badge>
                  )}
                  {!session.current && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTerminateSession(session.id)}
                      className="cursor-pointer"
                    >
                      Terminate
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {sessions.length > 1 && (
            <Button
              variant="outline"
              onClick={handleTerminateAllSessions}
              className="mt-4 w-full cursor-pointer"
            >
              Terminate All Other Sessions
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">2FA Status</div>
              <div className="text-sm text-muted-foreground">
                Two-factor authentication is currently disabled
              </div>
            </div>
            <Button variant="outline" className="cursor-pointer">
              Enable 2FA
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationSettings = (): React.ReactNode => (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose how you want to be notified about different activities.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <div className="text-sm text-muted-foreground">
              Receive notifications via email
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <div className="text-sm text-muted-foreground">
              Receive push notifications in your browser
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="security-alerts">Security Alerts</Label>
            <div className="text-sm text-muted-foreground">
              Get notified about important security events
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="newsletter">Newsletter</Label>
            <div className="text-sm text-muted-foreground">
              Receive our weekly newsletter
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="comment-replies">Comment Replies</Label>
            <div className="text-sm text-muted-foreground">
              Get notified when someone replies to your comments
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPrivacySettings = (): React.ReactNode => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>
            Control your privacy and how your information is shared.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="profile-visibility">Profile Visibility</Label>
            <select
              id="profile-visibility"
              value={privacy.profileVisibility}
              onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value as 'public' | 'private' | 'contacts'})}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="public">Public</option>
              <option value="contacts">Contacts Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="online-status">Show Online Status</Label>
              <div className="text-sm text-muted-foreground">
                Let others see when you  re online
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="allow-indexing">Search Engine Indexing</Label>
              <div className="text-sm text-muted-foreground">
                Allow search engines to index your profile
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="data-sharing">Data Sharing</Label>
              <div className="text-sm text-muted-foreground">
                Share anonymous usage data to help improve our services
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
          <CardDescription>
            Control your personal data and privacy.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleExportData}
            variant="outline"
            className="w-full justify-start cursor-pointer"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Personal Data
          </Button>
          
          <Button
            onClick={handleDeleteAccount}
            variant="outline"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppearanceSettings = (): React.ReactNode => (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize how the application looks and feels.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="theme">Theme</Label>
          <select id="theme" className="w-full px-3 py-2 border rounded-md">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        <div className="space-y-4">
          <Label htmlFor="language">Language</Label>
          <select id="language" className="w-full px-3 py-2 border rounded-md">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="compact-mode">Compact Mode</Label>
            <div className="text-sm text-muted-foreground">
              Use compact spacing for lists and tables
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="animations">Animations</Label>
            <div className="text-sm text-muted-foreground">
              Enable animations and transitions
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderBackupSettings = (): React.ReactNode => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Backup & Restore</CardTitle>
          <CardDescription>
            Manage your data backups and restoration points.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="cursor-pointer">
              <Download className="h-4 w-4 mr-2" />
              Create Backup
            </Button>
            <Button variant="outline" className="cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              Restore from Backup
            </Button>
          </div>
          
          <div className="space-y-2">
            <Label>Recent Backups</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">Backup_2024_01_20</div>
                  <div className="text-sm text-muted-foreground">January 20, 2024 - 15.2 MB</div>
                </div>
                <Button variant="outline" size="sm" className="cursor-pointer">
                  Restore
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">Backup_2024_01_15</div>
                  <div className="text-sm text-muted-foreground">January 15, 2024 - 14.8 MB</div>
                </div>
                <Button variant="outline" size="sm" className="cursor-pointer">
                  Restore
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Auto Backup</CardTitle>
          <CardDescription>
            Configure automatic backup settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-backup">Automatic Backups</Label>
              <div className="text-sm text-muted-foreground">
                Create backups automatically
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="backup-frequency">Backup Frequency</Label>
            <select id="backup-frequency" className="w-full px-3 py-2 border rounded-md">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="cloud-backup">Cloud Backup</Label>
              <div className="text-sm text-muted-foreground">
                Store backups in cloud storage
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'general' && renderGeneralSettings()}
              {activeTab === 'security' && renderSecuritySettings()}
              {activeTab === 'notifications' && renderNotificationSettings()}
              {activeTab === 'privacy' && renderPrivacySettings()}
              {activeTab === 'appearance' && renderAppearanceSettings()}
              {activeTab === 'backup' && renderBackupSettings()}
            </motion.div>

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <Button className="cursor-pointer">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}