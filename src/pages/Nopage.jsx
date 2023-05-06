import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function NoPage (){
    
    return (
        <Card>
        <Card.Header as="h5">Erro página</Card.Header>
        <Card.Body>
            <Card.Title>Página não encontrada</Card.Title>
            <Card.Text>
            Essa página não existe!
            </Card.Text>
            <Button href="/">Página inicial</Button>
        </Card.Body>
        </Card>
        
    );
}


export default NoPage;