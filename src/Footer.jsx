import './footer.css';

function Footer (props) {

    return (
        <>
        <section className="footer">
        <footer className="text-light text-center py-2" id="Contacto">
            <h1 className="text-center titulocontacto">{props.contacto}</h1>
            <p>&copy; 2023 Comic Interactivo</p>
            <div>
                <img className="d-flex justify-content-start ms-2 logo2" src="img/Smile logo 2.png" alt=""/>
                <i className="bi bi-facebook h-100">Smile</i>
                <i className="bi bi-instagram h-100 ms-5">@Smile</i>
            </div>
        </footer>
    </section>
        </>
    )
}

export default Footer