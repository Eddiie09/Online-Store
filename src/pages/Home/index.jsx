import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])
  return (
  <Layout>
    Home
    {
      items?.map(item => (
        <Card key={item.id}data={item}/>
      ))
    }
  <ProductDetail />
  </Layout>
  
  )
}

export default Home
