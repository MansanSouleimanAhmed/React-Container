import React from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import propTypes from 'prop-types';
const Div_Bar = styled.div`
	position: absolute;

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
		background-color: yellow;
	}
	& > div:nth-child(2) {
		width: 120px;
		height: 20px;
		background-color: yellow;
	}
	& > div:nth-child(3) {
		width: 120px;
		height: 20px;
		background-color: yellow;
	}
`;
function DivBar() {
	const [trail, set] = useTrail(4, () => ({
		xy: [0, 0],
		config: (i) => (i === 0 ? fast : slow),
	}));

	const fast = { tension: 1200, friction: 40 };
	const slow = { mass: 10, tension: 200, friction: 50 };
	const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
	return (
		<Div_Bar onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}>
			{trail.map((props, index) => (
				<animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
			))}
		</Div_Bar>
	);
}

export default DivBar;
