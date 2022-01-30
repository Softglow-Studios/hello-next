import { useState, useEffect } from 'react'
import Link from 'next/link'

export default () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <p>data</p>
  )
}
