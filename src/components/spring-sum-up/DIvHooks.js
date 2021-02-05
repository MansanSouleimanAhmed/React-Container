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
		width: 100px;
		-webkit-box-shadow: 1px 0px 28px -3px #000000;
		box-shadow: 1px 0px 28px -3px #000000;
		background-color: red;
		background-image: ${(props) => props.backgroundImage};
		background-position: 0%;
		background-color: red;
		background-size: 120% 150%;
		-webkit-background-size: 120% 150%;
		-moz-background-size: 120% 150%;
		-o-background-size: 120% 150%;

		background-attachment: fixed;
	}
	&>div: nth-child(2) {
		transform: translateX(50px);
	}
`;
/* 	 */
