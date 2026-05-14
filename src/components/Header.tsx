import { useNavigate } from "react-router-dom";
import { House, UserCircle, SquaresFour } from "phosphor-react";
import { useContext } from "react";
import { AppContext }  from "../App";
import { auth } from "../config/firebase";

function Header() {
  const navigate = useNavigate();
  const { theme } = useContext(AppContext);

  const handleSignout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom shadow-sm bg-body-tertiary" data-bs-theme={theme}>
      
      {/* Esquerda: Dashboard */}
      <div className="header-left">
        <button 
          className="btn btn-outline-primary d-flex align-items-center gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <SquaresFour size={24} />
          <span className="d-none d-md-inline">Dashboard</span>
        </button>
      </div>

      {/* Centro: Título com o ícone House */}
      <div 
        className="header-center d-flex align-items-center gap-2" 
        style={{ cursor: 'pointer' }}
        onClick={() => navigate("/content")}
      >
        <House size={28} weight="duotone" className="text-primary" />
        <h4 className="m-0 fw-bold text-uppercase">Gemini Demo</h4>
      </div>

      {/* Direita: Perfil */}
      <div className="header-right d-flex align-items-center gap-2"
        style={{ cursor: 'pointer' }}
        onClick={handleSignout}
        title="Sair">
        <div className="d-flex flex-column text-end d-none d-sm-block">
          <span className="small fw-bold lh-1">Anónimo</span>
        </div>
        <UserCircle size={35} weight="light" className="text-secondary" />
      </div>

    </header>
  );
}

export default Header;

