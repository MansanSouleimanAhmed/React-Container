import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useTrail, animated, useSpring } from 'react-spring';
import DivHooksComponent from './div-hooks-component';
const DivHooks = styled.div`
	position: absolute;
	width: inherit;
	height: inherit;
	overflow: hidden;
	& > span {
		position: absolute;
		will-change: transform;
		background: lightcoral;
		opacity: 0.6;
	}
	& > span:nth-child(1) {
		z-index: 3;
		width: 20px;
		height: 20px;
		background-color: red;
	}
	& > span:nth-child(2) {
		z-index: 3;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: red;
	}
	& > span:nth-child(3) {
		z-index: 3;
		width: 20px;
		height: 20px;
		background-color: red;
	}
	& > span:nth-child(4) {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: red;
	}
	& > div {
		z-index: 1;
		position: absolute;
		width: 10%;
		height: inherit;
		background-color: yellow;
	}
`;

const SpringSumUP = ({
	height,
	width,
	margin,
	padding,
	backgroundColor,
	backgroundImage,
	backgroundAttachment,
	backgroundRepeat,
	backgroundSize,
}) => {
	const rootStyle = {
		height: (height = !undefined ? height : propTypes.height),
		width: (width = !undefined ? width : propTypes.width),
		margin: (margin = !undefined ? margin : propTypes.margin),
		padding: (padding = !undefined ? padding : propTypes.padding),
		backgroundColor: (backgroundColor = !undefined ? backgroundColor : propTypes.backgroundColor),
	};

	const placeholderRef = React.useRef(null);
	const [detectMove, setDetectMove] = React.useState(false);
	const [cubes, setCubes] = useState({ x: 0, y: 0 });
	const hooksRef = React.useRef(null);
	const fast = { tension: 1200, friction: 40 };
	const slow = { mass: 10, tension: 200, friction: 50 };
	const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
	const [trail, set] = useTrail(4, () => ({
		xy: [0, 0],
		config: (i) => (i === 0 ? fast : slow),
	}));
	/* 	React.useEffect(() => {
		hooksRef.current.addEventListener('mousemove', handleCardMove);
		return () => {
			hooksRef.current.addEventListener('mousemove', handleCardMove);
		};
	}, [hooksRef]);

	const handleCardMove = (event) => setCubes({ x: event.clientX, y: event.clientY }); */
	/* 	console.log(cubes); */
	return (
		<div style={rootStyle} ref={hooksRef} onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}>
			{trail.map((props, index) => (
				<animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
			))}
			{/* 	<DivHooksComponent cubes={cubes} /> */}
		</div>
	);
};
SpringSumUP.propTypes = {
	height: propTypes.string,
	width: propTypes.string,
	margin: propTypes.string,
	padding: propTypes.string,
	backgroundColor: propTypes.string,
	opacity: propTypes.string,
};

SpringSumUP.defaultProps = {
	height: '500px',
	width: '100%',
	margin: '0',
	padding: '0',
	backgroundColor: '#fff',
	opacity: '0.3',
};

export default SpringSumUP;
