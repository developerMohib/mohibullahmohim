import UpdateProjectForm from "@/components/dashboard/UpdateProjectForm";
import { safeFetch } from "@/lib/api";
import { IProject } from "@/types/projects"; // আপনার টাইপ ডেফিনেশন অনুযায়ী

const Page = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const { data: project, error } = await safeFetch<IProject>(`/project/${id}`, {
        cache: "no-store",
    });

    if (error || !project) {
        return (
            <div className="max-w-4xl mx-auto p-8 text-center">
                <h1 className="text-2xl font-bold text-red-600">
                    Failed to load project
                </h1>
                <p className="mt-2 text-slate-600">
                    {error || "Project not found. Please check the ID or your backend connection."}
                </p>
                <a 
                    href="/dashboard" 
                    className="inline-block mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
                >
                    ← Back to Dashboard
                </a>
            </div>
        );
    }

    // ৪. ডেটা সঠিক থাকলে ফর্মটি রেন্ডার করা
    return (
        <UpdateProjectForm
            project={project}
            
        />
    );
};

export default Page;