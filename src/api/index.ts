import Ky from "ky";

export const BASE_URL = `https://api.themoviedb.org/3`;

export const ky = Ky.extend({
  prefixUrl: BASE_URL,
  searchParams: {
    api_key: import.meta.env.VITE_THEMOVIEDB,
  },
});
