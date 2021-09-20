import {Link} from 'react-router-dom';

const Card = ({ post }) => {
    
    const { title, id } = post
    const date = new Date()
    return (
        <div className="card" id={id}>
            <Link>
            <h1>{   }</h1>
            <span></span>
            <h4>{title}</h4>
            </Link>
        </div>
    );
    
}
 
export default Card;