
import React, {Component} from 'react';
import img_celular from '../../../assets/img/como-usar-celular-em-viagens-dicas-chip.jpg';
import img_computador_celular from '../../../assets/img/i4705.webp';
import img_computador_predios from '../../../assets/img/sobre.jpg';
import img_computador_fornecedor from '../../../assets/img/fornecedor.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function PartialOne (){
 
    return (
       <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1 className='text-start'>Construímos estratégias,<br/>design e tecnologia de ponta<br/>para o seu negócio</h1>
          </Col>
           
        </Row>
        <Row className='justify-content-md-end p-0 m-0' lg={4}>
          <Col xs={6} md={4} className='position-relative top-100'>
            <Image style={{bottom: '0', left: '0', height: '30%'}} className="w-100 mt-5 position-absolute" src={img_computador_celular} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image className="w-100 mt-10" src={img_celular} rounded />
            <Image className="w-100 mt-4" src={img_computador_predios} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image className="w-100 mt-5" src={img_computador_fornecedor} rounded />
          </Col>
        </Row>
      </Container>
    );

}


export default PartialOne;