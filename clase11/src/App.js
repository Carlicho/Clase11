import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import * as BS from "react-bootstrap";
import Cards from './components/Cards/Cards';
import Movies from './components/movies/Movies';
import imagesData from './components/imagesdata.json';
import Image from "./components/Image";

const myData = [
    {Framework:"bootstrap"},
    {Framework:"Material"},
    {Framework:"Tailwind"},
    {Framework:"next"},]



const words = ['spray','limit', 'elite', 'exuberant', 'destruction', 'present'];


    
function App() {

      
      const filterResult = words.filter (word=>word.length>8 );
      const myDataList = myData.map ((element)=> {
       return(<h2>{element.Framework}</h2>)
     });


     
      return (
    <div className="App">



      <BS.Alert variant="primary" className='text-center display-2 mt-1'>Lista de Framework</BS.Alert>
      <h2>{myDataList}</h2>
      <Movies data= {filterResult} />
      <BS.Alert variant="primary" className='text-center display-2 mt-1'>Lista de imagenes</BS.Alert>

      <Cards/>

      <div>
        <div>
          <div>
            {imagesData.filter(img => img.showImage === true).map((img) => <div className="col-3" key={img.id}> <Image src={img.source} /> 
            </div>)}
          </div>
        </div>
      </div>



      



          
    </div>
  
  );
}

export default App;
