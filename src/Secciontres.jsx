import './secciontres.css';

function Secciontres(props) {

    return (
        <>
            <section className="Creadores">
                <div className="container d-flex justify-content-center shadow rounded decreadores" id="Creadores">
                    <div className="row">
                        <h1 className="text-center p-5 titulocreadores">{props.creadores}</h1>
                        <div className="col-sm-12 col-xl-4 d-flex justify-content-center mb-5">

                            <div className="card">
                                <img src="./img/Kevi.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h1 className="card-title text-center">Kevin </h1>
                                </div>
                                <button type="button" className="btn3">
                                    Saber mas
                                </button>

                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-4 d-flex justify-content-center mb-5">
                            <div className="card">
                                <img src="./img/Adolfo XD.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h1 className="card-title text-center">Adolfo</h1>
                                </div>
                                <button type="button" className="btn3">
                                    Saber mas
                                </button>

                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-4 d-flex justify-content-center mb-5">
                            <div className="card">
                                <img src="./img/Peludo.jpg" className="card-img-top" alt="..." />
                                <div className="card-body border-none">
                                    <h1 className="card-title text-center">Deibyd</h1>
                                </div>
                                <button type="button" className="btn3">
                                    Saber mas
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Secciontres