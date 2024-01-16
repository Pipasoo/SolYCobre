import logosol from "../img/logo2.png";
import '../App.css';
import { data } from "./data.js";
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNodes = listNode.querySelectorAll("li > img");

        imgNodes.forEach((imgNode, index) => {
            imgNode.style.display = index === currentIndex ? 'block' : 'none';
        });
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? data.length - 1 : curr - 1;
            });
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            setCurrentIndex(curr => (isLastSlide ? 0 : curr + 1));
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="container mt-4">
            <div className="box" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 mt-5">
                        <img className="img-fluid" src={logosol} alt="" />
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <hr />
                    <h2 className="intro-text text-center"><strong>Bienvenidos</strong></h2>
                    <hr />
                </div>
            </div>

            <div className="box" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Nuestros<strong> Servicios</strong></h2>
                        <hr />
                    </div>
                    <div className="main-container">
                        <div className="slider-container">
                            <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#8249;</div>
                            <div className='rightArrow' onClick={() => scrollToImage('next')}>&#8250;</div>

                            <div className="container-images">
                                <ul ref={listRef} className="image-list">
                                    {data.map((item, index) => (
                                        <li
                                            key={item.id}
                                            className={`image-item ${index === currentIndex ? "active" : ""}`}
                                            style={{
                                                border: index === currentIndex ? "3px solid #eee" : "none",
                                                padding: "5px", // Añade padding para hacer el borde responsivo
                                            }}
                                        >
                                            <img src={item.imgUrl} width={700} height={500} alt="" className="img-centered" />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="dots-container">
                                {data.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                                        onClick={() => goToSlide(idx)}>
                                        &#9865;
                                    </div>
                                ))}
                            </div>

                            <div className="row justify-content-center mt-4">
                                <div className="col-md-6" style={{ textAlign: "justify", maxWidth: "800px" }}>
                                    <p>
                                        Nuestra empresa se encarga de prestar servicios de traslado de personal vía terrestre dentro de la región, a través de minibuses y buses. También contamos con servicios de traslado de carga, para los cuales contamos con nuestra flote de camiones que se encargan de ello.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;