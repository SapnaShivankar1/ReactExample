import cabinImg from '../../assets/img/portfolio/cabin.png';
import cakeImg from '../../assets/img/portfolio/cake.png';
import circusImg from '../../assets/img/portfolio/circus.png';
import gameImg from '../../assets/img/portfolio/game.png';
import safeImg from '../../assets/img/portfolio/safe.png';
import submarineImg from '../../assets/img/portfolio/submarine.png';

export const Portfolio = (props) => {

    const {imgSrc, imgAlt} = props;

    return (
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={imgSrc} alt={imgAlt} />
                </div>
            </div>
    )
}