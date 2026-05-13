import { useEffect, useState } from 'react'
import { supabase } from './supabase'

export default function ToursList() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    async function getTours() {
      const { data } = await supabase.from('Tours').select()
      if (data) setTours(data)
    }
    getTours()
  }, [])

  return (
    <div>
      <h1>رحلات Mahsas Travel</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>{tour.Title}</li>
        ))}
      </ul>
    </div>
  )
}
