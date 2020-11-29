import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
	padding: 0 10px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) =>
	loading ? null : (
		<Container>
			{/*  */}
			{topRated && topRated.length > 0 && (
				<Section title='TopRated Tv Show'>
					{topRated.map((tv) => tv.name)}
				</Section>
			)}
			{/*  */}
			{popular && popular.length > 0 && (
				<Section title='Popular TV Show'>
					{popular.map((tv) => tv.name)}
				</Section>
			)}
			{/*  */}
			{airingToday && airingToday.length > 0 && (
				<Section title='AiringToday'>
					{airingToday.map((tv) => tv.name)}
				</Section>
			)}
		</Container>
	);

TvPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default TvPresenter;
