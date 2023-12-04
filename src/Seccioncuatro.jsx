import './seccioncuatro.css';

function Seccioncuatro(props) {

    return (
        <>
            <section className="comic-gallery">

                <div className="container p-5" id="Personajes">

                    <h1 className="text-center p-5 titulopersonajes">{props.personajes}</h1>
                    <div id="comicCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./img/Lio fondo.jpg" className="d-block w-100" alt="Imagen 1" id="img1"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/alejo fondo.jpg" className="d-block w-100" alt="Imagen 2" id="img2"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/andres fondo.jpg" className="d-block w-100" alt="Imagen 3" id="img3"/>
                            </div>


                        </div>
                        <a className="carousel-control-prev" href="#comicCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#comicCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </a>
                    </div>


                    <button type="button" className="btn2 shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto d-flex mt-5"
                        data-bs-toggle="modal" data-bs-target="#myModal">
                        Mostrar Carrusel en Modal
                    </button>


                    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Carrusel de Imágenes</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                    <div id="power" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="./img/Lio fondo.jpg" className="d-block w-100" alt="Imagen 1" id="img1"/>
                                                    <h6>Lio es chico muy tranquilo que tuvo depresión por causas del bullying y lo
                                                        supera con el tiempo y se vuelve tranquilo y frio pero le gusta ayudar a los
                                                        demas que se sienten mal</h6>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="./img/alejo fondo.jpg" className="d-block w-100" alt="Imagen 2" id="img2"/>
                                                    <h6>Alejo es tranquilo pero con un pasado bastante duro gracias a al bullying y
                                                        la depresión que tuvo que lidiar</h6>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="./img/andres fondo.jpg" className="d-block w-100" alt="Imagen 3" id="img3"/>
                                                    <h6>Gracias al pasado de andres desarrollo un trauma el cual lo hace creer que
                                                        las personas le quieren hacer daño y por ese trauma desarrolla una depresión
                                                    </h6>
                                            </div>


                                        </div>
                                        <a className="carousel-control-prev" href="#power" role="button" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Anterior</span>
                                        </a>
                                        <a className="carousel-control-next" href="#power" role="button" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Siguiente</span>
                                        </a>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn4" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="informacion" className="mt-3 "></div>
                </div>
            </section>
        </>
    )
}

export default Seccioncuatro