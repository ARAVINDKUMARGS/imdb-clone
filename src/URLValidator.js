import React, { useState } from "react";

function URLValidator() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(null);

  // URL validation regex
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +                   // optional protocol
    "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" + // domain name
    "localhost|" +                          // localhost
    "((\\d{1,3}\\.){3}\\d{1,3}))" +        // OR IPv4
    "(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*" + // port and path
    "(\\?[;&a-zA-Z0-9%_.~+=-]*)?" +        // query string
    "(\\#[-a-zA-Z0-9_]*)?$",               // fragment locator
    "i"
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    setIsValid(urlPattern.test(value));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-3">
      <input
        type="text"
        placeholder="Enter URL here..."
        value={url}
        onChange={handleChange}
        className="border p-2 rounded w-96 text-gray-800"
      />
      {isValid === null ? null : isValid ? (
        <p className="text-green-600 font-semibold">✅ Valid URL</p>
      ) : (
        <p className="text-red-600 font-semibold">❌ Invalid URL</p>
      )}
    </div>
  );
}

export default URLValidator;
