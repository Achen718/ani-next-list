export interface Anime {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large?: string;
    };
    rank?: number;
    mean?: number;
    end_date?: string;
    synopsis?: string;
    genres?: { id: number; name: string }[];
    num_episodes?: number;
    start_season?: {
      year: number;
      season: string;
    };
  };
}
