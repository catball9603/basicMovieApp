import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import NotFound from "Components/NotFound";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
	padding: 0 20px;
	padding-top: 80px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) => (
	<Fragment>
		<Helmet>
			<title>Tv show | TTiving</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
				{/* topRated */}
				{topRated && topRated.length > 0 && (
					<Section title='TopRated Tv Show'>
						{topRated.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								imageUrl={show.poster_path}
								title={show.name}
								rating={show.vote_average}
								year={show.first_air_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}
				{/* popular */}
				{popular && popular.length > 0 && (
					<Section title='Popular TV Show'>
						{popular.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								imageUrl={show.poster_path}
								title={show.name}
								rating={show.vote_average}
								year={show.first_air_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}
				{/* airingToday */}
				{airingToday && airingToday.length > 0 && (
					<Section title='AiringToday'>
						{airingToday.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								imageUrl={show.poster_path}
								title={show.name}
								rating={show.vote_average}
								year={show.first_air_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}
				{error && <NotFound color='#e74c3c' text={error} />}
			</Container>
		)}
	</Fragment>
);

TvPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default TvPresenter;
