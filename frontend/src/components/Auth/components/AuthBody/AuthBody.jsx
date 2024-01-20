import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./AuthBody.module.css";


export const AuthBody = () => {


    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className={styles.textContainer}>
                        <h1>Ingresá tu e‑mail, teléfono o usuario de Mercado Pago
                        </h1>
                    </div>

                </Col>
                <Col sm={12} md={6}>

                    <div className={styles.formContainer}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>E‑mail, teléfono o usuario
                                </Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <div className={styles.buttonContainer}>
                                <Button className={styles.signIn} type="submit">
                                    Continuar
                                </Button>
                                <Button className={styles.signUp} type="submit">
                                    Crear cuenta
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>

        </Container>

    )
}