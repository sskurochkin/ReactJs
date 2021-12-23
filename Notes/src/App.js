import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import Alert from "./components/Alert";
import FirebaseState from "./context/firebase/FirebaseState";

function App() {
	return (
		<FirebaseState>
			<AlertState>
				<BrowserRouter>
					<Navbar />
					<div className='container pt-4'>
						<Alert />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
					</div>
				</BrowserRouter>
			</AlertState>
		</FirebaseState>
	);
}

export default App;
