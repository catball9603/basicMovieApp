import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function SearchPresenter({
	movieResults,
	tvResults,
	searchWord,
	loading,
	error,
	handleSubmit,
}) {
	return <div>Search</div>;
}

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchWord: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
