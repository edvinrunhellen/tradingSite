import './Card.css'

const Card = (props) => {
    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <div>{props.children}</div>
        </div>
    )
}

export default Card