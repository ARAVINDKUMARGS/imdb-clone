import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      poster: "https://m.media-amazon.com/images/I/51k0qa8M8wL._AC_.jpg"
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      poster: "https://m.media-amazon.com/images/I/71nL3ckZZ+L._AC_SY679_.jpg"
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center bg-gray-100 min-h-screen">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default App;
