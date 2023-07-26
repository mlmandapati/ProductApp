import { useEffect, useState } from 'react';
import ProductBox from "./ProductBox.js";
import SingleProduct from './SingleProduct.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


export default function Categories(props){

    //url to fetch the recepies
    const url = `https://cdn.contentstack.io/v3/content_types/${props.type}/entries?environment=preview`;

    const [categories, setCategories] = useState([]);

    const options = {
        method: "GET",
        headers: {
                    "api_key": "blt3815e63116cffb83",
                    "access_token": "cs8db86493b65d47aa5ee93e0e",
                    "Content-Type": "application/json",
                },
    };

    async function getCategories() {
        try{
            const response = await fetch(url,options);
            const result = await response.text();
            const parsedResult = await JSON.parse(result);
            console.log("response",result);
            setCategories(parsedResult.entries);
            console.log("categories",categories);

            // const parsedResult = JSON.parse(result);
            // setData(parsedResult.results);
            // console.log("after fetch", data);
             
        }catch(error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        

        getCategories();
        
    },[props]);
    

     

    return (
        <Container>
            <br/>
            <h3>CATEGORIES TO SHOP</h3>


            <Row>
            {categories.length>0 && categories.map((category, index)=> (
                    <Col key={category} md="4" className="mb-3">
                    <Card className="mb-3">
                      <Link to={`/products?category=${category.uid}`}>
                        <img
                          src={category.category_image.url}
                          className="card-img-top"
                          style={{height:"250px",}}
                          alt={category}
                        />
                      </Link>
                      <Card.Body>
                        <Card.Text>
                            <strong>{category.title}</strong>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                
            ))}
            </Row>
        </Container>
    );

}