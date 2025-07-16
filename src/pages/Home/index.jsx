import { useContext} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
 const context = useContext(ShoppingCartContext)
  return (
  <Layout>
    
    {
      context.items?.map(item => (
        <Card key={item.id}data={item}/>
      ))
    }
  <ProductDetail />
  </Layout>
  
  )
}

export default Home
