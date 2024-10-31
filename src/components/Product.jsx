import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../components/Product.css'
import Container from 'react-bootstrap/Container';


function Product() {
    let pid= useParams()
    console.log(pid);

    const [items, setItems] = useState({})
   
  
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${pid.
            product_id
            }`)
             .then((res)=>{
                 console.log(res.data)
              setItems(res.data);
             })
            .catch((err)=>{
                alert("some thing went worng please refresh page")
                console.log(err)

            })

    },[])

  return (
    <>
        
               <Container>
               <h3>{items.title}</h3>
            
               <div className='view-item'>
                <img src={items.image} alt=""  className='view-img'/>
                <p className='price'>$ :{items.price}</p>
                <p>{items.description}</p>
              
            </div>

               </Container>
           

    </>
  )
}

export default Product