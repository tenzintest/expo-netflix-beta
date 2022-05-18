const url = "http://www.omdbapi.com/?apikey=5b1ce0f8";

export const fetchMovies = async (title) => {
  try {
    const res = await fetch(`${url}&s=${title}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
