
export const SocialLink = (props) => {
const {href, className} = props;
    return (
        <a className="btn btn-outline-light btn-social mx-1" href={href}><i className={className}></i></a>  
    )
}

