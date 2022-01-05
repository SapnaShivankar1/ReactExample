
import React from 'react';
import { MastHeader, Footer} from '../../components';
import { useParams } from 'react-router-dom';
import {basicData, protfolioData} from '../../assets/data/data';


function Portfolio() {
  const { slug } = useParams();
  return (
    <div>
      <MastHeader title={basicData.title}></MastHeader>
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br />
      
      <h1>{slug}</h1>
     {
      
      
 
      // for (let i = 0; i < protfolioData.length; i++) {
      //     if (protfolioData[i].slug === {slug}) {
      //      return protfolioData[i].imgSrc;
      //     }
      // }

      
    //   let img = protfolioData.filter(function (e) {
    //     return e.slug === {slug};
    // });
    // console.log(protfolioData.imgSrc);
 
     }

      <Footer>
      </Footer>
    </div>
  );
}

export default Portfolio;
