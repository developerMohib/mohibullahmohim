import { useQuery } from '@tanstack/react-query';
import instance from './instance';

export interface AboutSkill {
  _id?: string;
  name: string;
  image: string;
}

export interface AboutSkillsCategory {
  _id?: string;
  category: string;
  skills: AboutSkill[];
}

const fetchAboutSkills = async (): Promise<AboutSkillsCategory[]> => {
  const response = await instance.get<AboutSkillsCategory[]>('/api/about-skills');
  return response.data;
};

export const useGetAboutSkill = () => {
  return useQuery<AboutSkillsCategory[]>({
    queryKey: ['aboutSkills'],
    queryFn: fetchAboutSkills,
  });
};
