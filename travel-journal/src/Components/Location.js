import React from 'react'

export default function Location(props){
    // console.log(props)
    return(
        <div className='card'>
            <img src={props.imageUrl} className='location-image'/>
            <div className='container-info'>
                {/* <img src={props.pathSymbol} id='path'/> */}
                <span className='location'>{props.location}</span>
                <a href={props.googleMapsUrl}className='google-map'>View on Google Maps</a>
                <div className='title'>{props.title}</div>
                <span className='start-date'>{props.startDate}</span>
                <span className='end-date'>{props.endDate}</span>
                <p className='desc'>{props.description}</p>
            </div>
        </div>
    )
}