import { useQuery } from '@tanstack/react-query';
import instance from './instance';

const useProjects = () => {
    const { isPending, error, data: projects, isFetching } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const response = await instance.get('/projects');
            return response?.data.data || [];
        },
    });



    return { isPending, error, projects, isFetching };
};

export default useProjects;