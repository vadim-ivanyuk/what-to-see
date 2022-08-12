import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component) => () => {
	return (
		<BrowserRouter basename='/what-to-watch/'>
			<Suspense fallback={<div>Hello World</div>}>{component()}</Suspense>
		</BrowserRouter>
	);
};
