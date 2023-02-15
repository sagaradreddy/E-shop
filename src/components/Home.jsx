import React ,{useContext, useState}from 'react'
import Category  from '../helper/Category'
import ProductsCard from '../helper/ProductCard'

 import { ProductContext } from '../ProductContext'
 import ReactPaginate  from 'react-paginate'

function Home(props) {
  const context = useContext(ProductContext)
  const [categoryData]= context.categoryApi.category || []
  const [productsData] = context.productApi.products.value || []

 //pagination
  const[itemOffset,setItemOffset] = useState(0)

  let endOffset = itemOffset + props.itemPerPage;
  let currentItems = productsData.slice(itemOffset,endOffset);
  let pageCount = Math.ceil(productsData.length / props.itemPerPage)

  const handleClick=(event) =>{
    let newOffset = (event.selected * props.itemPerPage) % productsData.length;
    setItemOffset(newOffset)

  }
  return (

   
    <div className='container'>
        <div className="row">
       {
        categoryData.length === 0 ?(
<div className="col-md-12">
  <div className="row text-center">
    <h5 className="text-secondary display-5">No CategoryFounds</h5>
  </div>
</div>
    ):(
            <div className="col-md-12 text-center">
                <h5 className='display-5 text-success'>Categories</h5>
            </div>
    )}
        </div>
        <div className="row">
          {
            categoryData.map((item,index)=>{
              return<Category key={index} value={item}/>
            })
          }
       
        </div>

         
          <div className="row">
            {

          productsData.length === 0 ?(
  <div className="col-md-12">
    <div className="row text-center">
      <h5 className="text-secondary display-5">No Featured Product Founds</h5>
    </div>
  </div>
    ):(
            <div className="col-md-12 mt-3 text-center">
                <h5 className='display-5 text-success'>Featured products</h5>
            </div>
            )
            }
           </div>

            <div className='row'>
              {
                  currentItems && currentItems.map((item,index)=>{
                   return <ProductsCard key={index} {...item}/>
                  })
              }

            </div>
            <div className="row">
              <div className="col-md-12 mb-4 mt-3">
                <ReactPaginate 
                pageCount={pageCount}
                className={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                activeClassName={'active'}
                activeLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                onPageChange={handleClick}
                />
              </div>
            </div>
        </div>
        
      
   
  )
}

export default Home
