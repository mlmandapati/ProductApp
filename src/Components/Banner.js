import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

export default function Banner(props) {

    const topRated = props.top_rated;
    console.log("top_rated",topRated);

    return (
        <Container >
            <h2>Sponsored</h2>
            {topRated.length>0 &&
             <Carousel>
                {topRated.map((product, index ) => (
                <Carousel.Item interval={1500}>
                    <div class="d-flex justify-content-center">
                    <img style= {{height: '500px', width: '500px'
            }} src={product.product_image?.[0].url} alt="product_image" />
                    </div>
                
               <Carousel.Caption>
                 <h3>{product.name}</h3>
                 
               </Carousel.Caption>
             </Carousel.Item>
                ))
             
                }
           </Carousel>
           }
           </Container>
    )

}