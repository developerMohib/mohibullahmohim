import UpdateProjectForm from "@/components/pages/Updateproject";

const Page = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/project/${id}`,
        {
            cache: "no-store",
        }
    );

    const project = await res.json();

    return (
        <UpdateProjectForm
            project={project.data || project}
        />
    );
};

export default Page;