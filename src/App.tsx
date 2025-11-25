import './App.css'
import cardData from "./data/cardData.json"
import Title from './componentes/title/Title'
import Card from './componentes/card'

function App() {

  return <>
    <main>
      <Title/>
      {cardData.map((c)=>(<Card key={c.id} title={c.title} image={c.image} description={c.description} background={c.background} ></Card>))}
    </main>
  </>
}

export default App
