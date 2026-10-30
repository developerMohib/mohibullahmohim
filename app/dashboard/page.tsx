import { safeFetch } from '@/components/utils/api';
import { IProject } from '@/sources/projects.types';
import { IReviews } from '@/sources/reviews.types';

const page = async () => {
  const { data: projects, error: projectError } = await safeFetch<IProject[]>('/project/all', {
    cache: "no-store",
  });

  // ৩. রিভিউ ডেটা সেফলি ফেচ করা
  const { data: reviews, error: reviewsError } = await safeFetch<IReviews[]>('/reviews');

  // ৪. ডেটা না থাকলে বা এরর থাকলে ০ দেখাবে, যাতে বিল্ড ক্র্যাশ না করে
  const projectCount = Array.isArray(projects) ? projects.length : 0;
  const reviewCount = Array.isArray(reviews) ? reviews.length : 0;

  return (
    <div className="p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome back, Mohibullah 👋
        </p>

        {/* অপশনাল: যদি ব্যাকএন্ড কানেকশনে সমস্যা থাকে, তাহলে একটি ছোট সতর্কবার্তা দেখাবে */}
        {(projectError || reviewsError) && (
          <div className="mt-3 rounded-md bg-red-50 p-3 text-sm text-red-700 border border-red-200">
            ⚠️ Warning: Could not fetch live data. Please check your <code>NEXT_PUBLIC_BACKEND_API</code> in .env file.
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">
            Total Projects
          </h3>

          <p className="mt-3 text-4xl font-bold text-slate-800">
            {projectCount}
          </p>

          <p className="mt-2 text-sm text-green-600">
            Active portfolio projects
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">
            Reviews
          </h3>

          <p className="mt-3 text-4xl font-bold text-slate-800">
            {reviewCount}
          </p>

          <p className="mt-2 text-sm text-blue-600">
            Client testimonials
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">
            Subscribers
          </h3>

          <p className="mt-3 text-4xl font-bold text-slate-800">
            156
          </p>

          <p className="mt-2 text-sm text-purple-600">
            Newsletter members
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-slate-800">
          Quick Actions
        </h2>

        <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
          <button className="rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-red-500 hover:shadow-md transition">
            <h3 className="font-semibold text-slate-800">
              Add Project
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Create a new portfolio project.
            </p>
          </button>

          <button className="rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-red-500 hover:shadow-md transition">
            <h3 className="font-semibold text-slate-800">
              Manage Reviews
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Update client testimonials.
            </p>
          </button>

          <button className="rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-red-500 hover:shadow-md transition">
            <h3 className="font-semibold text-slate-800">
              View Subscribers
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Check newsletter subscribers.
            </p>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Recent Activity
        </h2>

        <div className="mt-4 space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <p className="text-slate-700">
              New project added: <span className="font-medium">Learn Up LMS</span>
            </p>
            <span className="text-xs text-slate-500">
              2 hours ago
            </span>
          </div>

          <div className="border-b border-slate-100 pb-3">
            <p className="text-slate-700">
              New review received from a client.
            </p>
            <span className="text-xs text-slate-500">
              Yesterday
            </span>
          </div>

          <div>
            <p className="text-slate-700">
              3 new subscribers joined.
            </p>
            <span className="text-xs text-slate-500">
              2 days ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;