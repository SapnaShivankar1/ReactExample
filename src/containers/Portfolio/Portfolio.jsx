import React, { useState } from 'react';
import { MastHeader, Footer} from '../../components';
import { useParams } from 'react-router-dom';
import {basicData, protfolioData} from '../../assets/data/data';


function Portfolio() {
  const { slug } = useParams();
  const [counter, setCounter] = useState(0);
  const data = protfolioData.filter((singleData) => {
    if(singleData.slug == slug){
      return true;
    }
  })[0];

  console.log(data);
  const counterHandler = () => {
    setCounter(counter + 1);
  }


  return (
    <div>
      <MastHeader title={basicData.title}></MastHeader>
      <p className='pt-5 mt-5'></p>
            Counter - {counter}
            <button onClick={counterHandler}>Increment</button>
            <h1 className='pt-5 mt-5'>{data.slug}</h1>
            <img className="img-fluid" src={data.imgSrc} alt={data.imgAlt} />
            <p>{data.description}</p>
   

      <Footer>
      </Footer>
    </div>
  );
}

export default Portfolio;
