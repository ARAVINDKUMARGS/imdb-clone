import React, { useState, useEffect } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `https://api.datamuse.com/sug?s=${query}`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300); 

    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (word) => {
    setQuery(word);
    setSuggestions([]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Type something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "2px solid #ccc",
          outline: "none",
        }}
      />
      {suggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "10px auto",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            textAlign: "left",
          }}
        >
          {suggestions.map((item) => (
            <li
              key={item.word}
              onClick={() => handleSelect(item.word)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {item.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
