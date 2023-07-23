export type WatchedMoviesList = {
  imdbID?: string;
  Title?: string;
  Year?: string;
  Poster?: string;
  imdbRating?: string | number;
  [key: string]: any;
};

export type SearchedMoviesList = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type BoxProps = {
  children: React.ReactNode;
};

export type HomePageTypes = {
  query: string;
  movies: SearchedMoviesList[];
  onSearchMovie: (value: SearchedMoviesList[]) => void;
};

export type HeaderComponentTypes = {
  query?: string;
  movies: SearchedMoviesList[];
  onSearch: (value: string) => void;
};
export type MovieComponentTypes = {
  movie: SearchedMoviesList;
  onSelectMovie: (value: string) => void;
};
export type MovieDetailsComponentTypes = {
  selectedId: string;
  watched: WatchedMoviesList[];
  onCloseMovie: () => void;
  onAddWatched: (value: any) => void;
};
export type MovieListComponentTypes = {
  movies: SearchedMoviesList[];
  onSelectMovie: (value: any) => void;
};
export type WatchedMovieComponentTypes = {
  movie: WatchedMoviesList;
  onDeleteWatched: (value: string | undefined) => void;
};
export type WatchedMovieBoxComponentTypes = {
  watched: WatchedMoviesList[];
  onDeleteWatched: (value: string | undefined) => void;
};
export type WatchedMovieSummaryComponentTypes = {
  watched: WatchedMoviesList[];
};
