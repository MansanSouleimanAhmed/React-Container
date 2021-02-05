import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import propTypes from 'prop-types';
import DivBar from './div-bar';
import { DivHooks } from './DIvHooks';

// import { Container } from './styles';

function DivHooksComponent(props) {
	const fast = { tension: 1200, friction: 30 };
	const slow = { mass: 15, tension: 200, friction: 50 };
	const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
	const transRectangle = (x, y) => `${x + 100}px`;
	const [cubes, set] = useTrail(5, () => ({ xy: [0, 0], config: (i) => (i === 0 ? slow : slow) }));

	return (
		<DivHooks
			backgroundImage={props.backgroundImage}
			onMouseMove={(event) => {
				set({ xy: [event.clientX, event.clientY] });
			}}
		>
			{cubes.map((props, index) => (
				<animated.span key={index} style={{ transform: props.xy.interpolate(trans) }} />
			))}
			{cubes.map((props, index) => (
				<animated.div key={index} style={{ left: props.xy.interpolate(transRectangle) }} />
			))}
		</DivHooks>
	);
}
DivHooksComponent.propTypes = {
	height: propTypes.string,
	width: propTypes.string,
	margin: propTypes.string,
	padding: propTypes.string,
	backgroundColor: propTypes.string,
	opacity: propTypes.string,
	/* Images */
	backgroundAttachment: propTypes.string,
	backgroundImage: propTypes.string,
	backgroundRepeat: propTypes.string,
	backgroundSize: propTypes.string,
};
DivHooksComponent.defaultProps = {
	/* Images */
	//backgroundAttachment:,
	backgroundImage: 'url(https://www.partir.com/images/incontournables/japon-hakone-fuji.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
};
export default DivHooksComponent;
