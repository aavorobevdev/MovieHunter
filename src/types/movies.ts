export interface MoviesState {
    movies: Movie[];
    isLoading: boolean;
    error: string | null;
}

export interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    adult: boolean;
    overview: string;
    popularity: number;
    release_date: string;
    original_language: string;
}