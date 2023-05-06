import React, { useState, useEffect } from 'react';
import api from '../../../api';
import img_teclado_mouse from '../../../assets/img/60bd07d73c0217c49acdf12e_hugo-barbosa-TnG2q8FtXsg-unsplash403x-p-800.png';
import img_homem_tablete from '../../../assets/img/email_3.webp';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import $ from "jquery";

function PartialTwo (){
 
const [email, setEmail] = useState();

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

useEffect(() => {
  $('#email-start').on('focus',function (){
    $('.email-label').css({display: 'block'});
  })
  $('#email-start').on('blur',function() {
  
      if (isValidEmail($(this).val())) {
        setTimeout(() => {

          if(localStorage.getItem("email") == null){
            localStorage.setItem("email", $(this).val());
            api
              .post("/email/plus",{
                    email: $(this).val(),
              })
              .then(function(e){
                $('.email-alert').css({'display': 'block'});
                $('.email-alert').text('Email Recebido 😊!');
              })
              .catch((err) => {
                $('.email-alert').css({'display': 'block'});
                $('.email-alert').text('Email já Cadastrado!');
              });
          }
        }, 1000);

        setTimeout(() => {
          $('.email-alert').css({'display': 'none'})
        },2000);
        
      }else{

        $('.email-alert').css({'display': 'block'});
        $('.email-alert').text('Email Invalido!');

        setTimeout(() => {
          $('.email-alert').css({'display': 'none'})
        },2000);


        return false;
      }

      localStorage.clear();
  });
});

  return (
    <Row>
      <Col xl={4}  className="mt-5">
        <Card  style={{ border: 'none' }}>
          <div style={{
            height: '270px',
            overflow: 'hidden',
            borderRadius: "1em"
          }}>
            <Card.Img style={{height:'120%'}} className='w-100' variant="top" src={img_teclado_mouse} />
          </div>
        <Card.Body className='p-0 mt-4 text-start'>
          <Card.Title className='mt-3'>Por que é importante ter um site de qualidade?</Card.Title>
          <Card.Text style={{position: 'relative'}}>
            <p className='mb-5 mt-3'>Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...</p>
            <p style={{fontWeight: '700', cursor: 'pointer', position: 'absolute'}}>Ir para o artigo <span><AiOutlineArrowRight /></span></p>
          </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col xl={4} className="mt-5">
        <Card style={{ border: 'none' }}>
          <div style={{
              height: '270px',
              overflow: 'hidden',
              borderRadius: "1em"
            }}>
            <Card.Img style={{height:'120%'}} className='w-100' variant="top" src={img_homem_tablete} />
          </div>
          <Card.Body className='p-0 mt-4 text-start'>
            <Card.Title className='mt-3'>6 dicas para trabalhar com marketing digital com verba limitada</Card.Title>
            <Card.Text style={{position: 'relative'}}>
              <p className='mb-5 mt-3'>Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...</p>
              <p style={{fontWeight: '700', cursor: 'pointer', position: 'absolute'}}>Ir para o artigo <span><AiOutlineArrowRight /></span></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} style={{ padding: "2em", borderRadius: "1em", backgroundColor: '#000000'}} className="p-5 mt-5 text-start text-light">
        <h2>Receba os nossos<br/>artigo de interesse<br/>na sua caixa de<br/>entrada.</h2>
        <div className='mt-5 mb-5'>
          <label style={{ display: 'none'}} className='email-label'>Seu E-mail (requerido)</label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} id="email-start" style={{borderRadius: '2em'}} className='email-start float-right w-100 p-3 mt-3 text-center' type="email" placeholder="Escreva aqui seu e-mail..." />
          <Alert class='email-alert p-2' style={{color: '#FFFFFF', background: '#000000'}}>
            <p style={{ display: 'none'}}></p>
          </Alert>
        </div>
        <p>Siga-nos em<br/>nossas mídias<br/>sociais</p>
        <div className='social'>
          <span style={{borderRadius: '1em', fontSize:'20px'}} className='text-dark m-1 '><AiOutlineInstagram style={{ cursor: 'pointer',borderRadius: '5em', fontSize:'10px', width: '50px', padding: '1em', height: '50px', background: '#FFFFFF'}} /></span>
          <span style={{borderRadius: '1em', fontSize:'20px'}} className='text-dark m-1 '><AiFillFacebook style={{ cursor: 'pointer',borderRadius: '5em', fontSize:'10px', width: '50px', padding: '1em', height: '50px', background: '#FFFFFF'}} /></span>
          <span style={{borderRadius: '1em', fontSize:'20px'}} className='text-dark m-1 '><AiFillLinkedin style={{ cursor: 'pointer',borderRadius: '5em', fontSize:'10px', width: '50px', padding: '1em', height: '50px', background: '#FFFFFF'}} /></span>
        </div>
      </Col>
    </Row>
  );
}

export default PartialTwo;