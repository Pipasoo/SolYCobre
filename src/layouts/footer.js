import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import sicep from "../img/sicep.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h3>Empresa</h3>
                        <a href="/quienessomos" rel="noopener noreferrer">
                            <p>Quienes Somos</p>
                        </a>
                        <a href="/servicio" rel="noopener noreferrer">
                            <p>Servicio</p>
                        </a>
                        <a href="/contacto" rel="noopener noreferrer">
                            <p>Contacto</p>
                        </a>
                        <a href="/politicas" rel="noopener noreferrer">
                            <p>Nuestras Politicas</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h3>Contacto</h3>
                        <p>Teléfono: <strong>+56 5 5226 8283</strong></p>
                        <p>Email: <strong>contacto@solycobre.cl</strong></p>
                        <p>Dirección: <strong>Osorno Nº 5417, Antofagasta, Chile</strong></p>
                    </div>
                </div>
                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Transportes Sol y Cobre. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="sb__footer-links-div">
                        <img
                        src={sicep}
                        className="imagen-footer"
                        />
                    </div>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=964684710" className="btn-wsp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
            
        </div>
    )
}
export default Footer