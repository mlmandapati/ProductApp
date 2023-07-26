import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

export default function Banner(props) {
  const topRated = props.top_rated;
  // console.log("top_rated",topRated);

  return (
    <Container>
      {topRated.length > 0 && (
        <Carousel>
          {topRated.map((product, index) => (
            <Carousel.Item interval={1500}>
              <div className="d-flex justify-content-center">
                <img
                  src={product.product_image?.[0].url}
                  alt="product_image"
                />
              </div>

              <Carousel.Caption>
                <h3>{product.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Container>
  );
}
