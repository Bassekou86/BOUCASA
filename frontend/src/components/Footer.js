
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Aliment Bou'Casa 
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>À propos de nous</Heading>
                        <FooterLink href="#">
                            Histoire
                        </FooterLink>
                        <FooterLink href="#">
                            Objectif
                        </FooterLink>
                        <FooterLink href="#">
                            Services
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contactez nous</Heading>
                        <FooterLink href="#">
                            Formulaire de contact
                        </FooterLink>
                        <FooterLink href="#">
                            Telephone
                        </FooterLink>
                        <FooterLink href="#">
                            Adresse
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Reseau sociaux</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;