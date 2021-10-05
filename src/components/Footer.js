import styled,{css} from 'styled-components/macro';
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import {FaPhone, FaFacebookF,FaInstagram,FaTwitter,FaYoutube} from "react-icons/fa";

const FooterWrapper = styled.section`
	width: 100%;
	background-color: #172F4B;
	margin-top: 30px;
	color: #a7b6ca;
`;
const FooterContent = styled.div`
	padding-top: 30px;
	display: flex;
	justify-content: space-around;
	flex-wrap: nowrap;
	padding-left: 1.5rem;

	@media screen and (max-width: 576px){
		flex-direction: column;
	}
`;

const FooterColumnHeader = styled.div`
	padding: 15px 0px;
	width: 100%;
	margin-top: 20px;
	position: relative;
	font-size: 1.15rem;

	&:before{
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 50%;
		height: 1.5px;
		// background-color: red;
		border-bottom: 1.8px dotted gray;
		z-index:1;
	}
`;

const ContactInfo = styled.div`
	width: 100%;
	padding-right: 15px;


	span{
		padding: 5px;
		line-height: 25px;
		vertical-align: bottom;		
	}
	@media screen and (max-width: 768x){
		span{
			font-size: 0.5rem;
		}
	}
`;

const serviceAndCompany = css`
width: 100%;
	
span{
	display: block;
	padding: 5px;
	line-height: 23px;
	vertical-align: bottom;	
}
`;
const Service = styled.div`
	${serviceAndCompany}
`;
const AboutCompany = styled.div`
	${serviceAndCompany}

`;

const footerLogo = css`
	display: inline-block;
	width: 20px;
	// padding-left:30px;
	margin-top: 12px;
	height: 1.1rem;
`;
const LocationSvg = styled(HiLocationMarker)`
	${footerLogo}
`;

const EmailSvg = styled(HiOutlineMail)`
	${footerLogo}
`;

const PhoneSvg = styled(FaPhone)`
	${footerLogo}
	height: 1rem;
`;

const AllSocialSvg = styled.div`
	padding-top: 10px;
	font-size: 1.5rem;
	display: inline-block;
	// display: flex;
	// justify-content: space-between;
	// background-color: red;
	width: 100%;
	// text-align: left;
	margin-bottom: 20px;
	
	

	a{	
		width: 30px;
		line-height: 18px;
		height: 18px;
		// margin-bottom: 10px;
		border-radius: 5px;
		background-color: #4DBBFF;
		margin-right: 15px;
		color: rgba(0,0,0,0.75);
		*{
			height: 18px;
		}
	}

`;

const Copywrite = styled.div`
	width: 100vw;
	text-align: center;
	// background-color: red;
	line-height: 50px;
	// padding: 20px auto;
`;


const Footer = () => {
	return(
		<FooterWrapper>
			<FooterContent>
				<ContactInfo>
					<FooterColumnHeader>Contact</FooterColumnHeader>
					<LocationSvg /><span>132/33 K.V. Wapda Road, West Rampura, Dhaka - 1219</span>
					<br/>
					<EmailSvg /><span>sweethome.xyz</span>
					<br />
					<PhoneSvg /><span>+123456789</span>
				 	<AllSocialSvg>
						<a href="#"><FaFacebookF /></a>
						<a href="#"><FaInstagram /></a>
						<a href="#"><FaTwitter /></a> 
						<a href="#"><FaYoutube /></a>
					</AllSocialSvg>	
				</ContactInfo>
				<Service>
				 <FooterColumnHeader>Services</FooterColumnHeader>
				 <span>Consultancy</span>
				 <span>Design</span>
				 <span>Broker</span>
				</Service>
				<AboutCompany>
					<FooterColumnHeader>Company</FooterColumnHeader>
					<span>FAQ</span>
					<span>Terms & Policies</span>
					<span>About</span>
				</AboutCompany>				
			</FooterContent>
			<Copywrite>
			&copy; All rights reserved by sweethome
			</Copywrite>
		</FooterWrapper>
	);
}

export default Footer;