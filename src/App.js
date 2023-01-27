import './App.css';
import Main from './components/containers/main';
import Footer from './components/pure/footer';
import HambuerguesaBtn from './components/pure/Hambuerguesa-btn';
import Header from './components/pure/header';
import { useState } from 'react';
import ScrollTop from './components/pure/Scroll-top';

function App() {
const [isActive, setIsActive] = useState(false);  
const abrirMenu = () => {
  setIsActive(!isActive)
  console.log('Ejecutando Ham');
}
  return (
    <div className="App">
      <Header isActive={isActive}/>
      <Main />
      <Footer />
      <HambuerguesaBtn abrirMenu={abrirMenu}/>
      <ScrollTop />
    </div>
  );
}

export default App;
