import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useTrail, animated, useSpring } from 'react-spring';
import DivHooksComponent from './div-hooks-component';

const DivHooks = styled.div``;

const SpringSumUP = ({
	height,
	width,
	margin,
	padding,
	backgroundColor,
	/* Images */
	backgroundAttachment,
	backgroundImage,
	backgroundRepeat,
	backgroundSize,
	widthContent,
}) => {
	const rootStyle = {
		height: (height = !undefined ? height : propTypes.height),
		width: (width = !undefined ? width : propTypes.width),
		margin: (margin = !undefined ? margin : propTypes.margin),
		padding: (padding = !undefined ? padding : propTypes.padding),
		backgroundColor: (backgroundColor = !undefined ? backgroundColor : propTypes.backgroundColor),
		backgroundImage: (backgroundImage = !undefined ? backgroundImage : propTypes.backgroundImage),
		backgroundRepeat: (backgroundRepeat = !undefined ? backgroundRepeat : propTypes.backgroundRepeat),
		backgroundSize: (backgroundSize = !undefined ? backgroundSize : propTypes.backgroundSize),
	};

	return (
		<div style={rootStyle}>
			<DivHooksComponent
				backgroundImage={backgroundImage}
				backgroundImageProps={propTypes.backgroundImage}
				widthContent={widthContent}
				widthContentProps={propTypes.widthContent}
			/>
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
	widthContent: propTypes.string,
	/* Images */

	backgroundAttachment: propTypes.string,
	backgroundImage: propTypes.string,
	backgroundRepeat: propTypes.string,
	backgroundSize: propTypes.string,
};

SpringSumUP.defaultProps = {
	height: '700px',
	width: '100%',
	margin: '0',
	padding: '0',
	widthContent: '100px',
	backgroundColor: '#fff',
	opacity: '0.3',
	/* Images */
	//backgroundAttachment:,
	backgroundImage: 'url(https://www.partir.com/images/incontournables/japon-hakone-fuji.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
};

export default SpringSumUP;
