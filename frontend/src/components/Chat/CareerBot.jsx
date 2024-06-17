import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function CareerBot() {
  const [hobbies, setHobbies] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [experiences, setExperiences] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");

    const question = `Based on the following details, suggest some career options:
    Hobbies: ${hobbies}
    Skills: ${skills}
    Interests: ${interests}
    Past Experiences: ${experiences}`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAQa4qJBxZDGBdBEwKadVHGJA13OpYR7V4`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    } finally {
      setGeneratingAnswer(false);
    }
  }

  return (
    <div style={{ backgroundColor: "white", height: "100vh", padding: "1rem", paddingTop: "3rem" }}>
      <form
        onSubmit={generateAnswer}
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "1rem", color: "#333" }}>
          CareerBot
        </h1>
        <textarea
          required
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "95%",
            margin: "0.5rem 0",
            minHeight: "50px",
            padding: "0.75rem",
            fontSize: "1rem",
            color: "#333",
          }}
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
          placeholder="Enter your hobbies"
        ></textarea>
        <textarea
          required
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "95%",
            margin: "0.5rem 0",
            minHeight: "50px",
            padding: "0.75rem",
            fontSize: "1rem",
            color: "#333",
          }}
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter your skills"
        ></textarea>
        <textarea
          required
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "95%",
            margin: "0.5rem 0",
            minHeight: "50px",
            padding: "0.75rem",
            fontSize: "1rem",
            color: "#333",
          }}
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Enter your interests"
        ></textarea>
        <textarea
          required
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "95%",
            margin: "0.5rem 0",
            minHeight: "50px",
            padding: "0.75rem",
            fontSize: "1rem",
            color: "#333",
          }}
          value={experiences}
          onChange={(e) => setExperiences(e.target.value)}
          placeholder="Enter your past experiences"
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#4a90e2",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s",
            fontSize: "1rem",
            border: "none",
          }}
          disabled={generatingAnswer}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#357ab8")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a90e2")}
        >
          Generate Career Options
        </button>
      </form>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "1rem auto",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default CareerBot;
