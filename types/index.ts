export interface AnimeNode {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
    };
  };
}

export interface Anime {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
  ranking: {
    rank: number;
  };
  rank: number;
  mean: number;
  popularity: number;
  media_type: string;
  num_list_users: number;
  end_date: string;
  synopsis: string;
  genres: { id: number; name: string }[];
  num_episodes: number;
  status: string;
  start_season: {
    year: number;
    season: string;
  };
}
