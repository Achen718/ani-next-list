export interface AnimeNodeDetails {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
    };
  };
  rank?: number;
}
export interface AnimeNode {
  node: AnimeNodeDetails;
  ranking?: {
    rank: number;
  };
}
// Details page - break down the data into two sections
export interface Anime {
  id: number;
  title: string;
  main_picture: {
    medium: string;
  };
  ranking: {
    rank: number;
  };
  rank: number;
  mean: number;
  background: string;
  popularity: number;
  media_type: string;
  num_list_users: number;
  start_date: string;
  end_date: string;
  synopsis: string;
  genres: { id: number; name: string }[];
  num_episodes: number;
  status: string;
  num_scoring_users: number;
  pictures: [
    {
      large: string;
      medium: string;
    }
  ];
  start_season: {
    year: number;
    season: string;
  };
}
