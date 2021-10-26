 import React from 'react';
 import styled, {css} from 'styled-components/macro'; 
 import {Link} from 'react-router-dom';
 import {Link as ScrollLink} from 'react-scroll';
 import { menuData } from '../data/MenuData';
//  import { Button } from './Button';
 import {CgClose, CgMenuRight } from 'react-icons/cg' ;   
 
 const navLink = css`
 	height:100%;
	color: #fff;
	text-decoration: none;
	list-style-type: none;
	// line-height: 60px;
	display: flex;
	align-items: center;
	padding: 0 1.5rem;
	cursor: pointer;
 `;

 const Nav = styled.nav`
 	position: relative;
	 z-index: 99;
	display: flex;
	justify-content: space-between;
	background-color: gray;
	height: 60px;
	padding: 0;
	margin:0;
 `;

 const Logo = styled(Link)`
	 ${navLink};
	 font-family: 'Zen Tokyo Zoo', cursive;
	 font-size: 24px;
 `;
 
 const MenuBars = styled.div`
 	display: none;

	 @media screen and (max-width: 768px){
		display: block;
		height: 60px;
		max-width: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32px;
		margin-right: 20px;
	 }
 `;

 const NavMenu = styled.div`
 	display: flex;
	align-items: center;

	@media screen and (max-width: 768px){
		// display:none;
		position: absolute;
		top: 100%;
		flex-direction: column;
		justify-content:center;
		background: #CD853F;
		width:100%;
		height: 100vh;
		margin: 0;
		z-index: 1;
		transition: 0.3s ease-in-out;
		left: ${({isDropdownOpen}) => (isDropdownOpen ? '0' : '-100vw' )};
		
	}
`;

 const NavMenuLinks = styled.div`
	 ${navLink};
	
	 @media screen and (max-width: 768px){
		 
		 padding: 10px;
		 height: 40px;
		 width: 100%;
		 margin: 10px 0;
		 text-align: center;
		 display: block;
		 &:first-child{
			 margin-top:-250px;
		 }
		 &:hover{
			 color: black;
		 }
	 }
	//  flex-flow: row nowrap;
 `;

 const NavBtn = styled.div`
	 display: flex;
	 align-items: center;
	 margin-right: 20px;
	 
	 @media screen and (max-width: 768px){
		// display:none;
		// align-items: flex-end;
		position: absolute;
		bottom: -70vh;
		z-index: 1;
		transform: translateX(-50%);
		transition: 0.3s ease-in-out;
		left: ${({isDropdownOpen}) => (isDropdownOpen ? '50%' : '-100vw' )};
	}
 `;

 const NavBtnContact = styled.div`
	background: #000d1a;
	white-space: none;
	outline: none;
	border: none;
	cursor: pointer;
	min-width: 100px;
	max-width: 200px;
	text-decoration: none;
	transition: 0.3s;
	text-align: center;
	padding: 14px 24px;
	color: #fff;
	font-size: 14px;
	

	&:hover {
		transform: translateY(-2px);
	}

	`;

 const Navbar = ({toggleDropdown, isDropdownOpen}) => {
	 
	 return( 
			<Nav>
				<Logo to="./">SweetHome</Logo>
				<MenuBars onClick={toggleDropdown}>
				{isDropdownOpen ? <CgClose /> : <CgMenuRight /> }
				</MenuBars>
				<NavMenu isDropdownOpen = {isDropdownOpen}> 
					{menuData.map((item, index) => (
						
						<NavMenuLinks key = {index}>
							<ScrollLink 
								// isDropdownOpen = {isDropdownOpen}
								// to={isDropdownOpen && item.link==="homes" ? onclick={toggleDropdown} : item.link} 
								to={item.link}
								smooth={true}
								duration={500}
								
							>
							{item.title}
							</ScrollLink>
						</NavMenuLinks>
					))}
				</NavMenu>
				
				<NavBtn isDropdownOpen={isDropdownOpen}> 
					<NavBtnContact> 
					<ScrollLink 
						to="appointment"
						smooth={true}
						duration={500}
					>
					Contact Us
					</ScrollLink>
						
					</NavBtnContact>
				</NavBtn>
				
			</Nav>
			
	 );
 };

 export default Navbar;