import React from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import propTypes from 'prop-types';
// import { Container } from './styles';
const DivHooks = styled.div`
	position: absolute;
	width: inherit;
	height: inherit;

	overflow: hidden;
	& > div {
		position: absolute;
		will-change: transform;

		background: lightcoral;
		opacity: 0.6;
	}
	& > div:nth-child(1) {
		width: 20px;
		height: 20px;
	}
	& > div:nth-child(2) {
		width: 5%;
		height: 500vh;
	}
	& > div:nth-child(3) {
		width: 20px;
		height: 20px;
	}
	& > div:nth-child(4) {
		width: 20px;
		height: 20px;
	}
`;
function DivHooksComponent(props) {
	return <DivHooks></DivHooks>;
}

export default DivHooksComponent;
