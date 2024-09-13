export const ANIME_QUERY_PARAMS =
  'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics';

export const homeSections = [
  {
    sectionTitle: 'Upcoming Anime',
    ranking_type: 'upcoming',
  },
  {
    sectionTitle: 'Popular this season',
    ranking_type: 'airing',
  },
  {
    sectionTitle: 'Top Scoring Anime',
    ranking_type: 'all',
  },
  {
    sectionTitle: 'All Time Popular',
    ranking_type: 'bypopularity',
  },
];
