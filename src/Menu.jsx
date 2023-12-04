import './menu.css';

function Menu(props) {

    return (
        <>
         <div className="navbar navbar-expand-lg navbar-light estilo">
        <div className="container">
            <img src="img/Smile logo.png" className='logouno' href="Inicio" alt=""/>
            <button className="navbar-toggler elboton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse me-3" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link  colorper" href="#Inicio">
                            <h5>{props.inicio}</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  colorper" href="#Comic">
                            <h5>COMIC</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  colorper" href="#Creadores" >
                            <h5>CREADORES</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link colorper" href="#Personajes">
                            <h5>PERSONAJES</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  colorper" href="#Contacto">
                            <h5>CONTACTO</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        </>
    );
}

export default Menu