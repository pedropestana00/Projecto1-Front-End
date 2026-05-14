
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Message from "./components/message";
import google from "./config/google";


const genAI = new GoogleGenerativeAI(google.key);


function AppGemini({chatHistory, setchatHistory}: any) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    const  startTime = Date.now();

    // Criamos um objeto simples
    const userMsg = { role: "user", text: prompt, timestamp: startTime };
    setchatHistory((prev: any[]) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);
  

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
      const result = await model.generateContent(prompt);
      const endTime = Date.now();
      const duration = endTime - startTime;

      const botMsg = { role: "model", text: result.response.text(), timestamp: endTime, responseTime: duration };

      setchatHistory((prev: any[]) => [...prev, botMsg]);
    } catch (error) {
      console.error("Erro na API:", error);
      setchatHistory((prev: any[]) => [...prev, { role: "model", text: "Sorry, something went wrong." }]);  
    } finally {
    setLoading(false);
    }
  }
    return (
      <div className="chat-container h-100 d-flex flex-column p-4">
    
        {/* Área de Mensagens (flex-grow-1 para empurrar o input para baixo) */}
        <div className="messages-list flex-grow-1 mb-3 d-flex flex-column-reverse" 
        style={{ overflowY: "auto", gap: "15px" }}>
      
        {loading && (
          <div className="text-muted small italic mb-2 animate-pulse">
            Gemini is thinking...
          </div>
        )}

        {[...chatHistory].reverse().map((msg, index) => (
          <div id={`msg-${chatHistory.length - 1 - index}`} key={index} 
             className={`d-flex ${msg.role === "user" ? "justify-content-end" : "justify-content-start"}`}>
            <Message type={msg.role === "user" ? "question" : "answer"}>
              {msg.text}
            </Message>
          </div>
        ))}
      </div>

      
      <form onSubmit={handleSubmit} className="input-wrapper">
        <input
          className="form-control custom-input flex-grow-1"
          value={prompt}
          placeholder="Type your message here..."
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit" className="btn send-btn ms-2 px-4" disabled={loading}>
          {loading ? <span className="spinner-border spinner-border-sm"></span> : "Send"}
        </button>
      </form>
    </div>
    );

  }


export default AppGemini;
