export type MovieDteailsTypes = {
    imdbID?: string;
    Title?: string;
    Year?: string;
    Poster?: string;
    imdbRating?: string | number;
    [key: string]: any;
  };

export type MovieDetailsComponentTypes = {
    selectedId: string;
    onCloseMovie: () => void;
  };