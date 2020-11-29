import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function DetialPresenter({ result, loading, error }) {
	return <div>Detail</div>;
}

DetialPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default DetialPresenter;
