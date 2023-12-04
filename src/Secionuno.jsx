import './secionuno.css';

function Secionuno(props) {

    return (
        <>
        <div className="container" id="Incio">
        <div className="row">
            <div className="col-sm-12 col-xl-6 text-center intro">
                <img src="./img/ILUSTRACION.png" alt="" className="my-5 mt-5 img-fluid ilustracion"/>
            </div>
            <div className="shadow p-3 mb-5 col-sm-12 col-xl-6 text-center elcuadro">
                <h1 className="titulosmile">{props.smile}</h1>
                <h5 className="my-5 textintro">A pesar que en la sociedad no le dan la importancia que se necesita a las
                    personas con depresión
                    nace smile para concientizar e informar a las personas sobre la depresión, sus causas y la
                    importancia que tiene esta en toda la población.</h5>
            </div>
        </div>
    </div>
        </>
    );
}

export default Secionuno