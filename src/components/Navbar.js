 import React from 'react';
 import styled, {css} from 'styled-components/macro'; 
 import {Link} from 'react-router-dom';
 import { menuData } from '../data/MenuData';
 import { Button } from './Button';
 import {TiThMenuOutline as MenuBarIcon} from 'react-icons/ti'  
 
 const navLink = css`
 	height:100%;
	color: #fff;
	text-decoration: none;
	list-style-type: none;
	// line-height: 60px;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	cursor; pointer;

 `;

 const Nav = styled.nav`
 	position: relative;
	 z-index: 99;
	display: flex;
	justify-content: space-between;
	// background-color: black;
	background-color: gray;
	height: 60px;
	padding: 0;
	margin:0;
 `;

 const Logo = styled(Link)`
	 ${navLink};
 `;
 
 const MenuBars = styled(MenuBarIcon)`
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
		display:none;
	}
`;

 const NavMenuLinks = styled(Link)`
	 ${navLink};
	 
	//  flex-flow: row nowrap;
 `;

 const NavBtn = styled.div`
 	display: flex;
	 align-items: center;
	 margin-right: 20px;
	 
	 @media screen and (max-width: 768px){
		display:none;
	}
 `;

 const Navbar = () => {
	 return( 
			<Nav>
				<Logo to="./">SweetHome</Logo>
				<MenuBars >
					<MenuBarIcon />
				</MenuBars>
				<NavMenu> 
					{menuData.map((item, index) => (
						<NavMenuLinks to={item.link} key = {index} >
						{item.title}
						</NavMenuLinks>
					))}
				</NavMenu>
				<NavBtn> 
					<Button to="/contact" primary="true">
						Contact Us
					</Button>
				</NavBtn>
				
			</Nav>
			
	 );
 };

 export default Navbar;