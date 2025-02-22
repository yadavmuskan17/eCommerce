import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import headphone from '../assets/home-image-4.png';
import '../Css/Home.css';
import homeback from '../assets/home-background-image-02.png';
import home2 from  '../assets/home-image-5.png';

const Home2 =() =>{
  return (
   <>
    <div
      style={{
        backgroundImage: `url(${homeback})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh', 
      }}
   id='home2_div' >
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-white text-center text-md-start">
            <h1 className="mb-4" id='home2_h1' >
              How to Get Your Beats Quality With Studio3 Wireless Headphones
            </h1>
            <p className='home2_p'>
              Diam donec adipiscing tristique risus. Praesent tristique magna sit amet purus gravida quis blandit.
              In dictum non consectetur a erat nam at lectus. Proin fermentum leo vel orci porta non pulvinar.
              Non enim praesent elementum facilisis leo vel. Volutpat diam ut venenatis tellus in metus.
              Eget duis at tellus at urna condimentum mattis pellentesque. Tincidunt id aliquet risus feugiat in
              ante metus dictum at. Semper viverra nam libero justo.
            </p>
            <Button variant="primary" className='home2_btn'>LEARN NOW</Button>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img  id="home2_img"
            src={headphone} alt="Studio3 Headphones" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* ------------------------div-right---------------- */}


      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-white text-center text-md-start">
          <img  id="home2_img2"
            src={home2} alt="Studio3 Headphones" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="text-center">
             <h1 className="mb-4" id='home2_h1' >
             Listen the sound of quality  </h1>
            <p className='home2_p'>
            Suspendisse sed nisi lacus sed.tincidunt augue interdum velit Lacinia quis vel eros donec ac odio tempor orci. 
            Est lorem ipsum dolor sit amet consectetur adipiscing. Vitae sapien pellentesque habitant morbi. Morbi tincidunt 
            augue inter tellus.
            </p>
            <Button variant="primary" className='home2_btn'>LEARN NOW</Button>
          </Col>
        </Row>
      </Container>
    </div>


   </>
  );
}

export default Home2;
