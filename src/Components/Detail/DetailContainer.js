import { movieApi, tvApi } from "api";
import React from "react";
import DetialPresenter from "./DetialPresenter";

class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
		const {
			location: { pathname },
		} = props;

		this.state = {
			result: null,
			loading: true,
			error: null,
			isMovie: pathname.include("/movie/"),
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: { id },
			},
			history: { push },
		} = this.props;

		const { isMovie } = this.state;

		const parsedId = parseInt(id);
		if (isNaN(parsedId)) {
			return push("/");
		}

		let result = null;
		try {
			if (isMovie) {
				({ data: result } = await movieApi.movieDetail(parsedId));
			} else {
				({ data: result } = await tvApi.tvDetail(parsedId));
			}
		} catch (error) {
			this.setState({
				error: "Can't find anything.",
			});
		} finally {
			this.setState({
				loading: false,
				result,
			});
		}
	}

	render() {
		const { result, loading, error } = this.state;
		return <DetialPresenter result={result} loading={loading} error={error} />;
	}
}

export default DetailContainer;
