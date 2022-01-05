import './App.css';
import React from 'react';
import { MastHeader , Header, Portfolio, SectionContainer, About, Contact, Footer} from '../../components';

import {protfolioData, basicData, shortDescripion} from '../../assets/data/data';


function App() {



  return (
    <div className="App">

      <Header title={basicData.title}></Header>

      <MastHeader title={basicData.title} subTitle={basicData.subTitle}></MastHeader>

      <SectionContainer title="Portfolio">
          {
            protfolioData.map((singlePortfolio, index) => {
              return <Portfolio  key={`portfoliocard_${index}`}  imgSrc={singlePortfolio.imgSrc} imgAlt={singlePortfolio.imgAlt} slug={singlePortfolio.slug} />
           
            })
          }
      </SectionContainer>

      <About title="About" shortDescripion={shortDescripion}></About>

      <SectionContainer title="Contact Us">
        <Contact></Contact>
      </SectionContainer>

      <Footer>
      </Footer>
    </div>
  );
}

export default App;
