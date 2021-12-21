import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { CSSTransition } from "react-transition-group";

function App() {
	return (
		<BrowserRouter>
		<Navbar/>
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/contact' element={<Contact/>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
