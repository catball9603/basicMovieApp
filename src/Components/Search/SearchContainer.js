import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

class SearchContainer extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchWord: "",
		loading: false,
		error: null,
	};

	//saarchByWord 함수를 실행시키는 함수
	handleSubmit = (e) => {
		e.preventDefault();
		const { searchWord } = this.state;
		if (searchWord !== "") {
			this.searchByWord();
		}
	};

	//input searchWord
	updateWrod = (e) => {
		const {
			target: { value },
		} = e;
		this.setState({
			searchWord: value,
		});
	};

	async searchByWord() {
		const { searchWord } = this.state;
		this.setState({ loading: true });

		try {
			const {
				data: { results: movieResults },
			} = await moviesApi.search(searchWord);

			const {
				data: { results: tvResults },
			} = await tvApi.search(searchWord);

			this.setState({
				movieResults,
				tvResults,
			});
		} catch (error) {
			this.setState({ error: "Can't find results." });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { movieResults, tvResults, searchWord, loading, error } = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchWord={searchWord}
				loading={loading}
				error={error}
				handleSubmit={this.handleSubmit}
				updateWrod={this.updateWrod}
			/>
		);
	}
}

export default SearchContainer;
