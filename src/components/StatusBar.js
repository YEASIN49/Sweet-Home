import React,{useEffect, useState, useRef} from 'react';
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

	const [clientCount, setClientCount] = useState(0);
	const [propertyCount, setPropertyCount] = useState(0);
	const [projectCount, setProjectCount] = useState(0);
	// const [shouldStart, setShouldStart] = useState(true);
	const statusBarRef = useRef(null);
	const intervalPointerRef = useRef();
	const propertyCountRef = useRef();
	const projectCountRef = useRef();



	const countAdder = () => {
		setClientCount((clientCount) => clientCount + 10);
		// console.log(`yes B[statusBar]  ${clientCount}` );
	}
	const propertyAdder = () => {
		setPropertyCount((propertyCount) => propertyCount + 10);
		// console.log(` [propertyAdder] => [statusBar]  ${propertyCount}` );
	}
	const projectAdder = () => {
		setProjectCount((projectCount) => projectCount + 10);
		// console.log(` [projectAdder] => [statusBar]  ${projectCount}` );
	}


	const handleIntersect = (entries) => {
		// console.log(" [handleIntersect] => [statusBar]");
		
		entries.forEach((entry) => {
			
			if(entry.isIntersecting){
				intervalPointerRef.current = setInterval(() => {
					countAdder();

					// console.log(`yes A[statusBar]  ${clientCount}` );
					
				}, 50);

				propertyCountRef.current = setInterval(()=>{
					propertyAdder();
				},15);
				projectCountRef.current = setInterval(()=>{
					projectAdder();
				},95);
				// observer.unobserve(statusBarRef.current);	
				observer.disconnect();					
			}
		});
	}

	// console.log(`${document.querySelector('#holder')} is root`);
	var observer;
	const createObserver = () => {
		
	
		let options = {
			root: null,
			rootMargin: "-100px",
			threshhold: 1//[0, 0.25, 0.5, 0.75, 1]	
		};

		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(statusBarRef.current);
		// observer.observe(propertyCountRef.current);
		
		// observer.observe(lazyTextRef.current);
	}

	useEffect(() => {
		if(clientCount >= 420){
			clearInterval(intervalPointerRef.current);
			
		}
		if(propertyCount >= 1200){
			clearInterval(propertyCountRef.current);	
		}
		if(projectCount >= 150){
			clearInterval(projectCountRef.current);	
		}
	
		
	},[clientCount, propertyCount, projectCount]);

	useEffect(() => {
		createObserver();
		// console.log(`insdie ===> [createObserver useEffect : (StatusBar.js)]`);
	
			return () => (observer.disconnect());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);


	
	return(
		<Section ref={statusBarRef}>
			<div>
				<p className="border-gradient border-gradient-purple">{clientCount}+</p>
				<p className="statusDescription">Happy Client</p>
			</div>
			<span className="divider">|</span>
			<div>
				<p className="statusDigit">{propertyCount}+</p>
				<p className="statusDescription">Active Property</p>	 
			</div>
			<span className="divider">|</span>
			<div>
				<p className="statusDigit">13+</p>
				<p className="statusDescription">Country</p>	 
			</div>
			<span className="divider">|</span>
			<div>
				<p className="border-gradient border-gradient-purple">{projectCount}+</p>
				<p className="statusDescription">Ongoing Project</p>	 
			</div>
		</Section>
	);
	
}

export default StatusBar;