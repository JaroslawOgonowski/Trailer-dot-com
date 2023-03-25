export const getMovie = async () => {

  const response = await fetch("/Trailer-dot-com/movies.json");

  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.json();
};