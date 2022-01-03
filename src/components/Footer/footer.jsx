import { SectionFooter } from "../SectionFooter"
import { SocialLink } from "../SocialLink"
import { socialLinkData } from "../../assets/data/data"
export const Footer = () => {


    return (
        <footer className="footer text-center">
        <div className="container">
            <div className="row">
              
            <SectionFooter heading="Location">

                    {
                    <p className="lead mb-0">
                    2215 John Daniel Drive
                    <br />
                    Clark, MO 65243
                    </p>
                    }
            </SectionFooter>

            <SectionFooter heading="Around the Web">
                    {
                        socialLinkData.map((single,index) => {
                           return <SocialLink href={single.href} className={single.className}></SocialLink>
                        })
                    }
            </SectionFooter>

            <SectionFooter heading="About Freelancer">

                <p className="lead mb-0">
                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                    <a href="http://startbootstrap.com"> Start Bootstrap</a>
                    .
                </p>
            </SectionFooter>
            </div>
        </div>
    </footer>
    )
}