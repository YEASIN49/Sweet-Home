import React from 'react';
import styled from 'styled-components/macro';
import InfoSectionContent from './InfoSectionContent';

const Section = styled.section`
	width: 80%;
	margin: 0 auto;
	padding-bottom: 5px;

	@media screen and (max-width: 991px){
		width: 95%;

		

	}
`;


const InfoSection = (props) => {
	
	return (
		<Section>
			{props.infoSectionData.map((infoData, index) => {
				return(
					<InfoSectionContent 
						content = {infoData}
						key = {index}

					/>
				);
			})}
			
		</Section>
	);
}


export default InfoSection;