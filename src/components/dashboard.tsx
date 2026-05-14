import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { ChatCenteredText, Timer, ChartLineUp } from "phosphor-react";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router";
import { auth } from "../config/firebase";

function Dashboard() {
  const navigate = useNavigate();

    const isAuthenticated = useEffect(() => {
        const user = auth.currentUser;
        if (!user) {
            navigate("/Error");
        }
    }, []);

  const { chatHistory } = useContext(AppContext);
  const now = Date.now();

  
  const cincoMinutosMs = 5 * 60 * 1000;
  const perguntasRecentes = chatHistory.filter((msg: any) => 
    msg.role === "user" && (now - msg.timestamp) < cincoMinutosMs
  ).length;

  // Cálculo de pedidos e média 
  const totalPerguntas = chatHistory.filter((msg: any) => msg.role === "user").length;
  const respostas = chatHistory.filter((msg: any) => msg.role === "model" && msg.responseTime);
  const somaTempos = respostas.reduce((acc: number, msg: any) => acc + msg.responseTime, 0);
  const mediaSegundos = respostas.length > 0 ? (somaTempos / respostas.length / 1000).toFixed(1) : "0.0";

  return (
    <div>
    <Header/>
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "600px" }}>
      <div className="row w-100 justify-content-center g-4 py-4">
        
        {/* Cartão 1: Total */}
        <div className="col-md-4">
          <div className="card shadow-lg p-4 text-center border-0 bg-body-tertiary h-100" style={{ borderRadius: "25px" }}>
            <ChatCenteredText size={50} weight="duotone" className="text-primary mb-2 mx-auto" />
            <h1 className="display-4 fw-bold text-primary mb-0">{totalPerguntas}</h1>
            <p className="text-muted text-uppercase fw-bold small">Total Pedidos</p>
          </div>
        </div>

        {/* Cartão 2: Média */}
        <div className="col-md-4">
          <div className="card shadow-lg p-4 text-center border-0 bg-body-tertiary h-100" style={{ borderRadius: "25px" }}>
            <Timer size={50} weight="duotone" className="text-warning mb-2 mx-auto" />
            <h1 className="display-4 fw-bold text-warning mb-0">{mediaSegundos}s</h1>
            <p className="text-muted text-uppercase fw-bold small">Média Resposta</p>
          </div>
        </div>

        {/* Cartão 3: Atividade Recente (Métrica 3) */}
        <div className="col-md-4">
          <div className="card shadow-lg p-4 text-center border-0 bg-body-tertiary h-100" style={{ borderRadius: "25px" }}>
            <ChartLineUp size={50} weight="duotone" className="text-success mb-2 mx-auto" />
            <h1 className="display-4 fw-bold text-success mb-0">{perguntasRecentes}</h1>
            <p className="text-muted text-uppercase fw-bold small">Últimos 5 min</p>
            <div className="progress mt-2" style={{ height: "8px" }}>
               <div 
                 className="progress-bar bg-success" 
                 style={{ width: `${(perguntasRecentes / (totalPerguntas || 1)) * 100}%` }}
               ></div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Dashboard;


