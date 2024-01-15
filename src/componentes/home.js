import logosol from "../img/logo2.png";
import { data } from "./data";
import '../App.css';
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if(imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    },[currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
          setCurrentIndex(curr => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0 : curr - 1;
          });
        } else {
          const isLastSlide = currentIndex === data.length - 1;
          if (!isLastSlide) {
            setCurrentIndex(curr => curr + 1);
          }
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

            <div className="box">
                <div className="row d-flex justify-content-center text-center ">
                    <div className="col-lg-12">
                        <hr/>
                        <h2 className="intro-text text-center">Nuestros<strong> Servicios</strong></h2>
                        <hr/>
                    </div>
                    <div className="main-container">
                <div className="slider-container">
                    <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#8249;</div>
                    <div className='rightArrow' onClick={() => scrollToImage('next')}>&#8250;</div>

                    <div className="container-images">
                        <ul ref={listRef}>
                            {data.map((item) => (
                                <li key={item.id}>
                                    <img src={item.imgUrl} width={500} height={300}/>
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
                            </div>))
                        }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home