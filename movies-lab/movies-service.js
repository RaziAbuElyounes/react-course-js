export const getTitles = movies => movies.map(movies => movies.title);
export const getAvailable = movies => movies.filter(movies => movies.available);
export const getById = (movies, id) => movies.find(movies => movies.id === id);
export const getByGenre = (movies, genre) => movies.filter(movie => movie.genres.includes(genre));
export const searchByTitle = (movies, text) => movies.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()));
export const hasMoviesBefore = (movies, year) => movies.some(movie => movie.year < year);
export const allHaveDirector = movies => movies.every(movie => movie.directory?.name);
export const getCastNames = movie => movie.cast.map(actor => actor.name);