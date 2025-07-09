import { Col, Container, Row } from 'react-bootstrap';
import './ProductsChildish.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CartCours from '../cartcours/CartCours';
import Loaders from '../loders/Loders';
import Footer from '../footer/Footer'

export function Girlish (){

    const [girlish , setGirlish]=useState([]);
    const [loading, setLoading] = useState(true);

   
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
              const response = await axios.get("https://db-serverjs.liara.run/categories")
              const categoriesData = response.data;
              const babyCategory = categoriesData.filter(
                (category) => category.category === "دخترانه"
              );
              
                  setGirlish(babyCategory);
                  setLoading(false)
               
            } catch (error) {
              console.error("Error fetching products:", error);
              setLoading(false)
            }
          };
          fetchProducts();
       },[])

      

    return(
        <>
         <Container fluid className='container-baby'>
            <h3>محصولات دخترانه</h3>
           
            <Row className='py-5 d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
                {loading ? (<Loaders/>):(
                  girlish.map(item=>(
                   <Col className='col-box' key={item.id}>
                     <CartCours {...item} />
                   </Col>
                  ))
                )}
            </Row>
               <Footer/>
         </Container>
        </>
    )
}