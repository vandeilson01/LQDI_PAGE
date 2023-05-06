
import React, { useEffect, useState }from 'react';
import logo from '../../assets/img/logo-lqdi-negativo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Nav (){

    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300){
                setVisible(true)
            }else if(scrolled <= 300){
                setVisible(false)
            }
        });
    }, []);

    return (
        <div>
            {visible && visible === true && (
                <Navbar style={{transition: '0.3s all'}} fixed="top" bg="light">
                    <Container>
                        <Navbar.Brand xs={6} className='text-start' href="#home">
                            <img md={1} className='w-25' src={logo} />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse xs={6} className='justify-content-end'>
                            <Navbar.Text>
                                <Button style={{background: '#000000', borderRadius: '2em', border: 'none'}}>Começar</Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) || (
                <Navbar style={{transition: '0.3s all'}}>
                    <Container>
                        <Navbar.Brand xs={6} className='text-start' href="#home"><img className='w-25' src={logo} /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse xs={6} className='justify-content-end'>
                            <Navbar.Text>
                            <a style={{textDecoration: 'none'}} className='p-3 text-top-mes'>Agende uma reunião conosco </a>
                            <Button style={{background: '#000000', borderRadius: '2em', border: 'none'}}>Começar</Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </div>
    );
}


export default Nav;