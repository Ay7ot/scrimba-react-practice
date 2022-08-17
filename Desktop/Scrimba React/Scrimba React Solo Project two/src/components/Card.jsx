import icon from '../assets/location.svg'

function Card(props) {
    return (  
        <div className="card">
            <div className="card--Img">
                <img src={props.imageUrl} />
            </div>
            <div className="card--Info">
                <div className='card--topic'>
                    <img src={icon} />
                    <h2 className='location'>{props.location.toUpperCase()}</h2>
                    <a href={props.googleMapsUrl} className="maps">View on Google Maps</a>
                </div>
                <h1 className='title'>{props.title}</h1>
                <h3 className='date'>{props.startDate} - {props.endDate}</h3>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;