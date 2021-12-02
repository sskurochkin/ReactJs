import "./App.css";
import React from "react";
import Card from "./Card/Card";


function App() {
	return (
		<div
			className='App'
			style={{
				maxWidth: "500px",
				padding: '20px 40px',
				margin: "100px auto",
				borderRadius: 8,
			}}>
			<Card/>
		</div>
	);
}

export default App;
