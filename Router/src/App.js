import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "./App.css";

const App = (props) => {
	return (
		<div>
			<h1>Простое SPA-приложение</h1>
			<ul className='header'>
				<li>
					<NavLink to='/'>Главная</NavLink>
				</li>
				<li>
					<NavLink to='/stuff'>Продукты</NavLink>
				</li>
				<li>
					<NavLink to='/contact'>Контакты</NavLink>
				</li>
			</ul>

			<div className='content'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/stuff' element={<Stuff />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
