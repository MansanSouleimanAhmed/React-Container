import styled from 'styled-components';

export const DivHooks = styled.div`
	position: relative;
	height: inherit;
	width: inherit;
	background-attachment: fixed;
	overflow: hidden;
	& > span {
		position: absolute;
		will-change: transform;
		background: lightcoral;
		opacity: 0.6;
	}

	& > div {
		z-index: 1;
		position: absolute;
		top: 0;
		height: inherit;
		width: ${(props) => (props.widthContent = !undefined ? props.widthContent : props.widthContentProps)};
		-webkit-box-shadow: 1px 0px 28px -3px rgba (0, 0, 0, 0.7);
		box-shadow: 1px 0px 28px -3px rgba(0, 0, 0, 0.7);
		background-color: red;
		background-image: ${(props) =>
			(props.backgroundImage = !undefined ? props.backgroundImage : props.backgroundImageProps)};
		background-position: 0%;
		background-color: red;
		background-size: 120% 120%;
		-webkit-background-size: 120% 120%;
		-moz-background-size: 120% 120%;
		-o-background-size: 120% 120%;
		background-attachment: fixed;
	}
`;
/* 	 */
