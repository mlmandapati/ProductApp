import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import googleplay from '../Photos/en_badge_web_generic.png';
import appstore from '../Photos/appstorepic.jpeg';

const Footer = () => {
return (
	<Box>
	{/* <h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1> */}
	<Container>
		<Row>
		<Column>
			<Heading>Customer Policies</Heading>
			<FooterLink href="#">Contact Us</FooterLink>
			<FooterLink href="#">FAQ</FooterLink>
			<FooterLink href="#">T&C</FooterLink>
		</Column>
		<Column>
			<Heading style={{width:"150px"}}>Experience Shopperverse on Moblie</Heading>
			<FooterLink><img style={{width:"120px", height:"70px", padding:"-5px"}} src={googleplay}/> </FooterLink>
			<FooterLink><img style={{width:"120px", height:"50px"}} src={appstore}/> </FooterLink>
		</Column>
		<Column>
			<Heading>Keep in touch</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
