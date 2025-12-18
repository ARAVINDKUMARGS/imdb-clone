import React from "react";
import { FaStar } from "react-icons/fa";

function MovieCard({ movie }) {
  const stars = Math.round(movie.rating / 2); // Convert rating /10 to 5 stars

  return (
    <div className="w-48 border rounded-lg shadow-lg p-4 text-center hover:scale-105 transform transition duration-200 bg-white">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-bold">{movie.title}</h2>
      <p className="text-gray-500 text-sm mb-2">Year: {movie.year}</p>
      <div className="flex justify-center mb-2">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
      </div>
      <p className="text-gray-600 text-sm">Rating: {movie.rating}/10</p>
    </div>
  );
}

export default MovieCard;
