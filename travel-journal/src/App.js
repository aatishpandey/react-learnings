import React from 'react'
import data from './Components/Data'
import Location from './Components/Location'
import Navbar from './Components/Navbar'

export default function App() {
  // console.log(data)
  const location = data.map(item => {
    return(
      <Location
          // pathSymbol = {item.pathSymbol}
          imageUrl = {item.imageUrl}
          title = {item.title}
          location = {item.location}
          googleMapsUrl = {item.googleMapsUrl}
          startDate = {item.startDate}
          endDate = {item.endDate}
          description = {item.description}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
      {location}
    </div>
  )
}
