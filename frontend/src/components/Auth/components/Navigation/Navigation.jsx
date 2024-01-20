
// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./Navigation.module.css";
import Image from 'react-bootstrap/Image';
import logo from "../assets/images/logo2.png";

export const Navigation = () => {

    return (
        <>
            <Container fluid className={styles.navContainer}>
                <Row>
                    <Col></Col>
                    <Col xs={12}>
                        <Navbar expand="lg">
                            <Container>
                                <Image src={logo} fluid className={styles.mpLogo} />

                            </Container>
                        </Navbar>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}