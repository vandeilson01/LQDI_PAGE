import logo from '../../assets/img/logo-lqdi-positivo.png';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer (){
    
    return (
        <Row className='text-start text-light'>
          <Col className='mt-5' xs={6} md={4}>
              <img className='w-25' src={logo} />
          </Col>
          <Col className='mt-5 mb-5' xs={6} md={4}>
              <p><strong>Brasil</strong></p>
              <p> Rua da Consolação, 4393º andar, Consolação São Paulo</p>
              <p>+55 11 3280-0283</p>
          </Col>
          <Col className='mt-5 mb-5' xs={6} md={4}>
              <p><strong>Portugal</strong></p>
              <p>Av. República Nº6 - 1º Andar Lisboa</p>
              <p>+351 916 029 443</p>

              <p><strong>Holanda</strong></p>
              <p>Holanda
              Jasykoffstraat 631506AT ZaandamThe<br/>Netherlands<br/></p>
              <p>+31 622 333 744</p>
          </Col>
        </Row>
    );
}


export default Footer;