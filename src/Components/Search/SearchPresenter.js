import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import NotFound from "Components/NotFound";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
	padding: 0 20px;
	padding-top: 80px;
`;
const Form = styled.form`
	margin-bottom: 50px;
	width: 100%;
`;
const Input = styled.input`
	all: unset;
	font-size: 20px;
	width: 100%;
`;

const SearchPresenter = ({
	movieResults,
	tvResults,
	searchWord,
	loading,
	error,
	handleSubmit,
	updateWrod,
}) => (
	<Fragment>
		<Helmet>
			<title>Search | TTiving</title>
		</Helmet>
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder='Search movie or tv show'
					value={searchWord}
					onChange={updateWrod}
				/>
			</Form>
			{/* searching results */}
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					{movieResults && movieResults.length > 0 && (
						<Section title='Movie Results'>
							{movieResults.map((movie) => (
								<Poster
									key={movie.id}
									id={movie.id}
									imageUrl={movie.poster_path}
									title={movie.original_title}
									rating={movie.vote_average}
									year={movie.release_date.substring(0, 4)}
									isMovie={true}
								/>
							))}
						</Section>
					)}

					{tvResults && tvResults.length > 0 && (
						<Section title='Tv Show Results'>
							{tvResults.map((tv) => (
								<Poster
									key={tv.id}
									id={tv.id}
									imageUrl={tv.poster_path}
									title={tv.name}
									rating={tv.vote_average}
									year={tv.first_air_date.substring(0, 4)}
									isMovie={true}
								/>
							))}
						</Section>
					)}
					{error && <NotFound color='#e74c3c' text={error} />}
					{tvResults &&
						movieResults &&
						tvResults.length === 0 &&
						movieResults.length === 0 && (
							<NotFound text='Nothing Found' color='#95a5a6' />
						)}
				</Fragment>
			)}
		</Container>
	</Fragment>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchWord: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	updateWrod: PropTypes.func.isRequired,
};

export default SearchPresenter;
