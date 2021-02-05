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
	const trans = (x, y) => `translate(50px,0px,0)`;

	const transRectangle = (x, y) => `${x}px`;
	const [cubes, set] = useTrail(5, () => ({ xy: [0, 0], config: (i) => (i === 0 ? slow : slow) }));

	return (
		<DivHooks
			backgroundImageProps={props.backgroundImageProps}
			backgroundImage={props.backgroundImage}
			widthContent={props.widthContent}
			widthContentProps={propTypes.widthContent}
			onMouseMove={(event) => {
				set({ xy: [event.clientX, event.clientY] });
			}}
		>
			{cubes.map((props, index) => (
				<animated.span key={index} style={{ transform: props.xy.interpolate(trans) }} />
			))}
			{cubes.map((props, index) => (
				<animated.div
					key={index}
					style={{
						left: props.xy.interpolate(transRectangle),
					}}
				/>
			))}
		</DivHooks>
	);
}

export default DivHooksComponent;
