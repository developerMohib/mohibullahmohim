// app/dashboard/analytics/page.tsx
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Eye,
  TrendingUp,
  Clock,
  Globe,
  Smartphone,
  Calendar,
  Download,
  ArrowUp,
  ArrowDown,
  BarChart3,
  MapPin
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import instance from '@/hook/instance';

// Type definitions
interface AnalyticsData {
  period: string;
  visitors: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
  newVisitors: number;
}

interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
  trend: 'up' | 'down';
}

interface TopPage {
  page: string;
  views: number;
  visitors: number;
  bounceRate: number;
}

interface DeviceData {
  device: string;
  visitors: number;
  percentage: number;
}

interface LocationData {
  country: string;
  visitors: number;
  percentage: number;
  trend: 'up' | 'down';
}
interface VisitorStats {
  totalVisitors: number;
  totalVisits: number;
  country?: string;
  city?: string;
  device?: string;
  browser?: string;
}
export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);
const [stats, setStats] = useState<VisitorStats | null>(null);

  // Mock data - replace with actual API data
  const overviewStats = [
    {
      title: 'Total Visitors',
      value: '12,458',
      change: '+12.5%',
      trend: 'up' as const,
      description: 'vs previous period',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Page Views',
      value: '45,231',
      change: '+8.3%',
      trend: 'up' as const,
      description: 'vs previous period',
      icon: Eye,
      color: 'text-green-600'
    },
    {
      title: 'Bounce Rate',
      value: '42.3%',
      change: '-2.1%',
      trend: 'down' as const,
      description: 'vs previous period',
      icon: TrendingUp,
      color: 'text-orange-600'
    },
    {
      title: 'Avg. Session',
      value: '3m 24s',
      change: '+0.8%',
      trend: 'up' as const,
      description: 'vs previous period',
      icon: Clock,
      color: 'text-purple-600'
    }
  ];

  const trafficSources: TrafficSource[] = [
    { source: 'Organic Search', visitors: 5240, percentage: 42, trend: 'up' },
    { source: 'Direct', visitors: 3120, percentage: 25, trend: 'up' },
    { source: 'Social Media', visitors: 1872, percentage: 15, trend: 'down' },
    { source: 'Referral', visitors: 1248, percentage: 10, trend: 'up' },
    { source: 'Email', visitors: 624, percentage: 5, trend: 'up' },
    { source: 'Other', visitors: 374, percentage: 3, trend: 'down' }
  ];

  const topPages: TopPage[] = [
    { page: '/', views: 8452, visitors: 4231, bounceRate: 38.2 },
    { page: '/blog/react-tips', views: 6234, visitors: 3117, bounceRate: 42.1 },
    { page: '/blog/javascript', views: 5123, visitors: 2561, bounceRate: 45.8 },
    { page: '/about', views: 3124, visitors: 1562, bounceRate: 52.3 },
    { page: '/contact', views: 2345, visitors: 1172, bounceRate: 48.7 }
  ];

  const devices: DeviceData[] = [
    { device: 'Desktop', visitors: 7480, percentage: 60 },
    { device: 'Mobile', visitors: 3740, percentage: 30 },
    { device: 'Tablet', visitors: 1248, percentage: 10 }
  ];

  const locations: LocationData[] = [
    { country: 'United States', visitors: 4231, percentage: 34, trend: 'up' },
    { country: 'United Kingdom', visitors: 1872, percentage: 15, trend: 'up' },
    { country: 'Canada', visitors: 1248, percentage: 10, trend: 'down' },
    { country: 'Germany', visitors: 936, percentage: 7.5, trend: 'up' },
    { country: 'Australia', visitors: 748, percentage: 6, trend: 'up' }
  ];

  const visitorData: AnalyticsData[] = [
    { period: 'Jan 1', visitors: 312, pageViews: 1245, bounceRate: 42.1, avgSessionDuration: 185, newVisitors: 234 },
    { period: 'Jan 2', visitors: 298, pageViews: 1192, bounceRate: 41.8, avgSessionDuration: 192, newVisitors: 223 },
    { period: 'Jan 3', visitors: 345, pageViews: 1380, bounceRate: 39.2, avgSessionDuration: 210, newVisitors: 259 },
    { period: 'Jan 4', visitors: 387, pageViews: 1548, bounceRate: 38.7, avgSessionDuration: 198, newVisitors: 290 },
    { period: 'Jan 5', visitors: 423, pageViews: 1692, bounceRate: 37.9, avgSessionDuration: 205, newVisitors: 317 },
    { period: 'Jan 6', visitors: 398, pageViews: 1592, bounceRate: 40.1, avgSessionDuration: 187, newVisitors: 298 },
    { period: 'Jan 7', visitors: 456, pageViews: 1824, bounceRate: 36.8, avgSessionDuration: 215, newVisitors: 342 }
  ];

  const handleExportData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Analytics data exported successfully!');
    } catch (error) {
      console.log(error);
      toast.error('Error exporting data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getTrendColor = (trend: 'up' | 'down') => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  const getTrendIcon = (trend: 'up' | 'down') => {
    return trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };


   useEffect(() => {
    instance
      .post("/all/visitor")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);
console.log('Visitor Stats:', stats);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Site Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Track and analyze your website performance
          </p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <Button
            onClick={handleExportData}
            disabled={isLoading}
            variant="outline"
            className="cursor-pointer"
          >
            <Download className="h-4 w-4 mr-2" />
            {isLoading ? 'Exporting...' : 'Export'}
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {overviewStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs">
                  <span className={`flex items-center ${getTrendColor(stat.trend)}`}>
                    {getTrendIcon(stat.trend)}
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground ml-1">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
            <CardDescription>
              Where your visitors are coming from
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="font-medium">{source.source}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                    <div className="text-right w-20">
                      <div className="font-medium">{source.visitors.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{source.percentage}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Device Usage
            </CardTitle>
            <CardDescription>
              Devices used by your visitors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {devices.map((device) => (
                <div key={device.device} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${device.device === 'Desktop' ? 'bg-green-500' :
                        device.device === 'Mobile' ? 'bg-blue-500' : 'bg-purple-500'
                      }`} />
                    <span className="font-medium">{device.device}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${device.device === 'Desktop' ? 'bg-green-500' :
                            device.device === 'Mobile' ? 'bg-blue-500' : 'bg-purple-500'
                          }`}
                        style={{ width: `${device.percentage}%` }}
                      />
                    </div>
                    <div className="text-right w-20">
                      <div className="font-medium">{device.visitors.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{device.percentage}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mt-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Top Pages
            </CardTitle>
            <CardDescription>
              Most visited pages on your site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page) => (
                <div key={page.page} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium truncate">{page.page}</div>
                    <div className="text-sm text-muted-foreground">
                      {page.views.toLocaleString()} views • {page.visitors.toLocaleString()} visitors
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{page.bounceRate}%</div>
                    <div className="text-sm text-muted-foreground">Bounce rate</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Visitor Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Visitor Locations
            </CardTitle>
            <CardDescription>
              Top countries by visitors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{location.country}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${location.percentage}%` }}
                      />
                    </div>
                    <div className="text-right w-20">
                      <div className="font-medium">{location.visitors.toLocaleString()}</div>
                      <div className="flex items-center justify-end text-xs">
                        <span className={getTrendColor(location.trend)}>
                          {getTrendIcon(location.trend)}
                        </span>
                        <span className="text-muted-foreground ml-1">{location.percentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Visitor Data Table */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Daily Analytics
          </CardTitle>
          <CardDescription>
            Detailed daily performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 font-medium">Date</th>
                  <th className="text-left py-3 px-2 font-medium">Visitors</th>
                  <th className="text-left py-3 px-2 font-medium">Page Views</th>
                  <th className="text-left py-3 px-2 font-medium">Bounce Rate</th>
                  <th className="text-left py-3 px-2 font-medium">Avg. Session</th>
                  <th className="text-left py-3 px-2 font-medium">New Visitors</th>
                </tr>
              </thead>
              <tbody>
                {visitorData.map((data) => (
                  <tr key={data.period} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">{data.period}</td>
                    <td className="py-3 px-2">{data.visitors}</td>
                    <td className="py-3 px-2">{data.pageViews}</td>
                    <td className="py-3 px-2">{data.bounceRate}%</td>
                    <td className="py-3 px-2">{Math.floor(data.avgSessionDuration / 60)}m {data.avgSessionDuration % 60}s</td>
                    <td className="py-3 px-2">{data.newVisitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Peak Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>2:00 PM - 4:00 PM</span>
                <Badge variant="secondary">+28% traffic</Badge>
              </div>
              <div className="flex justify-between">
                <span>7:00 PM - 9:00 PM</span>
                <Badge variant="secondary">+15% traffic</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Best Performing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Blog Posts</span>
                <Badge variant="secondary">45% engagement</Badge>
              </div>
              <div className="flex justify-between">
                <span>Tutorial Pages</span>
                <Badge variant="secondary">38% engagement</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div>• Improve mobile experience</div>
              <div>• Optimize page load times</div>
              <div>• Add more blog content</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}