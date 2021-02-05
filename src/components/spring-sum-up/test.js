import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import { useTrail, animated } from 'react-spring';
import DivHooksComponent from './div-hooks-component';
const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
let test;

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
	backgroundPosition,
}) => {
	const rootStyle = {
		height: (height = !undefined ? height : propTypes.height),
		width: (width = !undefined ? width : propTypes.width),
		margin: (margin = !undefined ? margin : propTypes.margin),
		padding: (padding = !undefined ? padding : propTypes.padding),
		backgroundColor: (backgroundColor = !undefined ? backgroundColor : propTypes.backgroundColor),
		/* 	backgroundImage: (backgroundImage = !undefined ? backgroundImage : propTypes.backgroundImage),
		backgroundAttachment: (backgroundAttachment = !undefined
			? backgroundAttachment
			: propTypes.backgroundAttachment),
		backgroundRepeat: (backgroundRepeat = !undefined ? backgroundRepeat : propTypes.backgroundRepeat),
		backgroundSize: (backgroundSize = !undefined ? backgroundSize : propTypes.backgroundSize),
		backgroundPosition: backgroundPosition, */
	};

	const placeholderRef = React.useRef(null);
	const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: (i) => (i === 0 ? fast : slow) }));
	& > first-child {
		width: 150px;
		height: 120px;
	}
				<DivHooksComponent key={index} style={props} />
			))}
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
	backgroundImage: propTypes.string,
	backgroundAttachment: propTypes.string,
	backgroundRepeat: propTypes.string,
	backgroundSize: propTypes.string,
};

SpringSumUP.defaultProps = {
	height: '400px',
	width: '100%',
	margin: '0',
	padding: '0',
	backgroundColor: '#fff',
	opacity: '0.3',
	/* 	backgroundImage:
		'url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)',
	backgroundAttachment: 'fixed',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '0px -500px',
	backgroundSize: 'cover', */
};

export default SpringSumUP;
