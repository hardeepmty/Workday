import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function CareerBot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAQa4qJBxZDGBdBEwKadVHGJA13OpYR7V4`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div style={{ backgroundColor: "white", height: "100vh", padding: "1rem" }}>
      <form
        onSubmit={generateAnswer}
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        
        <textarea
          required
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "95%",
            margin: "0.5rem 0",
            minHeight: "100px",
            padding: "0.75rem",
          }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything"
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#4a90e2",
            padding: "0.75rem",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          disabled={generatingAnswer}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#357ab8")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a90e2")}
        >
          Generate answer
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
        }}
      >
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default CareerBot;
