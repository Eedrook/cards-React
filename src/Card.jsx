import './card.css'

function Card(props) {

    return (
        <>
        <h1 className='miHeader' style={{color: props.color}}>Estamos aprendiendo React {props.lenguaje}</h1>
        </>
    )
}

export default Card;