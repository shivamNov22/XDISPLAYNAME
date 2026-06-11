import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>

          <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>

          <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {fullName && <p style={{ marginTop: "20px" }}>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
