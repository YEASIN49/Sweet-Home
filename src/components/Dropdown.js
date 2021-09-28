import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';

const DropdownContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: green;
	z-index: 99;
	color: red;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div``;
const DropdownItem = styled.div``;


const Dropdown = () => {
	return (
		<DropdownContainer>
			<DropdownWrapper>
				<DropdownMenu>
				{menuData.map((item, index) => (
					<DropdownItem>
						{item.title}
					</DropdownItem>
				))}
				</DropdownMenu>
			</DropdownWrapper>
		</DropdownContainer>
	);
}

export default Dropdown;