import React, { useEffect, useState }from 'react';
import api from '../../../api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineCheck } from "react-icons/ai";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function PartialTree (){

  const [valid, setValid] = useState({});
  const [spanName, setSpanName] = useState('');
  const [spanEmail, setSpanEmail] = useState('');
  const [spanSubject, setSpanSubject] = useState('');
  const [spanFile, setSpanFile] = useState();
  const [file, setFile] = useState();
  const [spanContent, setSpanContent] = useState('');

  function successos({data}) {
    
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <p>Email recebido</p>,
      html: <i>Recebemos seu email {data.name}!</i>,
      html: <i>O id da sua incrição é {data.cod_id}!</i>,
      icon: 'success'
    });
  }

function errors() {
    
  const MySwal = withReactContent(Swal)

  MySwal.fire({
    title: <p>Erro</p>,
    html: <i>Ocorreu um erro no seu preenchimento!</i>,
    icon: 'error',
    
  });
}

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
    file: '',
  });

  const changeHandler = (event) => {
		setFile(event.target.files[0]);
	};

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidName(name) {
    return /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  }
  
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  
    if(!isValidName(form.name)){
      setSpanName(false);
    }else{
      setSpanName(true);
    }

    if(!isValidEmail(form.email)){
      setSpanEmail(false);
    }else{
      setSpanEmail(true);
    }

    if(isValidName(form.subject)){
      setSpanSubject(false);
    }else{
      setSpanSubject(true);
    }

    if(isValidName(form.content)){
      setSpanContent(false);
    }else{
      setSpanContent(true);
    }
  
  };

  const sendMail = (event) => {
    event.preventDefault();

    if(spanEmail == true && spanName == true){
      setValid(true);
    }
  };

  useEffect(()=>{
    
    if(valid === true){

        const formData = new FormData()

        formData.append('file', file)

        api.post('registration/file', formData).then(({name})=>{
          setSpanFile(name);
        }).catch(({response})=>{
          if(response.status===422){
            errors();
          }
        });

        api
          .post("/email/send",{
              name: form.name ?? '',
              email: form.email ?? '',
              subject: form.subject ?? '',
              content: form.content ?? '',
              file:  form.file ?? '',
        }).then((response) =>{ 
          successos(response.data);
          setForm({
            name: '',
            email: '',
            content: '',
            subject: '',
            file: '',
          });

          const formData = new FormData()

          formData.append('file', '')
        })
        .catch((err) => {
            errors();
        });
    }

    return setValid(false);
  });

    return (

      <Row>
        <Col  xl={6} className='mt-5 text-start'>
            <h1>
              Viva uma nova experiência<br/>de comunicação integrada<br/>com foco nos resultados.
            </h1>
            <p>Escreva-nos sobre o seu projeto.</p>
          </Col>
        <Col xl={6} className='mt-5'>

          <Form onSubmit={sendMail} className='text-start mb-5'>
            <Form.Group className="mb-3"  controlId="name">

            <Form.Label style={{textIndent: '1%'}} className='w-100'>Seu Nome <span class="req-name">(requerido)</span></Form.Label>
            <Row style={{display: 'flex'}}>
                <Col xs={11}>
                <Form.Control value={form.name} onChange={handleChange}  style={{background: '#F1F4F9', borderRadius: '2em', textIndent:'1px'}} className='start-name float-right p-2 w-100' type="text" name="mailname" />
              </Col>
              <Col xs={1}>
                <span className='mes-name text-danger'>{spanName != true && ('x') || ''}</span>
                {spanName === true && ( <AiOutlineCheck id="span-name" style={{fontWeight:'700',color: '#53DB9D'}} clas xl={2} className='float-right' />) }
              </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label  style={{textIndent: '1%'}} className='w-100'>Seu Email <span class="req-email">(requerido)</span></Form.Label>
              <Row style={{display: 'flex'}}>
                <Col xs={11}>
                  <Form.Control value={form.email} onChange={handleChange}  style={{background: '#F1F4F9', borderRadius: '2em', textIndent:'1px'}} className='float-right p-2 w-100 start-email' type="email"  name="mailemail" />
                </Col>
                <Col xs={1}>
                  <span className='mes-email text-danger'>{spanEmail != true && ('x') || ''}</span>
                  {spanEmail === true && (<AiOutlineCheck id="span-email" style={{fontWeight:'700',color: '#53DB9D'}} className='float-right' />)}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Label style={{textIndent: '1%'}} className='w-100'>Assunto</Form.Label>
              <Row style={{display: 'flex'}}>
                <Col xs={11}>
                  <Form.Control value={form.subject} onChange={handleChange} style={{background: '#F1F4F9', borderRadius: '2em', textIndent:'1px'}} className='float-right p-2 w-100 start-subject' type="text"  name="mailsubject" />
                </Col>
                <Col xs={1}>
                  <span className='mes-subject'></span>
                  {spanSubject === true && (<AiOutlineCheck id="span-subject" style={{fontWeight:'700',color: '#53DB9D'}} className='float-right' />)}
                </Col>
              </Row>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Mensagem</Form.Label>
              <Row style={{display: 'flex'}}>
                <Col xs={11}>
                  <Form.Control value={form.content} onChange={handleChange} style={{background: '#F1F4F9', borderRadius: '1em', textIndent:'1px'}} className='float-right p-2 w-100 start-content' as="textarea" rows={3} name="mailcontent" />
                </Col>
                <Col xs={1}>
                  <span className='mes-content'></span>
                  {spanContent === true && (<AiOutlineCheck id="span-content" style={{fontWeight:'700',color: '#53DB9D'}} className='float-right' />)}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="file">
              <Form.Label>Anexe um documento explicando seu projeto</Form.Label>
              <Row style={{display: 'flex'}}>
                <Col xs={11}>
              <Form.Control onChange={changeHandler} style={{background: '#F1F4F9', borderRadius: '0.2em', borderStyle: 'dashed'}} className='float-right w-75 start-file' type='file' name="mailfile" />
              </Col>
              <Col xs={1}>
                <span className='mes-file'></span>
                {spanFile === true && (<AiOutlineCheck id="span-file" style={{fontWeight:'700',color: '#53DB9D'}} className='float-right' />)}
              </Col>
              </Row>
            </Form.Group>

            <Button style={{borderRadius: '2em', background: '#000000', border: 'none'}}   type="submit">Enviar</Button>
          </Form>
 
      </Col>
      </Row>
      
    );
}

export default PartialTree;