import {BrowserRouter as Router,Link} from 'react-router-dom';

const Card = ({ post }) => {
    
    const { title, body ,id,date } = post
    const dateDay = new Date(date).getDate()
    const month = new Date(date).getMonth()
    const getDay = (dateStr, locale) => 
    {
        const date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    const day = getDay(date, "en-US")
        
    return (
            <Link className="card" id={id}   to={`/diary-page/${id}`}>
                    <div className="date">
                        <p>{day}</p>
                        <h1>{ dateDay }</h1>
                        <p>{ month }</p>
                    </div>
                        <span></span>
                    <h5>{title ? title : body}</h5>
                    {/* <p>{body}</p> */}
            </Link>
    );
    
}
 
export default Card;