import {
  getRunTimeHours,
  getRunTimeMinutes,
} from './time.js';

const parseFilm = (film) => ({
  id: film.id,
  backgroundColor: film.background_color,
  cover: film.background_image,
  description: film.description,
  genre: film.genre,
  isFavorite: film.is_favorite,
  name: film.name,
  poster: film.poster_image,
  preview: film.preview_video_link,
  previewImage: film.preview_image,
  rating: film.rating,
  videoLink: film.video_link,
  votes: film.scores_count,
  year: film.released,
  details: {
    director: film.director,
    actors: film.starring,
    length: {
      hours: getRunTimeHours(film.run_time),
      minutes: getRunTimeMinutes(film.run_time),
    }
  },
});

const parseFilms = (films) => films.map(parseFilm);


export {
  parseFilm,
  parseFilms,
};
