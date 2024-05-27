import React from 'react';
import arr from '../utils/phases.json'
import randomArr from '../services/randomArr';
import imagesArr from '../utils/imagenes.json';

const ShowButton = ({setRandomPhrase , setImage}) => {

   const handleClick = () => {
       const quote = randomArr(arr); //llamamos la funcion randomArrar que no genera un numero aleatotio y le pamos como argumento el arreglo Arr: quote tendria la frase aleatoria y se lo pasariamos al setRandomPhrase//
       setRandomPhrase(quote);

       const photo = randomArr(imagesArr);
       setImage(photo);
   }

       // se llama a setImage y se coloca dentro de showButton como prons, se crea una const con el nombre de photo y se coloca randomArr para generar un numero aleatorio y dentro del argumeto de se la un arreglo con el indice de las imagehes que tenemos y esta const se le da como argumento a setImage para que se cambie la imagen de fondo cada vez que se le da click al botton//
      
  return (
    <button className='app__btn' onClick={handleClick}>Probar mi suerte</button>
  )
}

export default ShowButton;