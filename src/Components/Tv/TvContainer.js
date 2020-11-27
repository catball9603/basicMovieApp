import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "api";

class TvContainer extends React.Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		loading: false,
		error: null,
	};

	async componentDidMount() {
		try {
			const {
				data: { results: topRated },
			} = await tvApi.topRated();
			const {
				data: { results: popular },
			} = await tvApi.popular();
			const {
				data: { results: airingToday },
			} = await tvApi.airingToday();

			this.setState({
				topRated,
				popular,
				airingToday,
			});
		} catch (error) {
			this.setState({
				error: "Can't find Tv information.",
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	}

	render() {
		const { topRated, popular, airingToday, loading, error } = this.state;
		return (
			<TvPresenter
				topRated={topRated}
				popular={popular}
				airingToday={airingToday}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default TvContainer;
