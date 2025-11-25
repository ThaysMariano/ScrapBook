import style from "./style.module.css"
import titleData from "../../data/titleData.json"


const Titulo = () =>{

    return <>
    <div className={style.tituloDiv}>
        <h1>Para {titleData.nome}{titleData.descricao? "," : null}</h1>
        <h3>{titleData.descricao? titleData.descricao : null}</h3>
    </div>
    </>

}

export default Titulo