import React, { useState , useEffect} from 'react';
import { MastHeader, Footer} from '../../components';
import { useParams } from 'react-router-dom';
import {basicData, protfolioData} from '../../assets/data/data';


function Portfolio() {
  const { slug } = useParams();
  const [counter, setCounter] = useState(0);
  const [abcount, setabcount] = useState(0);
  const data = protfolioData.filter((singleData) => {
    if(singleData.slug == slug){
      return true;
    }
  })[0];

  let LocalCounter = 0;

  const counterHandler = () => {
    setCounter(counter + 1);
  }


  const LocalcounterHandler = () => {
    LocalCounter = LocalCounter + 1;
    console.log(LocalCounter);
  }

  // console.log(LocalCounter);

  const abcounterHandler = () => {
   setabcount(abcount + 1);
   console.log(abcount);
  }
  

  useEffect(()=> {
  // counterHandler();
  abcounterHandler();
  },[counter]);

  return (
    <div>
      <MastHeader title={basicData.title}></MastHeader>
      <p className='pt-5 mt-5'></p>
            Counter - {counter}
            LocalCounter - {LocalCounter}
            abcCounter - {abcount}
            
            <button onClick={counterHandler}>Increment</button>
            <button onClick={LocalcounterHandler}>local counter</button>
            <button onClick={abcounterHandler}>abc counter</button>
            <h1 className='pt-5 mt-5'>{data.slug}</h1>
            <img className="img-fluid" src={data.imgSrc} alt={data.imgAlt} />
            <p>{data.description}</p>
   

      <Footer>
      </Footer>
    </div>
  );
}

export default Portfolio;
