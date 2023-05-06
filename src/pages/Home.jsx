import React, {Component} from 'react';
import Footer from './layouts/Footer';
import PartialTree from './layouts/Containers/PartialTree';
import PartialTwo from './layouts/Containers/PartialTwo';
import PartialOne from './layouts/Containers/PartialOne';
import Container from 'react-bootstrap/Container';
import Nav from "./layouts/Nav";

function Home() {
    
    return (
        <section>
            <header>
                <Container>
                    <Nav />
                </Container>
            </header>
            <article>
                <Container>
                    <PartialOne/>
                </Container>
                <hr style={{  margin: "0",
                    marginTop: "-80px",
                    height: "100px",
                    border: "0",
                    backgroundColor: "#FFFFFF",
                    opacity: "1",}}/>
            </article>
        
            <article>
                <Container>
                    <PartialTwo />
                </Container>
            </article>

            <article>
                <Container>
                    <PartialTree/>
                </Container>
            </article>
            <footer style={{background: '#000000'}}>

                <Container>
                    <Footer />
                </Container>
            </footer>
        </section>
    );
}


export default Home;