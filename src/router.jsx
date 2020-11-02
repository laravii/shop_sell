import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Pages/Home';
import Forms from './Pages/Forms';
import Shop from './Pages/Shop';

export default function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<Main />
			</Route>
			<Route path='/forms-new-product' component={Forms}></Route>
			<Route path='/forms-set-product/:id' component={Forms}></Route>
			<Route path='/shop' component={Shop}></Route>
		</Switch>
	);
}
