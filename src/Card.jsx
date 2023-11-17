import './card.css'

function Card(props) {

    return (
        <>
        <p className='miHeader' style={{color: props.color}}>Estamos aprendiendo React {props.lenguaje}</p>
        </>
    )
}

export default Card;