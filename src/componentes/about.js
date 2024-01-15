import React from 'react';
import about1 from '../img/about11.jpeg';
import about2 from '../img/buses1.jpg';
import about3 from '../img/about12.jpeg';
import aker from '../img/client-aker.jpg';
import bechtel from '../img/client-bechtel.jpg';
import bhp from '../img/client-bhp.jpg';
import bucyrus from '../img/client-bucyrus.jpg';
import cytec from '../img/client-cytec.png';
import gsap from '../img/client-gsap.jpg';
import mb from '../img/client-mb.jpg';
import rizzo from '../img/client-rizzo.jpg';
import skm from '../img/client-skm.jpg';
import thyssen from '../img/client-thyssen.jpg';
import '../css/contenedores.css';

const About = () => {
    return (
        <div className="container mt-4">
            <div className="box box1">
                <div className="row">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Acerca de<strong> SOL Y COBRE</strong></h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <img className="float-left img-fluid img-about-page" src={about1} alt="" />
                        </div>
                        <div className="col-md-6 mt-4" style={{ textAlign: "left" }}>
                            <p className="text-justify">Sol y Cobre fue creado con el propósito de prestar servicios a la comunidad y por ende a las empresas más importantes de la región y que actualmente se encuentran laborando en ella. No tan sólo era la necesidad de entregar un buen servicio, a la vez entregar la seguridad y la confiabilidad de que los traslados se realizarían en la mejor forma posible.
                            </p>
                            <p>Con el tiempo fue adquiriendo esa seguridad y confiabilidad ganándose así el respeto de otras empresas. A través del tiempo se fue 
                            dando a conocer hacia las distintas empresas que operan en la ciudad, también hacia los contratistas que prestan servicios a 
                            la minería, así llegamos a trabajar con empresas como: Fluor Daniel Chile, Minera Escondida Ltda, Bucyrus International, Minera Spence, BHP Chile, etc.</p>
                            <p>Sol y Cobre en sus inicios sólo tenía 4 taxis básicos. Hoy nuestra flota están conformada por Buses, Minibuses y Camiones, cada una de estas unidades cuenta con todo el equipamiento de seguridad, comunicación 
                            y control, que cumplen con todos los requerimientos de areas de Gerencia y de Servicios a las Personas requeridos por la 
                            Empresas Mineras y de Servicios.</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="box box1">
                <div className="row">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Nuestra <strong>Misión</strong></h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="float-left img-fluid border-left" src={about2} alt="" />
                        </div>
                        <div className="col-lg-9" style={{ textAlign: "left" }}>
                            <p className="text-justify">Entregar un servicio de traslado a personas de forma segura, eficiente y confortable para todas las empresas de la zona norte.</p>
                            <p className="text-justify">Cuidar que nuestros vehiculos se mantegan en buenas condiciones mecanicas y con buen aseo.</p>
                            <p className="text-justify">Contar con conductores profesionales, responsables, respetuosos y amables.</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="box box1">
                <div className="row">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Nuestra <strong>Visión</strong></h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="float-left img-fluid border-left" src={about3} alt="" />
                        </div>
                        <div className="col-lg-9" style={{ textAlign: "left" }}>
                            <p className="text-justify mb-4">Entregar el mejor servicio de traslado terrestre a personas, aplicando estándares de seguridad y calidad.</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                
            </div>
            <div className="box box1">
                <div className="row">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Algunos<strong> Clientes</strong></h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 clients">
                            <p>Hemos trabajado con muchas empresas que han confiado en nuestro servicio, aqui alguno de ellos:</p>
                            <img className="img-left img-clients" src={aker} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={bechtel} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={bhp} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={bucyrus} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={cytec} alt="Cliente de Sol Y Cobre - Aker"/>
                        </div>
                        <div className="col-lg-12 clients">
                            <img className="img-left img-clients" src={gsap} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={mb} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={rizzo} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={skm} alt="Cliente de Sol Y Cobre - Aker"/>
                            <img className="img-left img-clients" src={thyssen} alt="Cliente de Sol Y Cobre - Aker"/>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                
            </div>
        </div>
    );
};

export default About;
