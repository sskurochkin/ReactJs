import React from "react";

export function Loader() {
	return (
		<div className='text-center'>
			<div className='spinner-grow' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
}

export default Loader;
