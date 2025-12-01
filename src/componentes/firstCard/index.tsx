import Title from "../title/Title"
import decorationData from "../../data/decorationData.json"
import style from "./style.module.css"

const FirstCard = () =>{
    return(
        <>
            <section>
                <Title/>
                <div className={style.photos}>
                    {decorationData[0]["section 1"].images.map((img, i) => (<img key={i} src={img} alt="pictures" />))}
                </div>
            </section>
        </>
    )
}
export default FirstCard;