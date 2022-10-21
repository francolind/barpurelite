import {Header} from './component/Header';
import {Main} from './component/Main';
import {Addcart} from './component/Addcart';
import {Reviews} from './component/Reviews';
import {Info1} from './component/Info1';
import {Info2} from './component/Info2';
import {Info3} from './component/Info3';
import {Info4} from './component/Info4';
import {Info5} from './component/Info5';
import {Form} from './component/Form';
import {Footer} from './component/Footer';

import './App.css'

function App() {
  

  return (
    <div className="App">
        <Header/>
        <Main/>
        <Addcart/>
        <Reviews/>
        <Info1/>
        <Info2/>
        <Info3/>
        <Info4/>
        <Info5/>
        <Form/>
        <Footer/>
      </div>
  )
}

export default App
