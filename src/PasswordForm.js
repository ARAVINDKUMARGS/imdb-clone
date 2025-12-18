import React, { useState } from "react";

function PasswordForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isStrong = Object.values(rules).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px",
              width: "250px",
              borderRadius: "5px",
              border: "2px solid #ccc",
              marginBottom: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              width: "250px",
              borderRadius: "5px",
              border: "2px solid #ccc",
            }}
          />
        </div>

        <div style={{ textAlign: "left", margin: "10px auto", width: "250px" }}>
          <p style={{ color: rules.length ? "green" : "red" }}>
            {rules.length ? "✅" : "❌"} At least 8 characters
          </p>
          <p style={{ color: rules.uppercase ? "green" : "red" }}>
            {rules.uppercase ? "✅" : "❌"} Contains uppercase letter
          </p>
          <p style={{ color: rules.number ? "green" : "red" }}>
            {rules.number ? "✅" : "❌"} Contains a number
          </p>
          <p style={{ color: rules.specialChar ? "green" : "red" }}>
            {rules.specialChar ? "✅" : "❌"} Contains special character
          </p>
        </div>

        <button
          type="submit"
          disabled={!isStrong}
          style={{
            padding: "10px 20px",
            cursor: isStrong ? "pointer" : "not-allowed",
            backgroundColor: isStrong ? "green" : "gray",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PasswordForm;
