import React, { useEffect, useState }from 'react';
import api from '../api';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Registrations() {
    

 
    const [mails, setMails] = useState([])

    useEffect(()=>{
        fetchMails() 
    },[])

    const fetchMails = async () => {

        api
        .get("/registrations")
        .then((response) => setMails(response.data[0]))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });  
    }


    
    // console.log(mails);
   
    return (

        <Container className='mt-5' fluid="md">
            <Row>
                <Col>
                    <h1 className='mt-5 mb-5'>Inscrições</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id Inscrição</th>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>

                           
                        {
                        mails.map((row, key)=>(
                            <tr key={key}>
                                <td>{row.cod_id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>

                            </tr>
                        ))
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        
    );
}


export default Registrations;