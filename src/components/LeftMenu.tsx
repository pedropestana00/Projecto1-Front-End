import React, { useContext } from "react";
import { AppContext } from "../App";

function LeftMenu({questions}: any) {

    const { theme, setTheme } = useContext(AppContext);

    console.log("Context theme color is " + theme);

    return (
    <div className="col-3 d-flex flex-column bg-light border-end" style={{ height: "100%", padding: 0, boxShadow: "inset -1px 0 0 rgba(0,0,0,.1)" }}>
      
      {/* 1. Título Fixo */}
      <div className="p-4">
        <h6 className="text-uppercase fw-bold text-secondary mb-0" style={{ letterSpacing: "1px" , fontSize: "0.8rem" }}>
          History
        </h6>
      </div>

      {/* 2. Área de Scroll (flex-grow-1 faz com que ocupe o espaço todo até aos botões) */}
      <div className="flex-grow-1 overflow-auto px-3 custom-scrollbar">
        {[...questions].reverse().map((q: any, index: number) => {
          const originalIndex = questions.length - 1 - index;
          return (
            <div key={index} className = "mb-2">
              <a 
                href={`#msg-${originalIndex}`}
                className = "d-block p-2 rounded text-decoration-none transition-all history-item"
                style={{
                  backgroundColor: theme === "light" ? "#f8f9fa" : theme === "dark" ? "#343a40" : "#e0f7fa",
                  textOverflow: "hidden",
                  color: "inherit",
                  fontSize: "0.85em",
                  border: "1px solid transparent",
                  paddingBottom: "8px",
                  whiteSpace: "nowrap",
                  overflow: "hidden"
                }}
              >
                {q.text}
              </a>
            </div>
          );
        })}
      </div>

      {/* 3. Ícones fixos no fundo e lado a lado */}
      <div className="p-3">
        <div className="d-flex justify-content-around p-2 bg-white border rounded-pill shadow-sm">
          <span 
            role="button" 
            onClick={() => setTheme("light")} 
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            title="Light Mode"
          >
            ☀️
          </span>
          <span 
            role="button" 
            onClick={() => setTheme("dark")} 
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            title="Dark Mode"
          >
            🌙
          </span>
          <span 
            role="button" 
            onClick={() => setTheme("custom-made-mode")} 
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            title="Blue Mode"
          >
            🧞‍♂️
          </span>
        </div>
      </div>
    </div>
);

}

export default LeftMenu;