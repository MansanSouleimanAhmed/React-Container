import React, { Fragment } from 'react';
import SpringSumUP from './components/spring-sum-up/spring-sum-up';

//import SpringSumUP from './components/spring-sum-up/spring-sum-up';

function App() {
	return (
		<Fragment>
			<SpringSumUP
				backgroundImage="url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)"
				widthContent="11%"
				height="700px"
			/>
			<br />
		</Fragment>
	);
}

export default App;
