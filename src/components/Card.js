import {Link} from 'react-router-dom';

const Card = ({ post,button }) => {
    
    const getDay = (dateStr, locale) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }
    const { title, body ,id,date } = post
    const dateDay = new Date(date).getDate()
    const month = new Date(date).getMonth()
    const day = getDay(date, "en-US")
        
    return (
        <Link className="card" id={id} to={`/diary-page/${id}`}  >
            
                    <div className="date">
                        <p>{day}</p>
                        <h1>{ dateDay }</h1>
                        <p>{ month }</p>
                    </div>
                    <div className="card-body">
                            <h5>{title ? title : body}</h5>
                    </div>
            </Link>
    );
    
}
 
export default Card;