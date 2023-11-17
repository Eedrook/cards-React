import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'

function App() {

  return (
    <>
      <Header />
      <div>
        <img src="./public/fondo1.JPG" alt="" />
        <Card lenguaje="JavaScript" color="red" />
      </div>
    </>
  )
}

export default App;