import React, { Component } from "react";
import Label from "./Label/Label";
import Color from "./Color/Color";

class Card extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
	state = {
		bgColor: "",
	};

	changeColorHandler = (e) => {
		if (this.state.bgColor.length === 7) {
			this.setState({
				bgColor: "#" + e.target.value,
			});
			return;
		}

		this.setState({
			bgColor: "#" + e.target.value,
		});
	};

	clearInput = () => {
		this.setState({
			bgColor: "",
		});
		this.myRef.current.focus();
		this.myRef.current.value = "";
	};
	render() {

        
		console.log(this.state.bgColor);

		const cardStyle = {
			padding: "10px",
			width: 220,
			display: "flex",
			flexDirection: "column",
			margin: "0 auto",
			boxSizing: "border-box",
			boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.3)",
		};

		return (
			<div style={cardStyle}>
				<Color color={this.state.bgColor} />
				<Label
					ref={this.myRef}
					onChange={this.changeColorHandler}
				/>
				<button onClick={this.clearInput}>Reset</button>
			</div>
		);
	}
}

export default Card;
