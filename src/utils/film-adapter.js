const parseFilm = (film) => ({
  id: film[`id`],
  cover: film[`background_image`],
  description: film[`description`],
  genre: [film[`genre`]],
  name: film[`name`],
  poster: film[`poster_image`],
  preview: film[`preview_video_link`],
  previewImage: film[`preview_image`], // add this
  rating: film[`rating`],
  videoLink: film[`video_link`],
  votes: film[`scores_count`],
  year: film[`released`],
  details: {
    director: film[`director`],
    actors: film[`starring`],
    length: {
      hours: film[`run_time`],
      minutes: film[`run_time`],
    }
  },

  // 'is_favorite': false,
  // 'background_color': '#E1DAD7',
});

const parseFilms = (films) => films.map(parseFilm);


export {
  parseFilm,
  parseFilms,
};
