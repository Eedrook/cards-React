import './App.css';
import Menu from './Menu.jsx';
import Secionuno from './Secionuno.jsx';
import Secciondos from './Secciondos.jsx';
import Secciontres from './Secciontres.jsx';
import Seccioncuatro from './Seccioncuatro.jsx';
import Footer from './Footer.jsx';
import Tienda from './Tienda.jsx';

function App() {

  return (
    <>
     <Menu inicio="INICIO"/>
     <Secionuno smile="Smile"/>
     <Secciondos comic="Comic" texto="Lio y Alejo tuvieron un pasado un tanto complicado por el tiempo que sufrieron de bullyng
     los llevvo a tener una gran depesión, pero cuando llego al momento cuando ellos crecieron y quisieron ayudar a las persona que 
     sufren de depresión y empatizan con aquellas personas que se sienten mal."/>
     <Secciontres creadores="Creadores"/>
     <Seccioncuatro personajes="Personajes"/>
     <Footer contacto="CONTACTO"/>
     <Tienda/>
    </>
  )
}

export default App;