import './App.css'
import './reset.css'
import cardData from "./data/cardData.json"
import Card from './componentes/card'
import FirstCard from './componentes/firstCard'

function App() {

  return <>
    <main>
      <FirstCard></FirstCard>
      {cardData.map((c)=>(<section><Card key={c.id} title={c.title} image={c.image} description={c.description} background={c.background} ></Card></section>))}
    </main>
  </>
}

export default App
