import { useQuery } from '@tanstack/react-query';
import instance from './instance';
const useVisitors = () => {
    const { isPending, error, data: visitors, isFetching } = useQuery({
        queryKey: ['visitors'],
        queryFn: async () => {
            const response = await instance.get('/all/visitor');
            return response?.data.data || [];
        },
    });
    return { isPending, error, visitors, isFetching };
};
export default useVisitors;