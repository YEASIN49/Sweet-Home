import React from 'react';
import styled from 'styled-components/macro';
import {Button} from './Button';



const InfoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin: 20px auto;
`;
const TextContent = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: center;
	width: 45vw;
	padding: 10px;

	p{
		font-family: 'Roboto', sans-serif;
		color: #262626;
	}


	@media screen and (max-width: 768px){
		padding: 10px 5px;
	}
	@media screen and (max-width: 576px){
		width: 100vw;
		padding: 15px;

		p{
			padding-left: 5px;
		}

	}


`;
const ImgContainer = styled.div`
	span{
		display: none;
	}
	
	@media screen and (max-width: 576px){
		span{
			display: block;
			position: absolute;
			top: -5%;
			left: 0;
			text-align: center;
			line-height: 130px;
			color: white;
			z-index: 1;
			height: 130px;
			width: 150px;
			border-radius: 20px;
			background-color: #8FD9A8;
			font-family: 'Oleo Script Swash Caps', cursive;
			font-size: 22px;

			&::after{
				position: absolute;
				bottom: -10%;
				right:-5%;
				content: "";
				width: 30px;
				height: 30px;
				transform: rotate(45deg);
				background-color: #5C8D89;
				border-top-left-radius: 50%;
			}
			

		}
	}
	
`;

const InfoImg = styled.img`
	max-height: 85vh;
	margin: 5px;
	
	
	@media screen and (max-width: 768px){
		max-height: 60vh;
		box-shadow: 5px 5px 0 5px red;
		border-bottom-left-radius: 50%;
		border-top-right-radius: 50%;
	}

	@media screen and (max-width: 576px){
		max-width: 85%;
		max-height: 100%;
		border-radius: 0;
		box-shadow: none;
		margin: 0 auto;
		display: block;
	}

	@media screen and (min-width: 768px){
		box-shadow: 5px 5px 0 5px #150050;
		border-bottom-left-radius: 50%;
		border-top-right-radius: 50%;
	}
	
`;



const InfoSectionContent = (props) => {
	return (
	
		<InfoContainer 
			css = {`
				flex-direction: ${props.content.reverse ? 'row-reverse' : 'row'};

				@media screen and (max-width: 576px){
					flex-direction: column-reverse;
					align-items: center;
			
				}

			`}

		>
			<TextContent>
				<h2 css={`margin: 10px 0`}>{props.content.heading}</h2>
				<p>{props.content.paragraph}</p>
				<Button 
				// primary='true'
				to='./'
				css ={`
					margin: 20px 0;
					border-radius: 20px;
					// transition: 0.5s;
					background-color: #112031;
					color: white;
					
					&::after{
						position: absolute;
						top: 0;
						left:0;
						content: "";
						height: 0;
						width: 100%;
						border-radius: 20px;
						background-color: #8FD9A8;
						
						z-index: -1;
						transition: 0.3s;
					}
					&:hover::after{
						height: 100%;
					}
				`}
				>View</Button>
			</TextContent>
			<ImgContainer style={{position: 'relative'}}>
				<InfoImg src={props.content.image} />
				<span>Luxury Interior</span>
			</ImgContainer>
		</InfoContainer>
	)
} 

export default InfoSectionContent;