import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/fakedata/blogs';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Await the params in Next.js 14+
  const { slug } = await params;
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">{post.image}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">What You&apos;ll Learn</h2>
              <ul className="space-y-2">
                <li>Understanding core concepts and principles</li>
                <li>Practical implementation examples</li>
                <li>Best practices and common pitfalls</li>
                <li>Performance optimization techniques</li>
              </ul>
            </div>

            {/* Main content would go here */}
            <div className="space-y-6">
              <p>{post.content}</p>
              
              <h2>Deep Dive into the Technology</h2>
              <p>
                This technology represents a significant advancement in how we approach modern web development.
                Its impact on performance, developer experience, and user satisfaction cannot be overstated.
              </p>

              <h3>Key Benefits</h3>
              <ul>
                <li>Improved performance and load times</li>
                <li>Better developer experience</li>
                <li>Enhanced scalability</li>
                <li>Stronger security practices</li>
              </ul>

              <h3>Implementation Steps</h3>
              <p>
                Implementing this technology requires careful planning and consideration of your specific use case.
                Start with a proof of concept and gradually integrate it into your production environment.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}