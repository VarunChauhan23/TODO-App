import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './icon.svg';

function NavbarComponent() {
    return (
        <>
            <Navbar expand="lg" bg="light" data-bs-theme="light">
                <Container id='brand-info'>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={Logo}
                            width="35"
                            height="35"
                            className="d-inline-block align-top bg-light"
                            style={{margin: "0px 5px"}}
                        />
                        TODO App
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
