import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import { Grid } from './styles';
import './styles.css';
import Header from './Components/Header';
import Routes from './router';
import Footer from './Components/Footer';


function App() {
	return (
		<Grid>
			<BrowserRouter forceRefresh={true}>
				<Header />
				<Routes />
				<Footer />
			</BrowserRouter>
		</Grid>
	);
}

export default App;
