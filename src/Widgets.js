import React from 'react';
import "./Widgets.css"

function Widgets() {
	return (
		<div className='widgets'>
			<iframe src="https://www.youtube.com/embed?listType=playlist&list=PLC77007E23FF423C6" 
			width="210"
			style={{border: "none", overflow: "hidden"}}
			scrolling="no"
			frameBorder="0"
			allowtransparency="true"
			allow="encrypted-media"
			></iframe>
			<iframe src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
				width="210"

				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
			></iframe>

		</div>
	)
}

export default Widgets