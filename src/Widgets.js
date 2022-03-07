import React from 'react';
import "./Widgets.css"

function Widgets() {
	return (
		<div className='widgets'>
			<iframe src="https://www.youtube.com/embed?listType=playlist&list=PLC77007E23FF423C6" 
			width="340"
			
			style={{border: "none", overflow: "hidden"}}
			scrolling="no"
			frameborder="0"
			allowTransparency="true"
			allow="encrypted-media"
			></iframe>
			<iframe src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
				width="340"

				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameborder="0"
				allowTransparency="true"
				allow="encrypted-media"
			></iframe>
		</div>
	)
}

export default Widgets