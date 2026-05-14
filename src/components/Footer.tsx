import React from "react";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "phosphor-react";
import { useContext } from "react";
import { AppContext }  from "../App";

function Footer() {
    const { theme } = useContext(AppContext);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-3 border-top bg-body-tertiary mt-auto" data-bs-theme={theme}>
            <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center px-4">
        
                {/* Esquerda: Copyright */}
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted small">
                    © {currentYear} <strong>GEMINI DEMO</strong>. Todos os direitos reservados.
                    </span>
                </div>

                {/* Centro: Redes/Contacto */}
                <ul className="nav col-md-4 justify-content-center list-unstyled d-flex gap-3">
                    <li>
                        <a href="#" className="text-muted hover-primary">
                        <GithubLogo size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-muted hover-primary">
                        <LinkedinLogo size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:suporte@app.com" className="text-muted hover-primary">
                        <EnvelopeSimple size={20} />
                        </a>
                    </li>
                </ul>

                {/* Direita: Status do Sistema */}
                <div className="col-md-4 d-flex justify-content-end align-items-center gap-2">
                    <span className="small text-muted">v1.0.2</span>
                    <span className="badge rounded-pill bg-success" style={{ fontSize: '0.7rem' }}>
                    Sistema Online
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;