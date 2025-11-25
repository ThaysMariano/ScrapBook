import style from "./style.module.css"

interface CardProps{
    title: string,
    image: string,
    description: string,
    background: string
}

const Card = ({title, image, description, background} : CardProps) =>{

        return <>
            <div className={`${style[background]} ${style.card}`}>
                <h2>{title}</h2>
                <img src={image} alt={title}/>
                <p>{description}</p>
            </div>
        </>
    
}

export default Card