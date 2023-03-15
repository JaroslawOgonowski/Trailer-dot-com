export const getMovie = async () => {

  const response = await fetch("/Netflix-style-movie-page-on-react/wednesday.json");

  if (!response.ok) {
      new Error(response.statusText);
  }
  return await response.json();
};