import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faWhatsapp);

const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="box">
        <hr />
        <h2 className="intro-text text-center">Contáctate con <strong>Sol y Cobre</strong></h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3655.51521828106!2d-70.385618!3d-23.621712999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd52acc193853%3A0x26fe8030f866259f!2sSociedad+de+Transportes+Sol+y+Cobre!5e0!3m2!1sen!2scl!4v1427464863712" width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </div>
          <div className=" mt-4 col-md-6">
            <div style={{ textAlign: "left" }}>
              <p>Teléfono: <strong>+56 5 5226 8283</strong></p>
              <p>Email: <strong><a href="mailto:contacto@solycobre.cl" target="_blank" rel="noopener noreferrer">contacto@solycobre.cl</a></strong></p>
              <p>Dirección: <strong>Osorno Nº 5417<br />Antofagasta, Chile</strong></p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=964684710" className="btn-wsp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
    </div>
  );
}

export default Contact;
