import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ShowPoto from './components/ShowPoto';
import './App.css';

export default function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Route component={Home} path="/" exact />
				<Route component={ShowPoto} path="/ShowPoto" />
			</div>
		</BrowserRouter>
	);
}
