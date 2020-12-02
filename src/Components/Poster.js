import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	font-size: 1.6rem;
	color: #fff;
`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	height: 180px;
	border-radius: 4px;
	background-size: cover;
	background-position: center center;
	transition: opacity 0.1s linear;
`;
const Rating = styled.div`
	bottom: 5px;
	right: 5px;
	position: absolute;
	opacity: 0;
`;
const Title = styled.p`
	display: inline-block;
	margin-bottom: 3px;
`;
const Year = styled.p`
	font-size: 1.2rem;
	color: rgba(255, 255, 255, 0.5);
`;

const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
		<Container>
			<ImageContainer>
				<Image
					bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : null}
				/>
				<Rating>
					<span role='img' aria-label='rating'>
						⭐
					</span>
					{""}
					{rating}/10
				</Rating>
			</ImageContainer>
			<Title>{title}</Title>
			<Year>{year}</Year>
		</Container>
	</Link>
);

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool,
};

export default Poster;
