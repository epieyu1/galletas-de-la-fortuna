
import { useState } from 'react';
import './App.css';
import ShowButton from './components/ShowButton';
import ShowPhrases from './components/ShowPhrases';
import randomArr from './services/randomArr';
import arr from './utils/phases.json';
import imageArr from './utils/imagenes.json'
// se cra un archivo json que contenga el indice de las imagenes y no tener que modificar los arreglos que se podrian poner en los componentes, se tiene que importar//

function App() {
  const quote = randomArr(arr);
  const [randomPhrase, setrandomPhrase] = useState(quote);

  const photo = randomArr(imageArr);
  const [image, setImage] = useState(photo);


  const appStyles = {
    backgroundImage: `url(../fortuna-1/fondo${image}.jpg)`,
  }

 
  return (
    <div className='app' style={appStyles}>
      <h1 className='app__titles'>Galletas de la fortuna</h1>
      
       <ShowButton setRandomPhrase= {setrandomPhrase}
       setImage = {setImage}/>
       <ShowPhrases
        randomPhrase = {randomPhrase}
       />
    </div>
  )   
}

export default App;
