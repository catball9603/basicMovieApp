import React from "react";
import styled from "styled-components";
import { IoIosAlarm } from "react-icons/io";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 100px;
`;

const IconsStyle = styled(IoIosAlarm)`
	font-size: 3rem;
	color: #fff;
	margin-bottom: 20px;
`;

const Text = styled.p`
	font-size: 1.7rem;
	color: #fff; ;
`;

const Loader = () => (
	<Container>
		<IconsStyle />
		<Text>Loading...</Text>
	</Container>
);

export default Loader;
