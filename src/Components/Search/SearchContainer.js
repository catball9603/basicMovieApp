import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

class SearchContainer extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchWord: "",
		loading: false,
		error: null,
	};

	handleSubmit = () => {
		const { searchWord } = this.state;
		if (searchWord !== "") {
			this.searchByWord();
		}
	};

	async searchByWord() {
		const { searchWord } = this.state;
		this.setState({ loading: true });

		const {
			data: { results: movieResults },
		} = await movieApi.search(searchWord);

		const {
			data: { results: tvResults },
		} = await tvApi.search(searchWord);

		this.setState({
			movieResults,
			tvResults,
		});

		try {
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
			/>
		);
	}
}

export default SearchContainer;
