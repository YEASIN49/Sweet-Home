import React, {useState, useRef} from 'react';
import styled, {css} from 'styled-components/macro';
import { Button } from './Button';
import {TiArrowRight,TiArrowLeft, TiArrowRightThick} from 'react-icons/ti'


const HeroSection = styled.div`
	height: 100vh;
	max-height: 1100px;
	overflow: hidden;
`;
const HeroWrapper = styled.div`
	width : 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items:center;
	
`;
// const HeroSliderContainer = styled.div`

// `;
// const HeroSlider = styled.div`
	
// `;
const HeroImg = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	// background-position: center;
	// background-repeat: no-repeat;
	// background-size: cover;
	object-fit: cover;
	height: 100%;
	width: 100%;
	z-index: 0;
`;
const HeroContent = styled.div`
	position: absolute;
	top: 45%;
	color: white;
	z-index: 0;
	left: 3%;
	
	h2{
		font-size: clamp(2rem, 8vw, 3rem);	
		text-transform: uppercase;
		text-shadow: 0px 0px 20px rba(0,0,0,0.5);	
		margin: 0px 0px 5px 0;
	}
	p{
		font-size: clamp(1rem, 4vw, 1.2rem);
		// font-weight: bold;
		margin-bottom: 25px;
	}
	
	
`;
const SliderButton = styled.div`
	position: absolute;
	bottom: 3%;
	right: 3%;
	// background-color: red;
	// margin-top: 20px;
	
`;

const PrevNextArrow = css`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #000d1a;
	color: #fff;
	padding: 7px;
	margin: 10px;
	user-select: none;
	transition: 0.3s;
	// z-index:3;

	&:hover{
		background-color: #cd853f;
		transform: scale(1.2);
	}
`;

const NextArrow = styled(TiArrowRight)`
	${PrevNextArrow}
	
`;
const PrevArrow = styled(TiArrowLeft)`
	${PrevNextArrow}
	
`;

const arrowClass = 'btnArrow';


const Hero = ({slideData}) => {

	const [currentSlide, setCurrentSlide] = useState(slideData.length-1);
	// console.log(`outside function ${currentSlide}`);
		// currentSlide = 0;
	const nextSlide = () => {
		
		// console.log(`before next ${currentSlide}`);
		setCurrentSlide(currentSlide => currentSlide === slideData.length - 1 ? 0 : currentSlide + 1);
		
		// console.log(`after next ${currentSlide}`);
	}
	const prevSlide = () => {
		// console.log(`before prev ${currentSlide}`);
		setCurrentSlide(currentSlide => currentSlide === 0 ? slideData.length-1 : currentSlide - 1);
		
		// console.log(`after prev ${currentSlide}`);
	}
	// console.log(`outside function[after] ${currentSlide}`);

	return (
		<HeroSection>
			<HeroWrapper>
				{slideData.map((slide,index) => {
					return(
						<div key={index}>
							{currentSlide === index && (
								<div>
									<HeroImg src={slide.image} alt={slide.alt}/>
									<HeroContent>
										<h2>{slide.title}</h2>
										<p>{slide.price}</p>
										<Button to={slide.path}  
											primary='true'
											css={`
											font-size: 15px;
											// font-weight: bold;
											// text-transform: uppercase;
											line-height:18px;
											background-color: #8FD9A8;
											vertical-align: middle;
											border-radius: 50px;
											// color: black;
											font-weight: bold;
											height:18px;
											&:hover {
												background-color: #112031;
												color: white;
												
												.btnArrow{
													// transition: 0.3s;
													margin-left: 20px;
												}
											}
											
											`}
											>
											{slide.label}
											
											<TiArrowRightThick css={`
												transition: 0.3s;
												margin-left: 10px;
												font-size: 18px;
												vertical-align: middle;
												margin-bottom: 3px;
												// background-color: red;
												border-radius: 50%;
											`} 
											className={arrowClass} />
										</Button>
									</HeroContent>
								</div>
							)}

							
						</div>
					)
				})}
				<SliderButton>
					
					<PrevArrow onClick={prevSlide} />
					<NextArrow onClick={nextSlide} />
				</SliderButton>	
				
			</HeroWrapper>
		</HeroSection>
	);
};

export default Hero;