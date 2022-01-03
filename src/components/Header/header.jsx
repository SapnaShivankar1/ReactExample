import Avtaar from '../../assets/img/avataaars.svg'
import { basicData } from '../../assets/data/data'
export const Header = () => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
         
                <img className="masthead-avatar mb-5" src={Avtaar} alt="..." />
                
                <h1 className="masthead-heading text-uppercase mb-0">{basicData.name}</h1>
             
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            
                <p className="masthead-subheading font-weight-light mb-0">{basicData.designation}</p>
            </div>
        </header>
    )
}