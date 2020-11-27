import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	z-index: 10;
	background-color: #212529;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const UlStyle = styled.ul`
	display: flex;
`;
const LiStyle = styled.li`
	width: 150px;
	height: 50px;
	transition: all 0.5s ease-in;
	border-bottom: 5px solid
		${(props) => (props.current ? '#c92a2a' : 'transparent')};
`;
const LinkStyle = styled(Link)`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.8rem;
	color: #fff;
`;

function Header({ location: { pathname } }) {
	return (
		<HeaderStyle>
			<UlStyle>
				<LiStyle current={pathname === '/'}>
					<LinkStyle to='/'>Movie</LinkStyle>
				</LiStyle>
				<LiStyle current={pathname === '/tv'}>
					<LinkStyle to='/tv'>Tv show</LinkStyle>
				</LiStyle>
				<LiStyle current={pathname === '/search'}>
					<LinkStyle to='/search'>Search</LinkStyle>
				</LiStyle>
			</UlStyle>
		</HeaderStyle>
	);
}

export default withRouter(Header);
