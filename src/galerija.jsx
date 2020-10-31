import React from "react"
import Carousel from "react-bootstrap/Carousel"
import foto1 from "./foto/kafe_foto/kafa.jpg"
import foto2 from "./foto/kafe_foto/klupe.jpg"
import foto3 from "./foto/kafe_foto/lampe.jpg"
import foto4 from "./foto/kafe_foto/ulaz.jpg"
import foto5 from "./foto/kafe_foto/sank.jpg"
import foto6 from "./foto/kafe_foto/ulaz2.jpg"

const fotografije = [
    {
        original: {foto1},
        thumbnail: {foto1}
    },
    {
        original: {foto2},
        thumbnail: {foto2}
    },
    {
        original: {foto3},
        thumbnail: {foto3}
    },
    {
        original: {foto4},
        thumbnail: {foto4}
    },
    {
        original: {foto5},
        thumbnail: {foto5}
    },
    {
        original: {foto6},
        thumbnail: {foto6}
    }
]
export const Galerija = () => {
    return(
        <div id="galerija">
            <h3>Galerija</h3>
            <div className="galerija-foto">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={foto1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={foto2}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={foto3}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={foto4}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={foto5}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={foto6}
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}