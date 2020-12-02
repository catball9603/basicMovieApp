import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	padding: 120px 80px 80px;
`;
const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	opacity: 0.5;
	filter: blur(7px);
	z-index: 0;
`;
const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1;
`;
const Cover = styled.div`
	width: 30%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	border-radius: 10px;
`;

const Data = styled.div`
	width: 70%;
	margin-left: 30px;
`;

const Title = styled.h3`
	font-size: 32px;
`;
const ItemContainer = styled.div`
	margin: 20px 0;
`;

const Item = styled.span``;
const Divider = styled.span`
	margin: 0 10px;
`;
const Overview = styled.p`
	font-size: 1.6rem;
	opacity: 0.7;
	line-height: 1.5;
	width: 50%;
`;

const DetialPresenter = ({ result, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			<Helmet>
				<title>
					{result.original_title ? result.original_title : result.original_name}{" "}
					| TTiving
				</title>
			</Helmet>
			<Backdrop
				bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
			/>
			<Content>
				<Cover
					bgImage={
						result.poster_path
							? `https://image.tmdb.org/t/p/original${result.poster_path}`
							: null
					}
				/>
				<Data>
					<Title>
						{result.original_title
							? result.original_title
							: result.original_name}
					</Title>
					<ItemContainer>
						<Item>
							{result.release_date
								? result.release_date
								: result.first_air_date}
						</Item>
						<Divider>.</Divider>
						<Item>
							{result.genres &&
								result.genres.map((genre, index) =>
									index === result.genres.length - 1
										? genre.name
										: `${genre.name} /`,
								)}
						</Item>
					</ItemContainer>
					<Overview>{result.overview}</Overview>
				</Data>
			</Content>
		</Container>
	);
DetialPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default DetialPresenter;
