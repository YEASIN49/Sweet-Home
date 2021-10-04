import React,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Section = styled.section`
	width: 100%;
	height: 300px;
	background: #112031;
	margin: 50px 0;
	color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: no-wrap;
	font-size: 1rem;
	@media screen and (max-width: 768px){
		flex-wrap: wrap;
		height: 100%;
		padding: 20px 0;
		span:nth-child(4){
			// background-color: red;
			display: none;
		}
	}

	@media screen and (max-width: 576px){
		span:nth-child(n){
			display: none;
		}
	}




	div{
		text-align: center;
		// background-color: red;
		// border: 2px solid green;
		// padding: 20px;
		max-width: 300px;
		min-width: 110px;
		width: 100%;
		height: 180px;
		// background: rgb(3,3,0);
		// color: rgb(77,187,255);
		 color: rgb(77,121,255);
		border-radius: 20px;
	

		@media screen and (max-width: 768px){
			// max-width: 250px;
			width: 40% ;
			margin: 10px auto 40px auto;
		}

		@media screen and (max-width: 576px){
			max-width: 350px;
			width: 90% ;
			margin: 20px auto;
		}
	}

	p{
		position: relative;
		// top: 25%;
		font-size: 2rem;
		font-weight: bold;
		padding: 1em 5px 1em 5px;
	}
	.statusDigit{
		border: 10px solid rgb(56,30,150);
		border-radius: 50%;
		width: 120px;
		margin: 0 auto;
	}

	.border-gradient {
		

		// border: 10px solid;
		// border-image-slice: 1;
		// border-width: 5px;

		
		color: white;
		border-width: 5px;
		border-radius: 50%;
		width: 120px;
		margin: 20px auto;
		// background: -webkit-linear-gradient(left top, crimson 0%, #f90 100%);
		// box-shadow: 0 3px 9px black, inset 0 0 9px white;
	  }
	  .border-gradient::after {
		position: absolute;
		top: -5px;
		left: 5px;
		content: "";
		width: 100px;
		height: 100px;
		border: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
		transform: rotate(45deg);
	  }
	  
	  .border-gradient-purple {
		// border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
	  }

	.statusDescription{
		font-size: 1.1rem; 
		color: rgb(77,187,255);
		border: 1px solid rgb(77,187,255);
		margin: 30px 2px;
		border-radius: 30px;
		// padding-bottom: 25px;
	}
	span{
		font-size: 4rem;
		font-weight: bold;
		color: rgb(77,187,255);

	}
	
`;



const StatusBar = () => {

	const [timer, setTimer] = useState(0);
	// const [shouldStart, setShouldStart] = useState(true);

	useEffect(() => {
		let interval = null;
		if(timer <= 450-10){
			
			interval = setInterval(() => {
				setTimer((timer) => timer + 10);
			}, 10);
			
		}
		else{
			// setShouldStart(false);
			clearInterval(interval);
		}
		return() => {
			clearInterval(interval);			
		}
	},[timer]);
	
	return(
		<Section>
			<div>
				<p className="border-gradient border-gradient-purple">{timer}+</p>
				<p className="statusDescription">Happy Client</p>
			</div>
			<span className="divider">|</span>
			<div>
				<p className="statusDigit">1200+</p>
				<p className="statusDescription">Active Property</p>	 
			</div>
			<span className="divider">|</span>
			<div>
				<p className="statusDigit">13+</p>
				<p className="statusDescription">Country</p>	 
			</div>
			<span className="divider">|</span>
			<div>
				<p className="border-gradient border-gradient-purple">150+</p>
				<p className="statusDescription">Ongoing Project</p>	 
			</div>
		</Section>
	);
	
}

export default StatusBar;