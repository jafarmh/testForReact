import List from '../components/product/List';
import { RootState } from '../data/store'
import { useSelector } from 'react-redux'

const Products = () => {

    const datas=useSelector((state:RootState)=>state.productsData);
    

  return (
    <>
    {datas && <List datas={datas}/>}
    </>
  )
}

export default Products