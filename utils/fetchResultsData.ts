import { homeSections } from '@/config/animeDetails';
import { fetchData } from '@/utils/fetchUtils';

export const fetchHomeSectionsData = async (limit: string) => {
  const homeSectionsData = await Promise.all(
    homeSections.map(async (section) => {
      const data = await fetchData('ranking', {
        ranking_type: section.ranking_type,
        limit,
      });

      return {
        sectionTitle: section.sectionTitle,
        ...data,
      };
    })
  );

  return homeSectionsData;
};
