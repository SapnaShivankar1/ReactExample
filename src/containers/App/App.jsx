import './App.css';
import { MastHeader } from '../../components/MastHeader/MastHeader';
import { Header } from '../../components/Header/header';
import { SectionContainer } from '../../components/SectionContainer/SectionContainer';
import { Portfolio } from '../../components/Portfolio/portfolioCard';
import { About } from '../../components/About/about';
import { Contact } from '../../components/Contact/contact';
import { Footer } from '../../components/Footer/footer';
import {  basicData  ,protfolioData } from '../../assets/data/data';
// import { MastHeader , Header, Portfolio, About, Contact, Footer } from '../../components';
import cabinImg from '../../assets/img/portfolio/cabin.png';;
function App() {
  return (
    <div className="App">
      <MastHeader></MastHeader>
      <Header></Header>
      {/* <Portfolio imgSrc={cabinImg} imgAlt="..."></Portfolio> */}
      <SectionContainer title="Portfolio">
          {
            protfolioData.map((singlePortfolio, index) => {
              return <Portfolio  key={`portfoliocard_${index}`}  imgSrc={singlePortfolio.imgSrc} imgAlt={singlePortfolio.imgAlt} />
           
            })
          }
        </SectionContainer>

      <About></About>
      <SectionContainer title="Contact Us">
        <Contact></Contact>
        </SectionContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
