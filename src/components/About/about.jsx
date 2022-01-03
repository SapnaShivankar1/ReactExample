
export const About = (props) => {

    const {title , shortDescripion} = props;
    
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
    
            <h2 className="page-section-heading text-center text-uppercase text-white">{title}</h2>
   
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
       
            <div className="row">

            {

                shortDescripion.map((single, i) => {
                    let index = i+1;
                    let styleClassName = (index % 2 == 0) ? 'ms-auto' : 'me-auto';
                    return (
                <div className={`col-lg-4 ${styleClassName}`}><p className="lead">{single}
                
                </p></div>
                    )
                })


            }
       
            </div>
         
            <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                    <i className="fas fa-download me-2"></i>
                    Free Download!
                </a>
            </div>
        </div>
    </section>
    )
}