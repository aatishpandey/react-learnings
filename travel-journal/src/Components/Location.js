import React from 'react'

export default function Location(props){
    // console.log(props)
    return(
        <div className='card'>
            <img src={props.imageUrl}/>
            <div className='container-info'>
                <span className='location'>{props.location}</span>
                <span className='google-map'>{props.googleMapsUrl}</span>
                <div className='title'>{props.title}</div>
                <span className='start-date'>{props.startDate}</span>
                <span className='end-date'>{props.endDate}</span>
                <p className='desc'>{props.description}</p>
            </div>
        </div>
    )
}