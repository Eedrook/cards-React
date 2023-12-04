import './secciondos.css';

function Secciondos(props) {

    return (
        <>
        <section id="Comicsection">
        <h1 className="text-center pt-5 titulocomic">{props.comic}</h1>
        <div className="container mt-5" id="Comic">
            <div className="row">
            

                <div className="col-sm-10 col-xl-7 imagen1">
                    <img id="Change" src="./img/galeria1.jpg" alt="" className="w-100 imagenuno"/>
                </div>

                <div className="col-sm-7 col-xl-4 d-flex flex-sm-row flex-xl-column pt-3 imagenes2">
                    <img src="./img/galeria2.jpg" alt="" className="w-50 p-1"/>
                    <img src="./img/galeria3.jpg" alt="" className="w-50 p-1"/>
                    <img src="./img/galeria1.jpg" alt="" className="w-50 p-1"/>
                </div>

                <div>
                    <button type="button"
                        className="btn1 shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto d-flex mt-5"><i
                            className="bi bi-play-fill">comic</i></button>
                </div>

                <div className="shadow p-3 mb-5 rounded mt-5 sinopsis">
                    <h2 className="text-center p-1 sinopsistitulo">Sinopsis</h2>
                    <p className="text-center mt-2">{props.texto}</p>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Secciondos