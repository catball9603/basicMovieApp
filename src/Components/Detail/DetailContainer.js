import React from "react";
import DetialPresenter from "./DetialPresenter";
import { moviesApi, tvApi } from "api";

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
			isMovie: pathname.includes("/movie/"),
			// istv: pathname.includes("/tv/"),
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
				({ data: result } = await moviesApi.movieDetail(parsedId));
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
