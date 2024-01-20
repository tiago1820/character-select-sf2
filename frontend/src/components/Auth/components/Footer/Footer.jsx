import Container from 'react-bootstrap/Container';
import styles from "./Footer.module.css";

export const Footer = () => {

    return (
        <Container fluid className={styles.footerContainer}>
            <p>Cómo cuidamos tu privacidad - Copyright © 1999-2024 MercadoLibre S.R.L.</p>
            <p></p>
            <p>Protegido por reCAPTCHAPrivacidadCondiciones</p>
        </Container>

    );
}