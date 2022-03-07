import React from 'react';
import "./Feed.css";
import StoryReel from "./StorryReel";
import Post from "./Post";
import MessageSender from './MessageSender';

function Feed() {
	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />
			
			<Post 
				profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEBve2Os8_1Ag/profile-displayphoto-shrink_800_800/0/1516869986449?e=1652313600&v=beta&t=Ny5kgoHIFS5vYWxxcUPBht4OC4rtoLg1q3w2h226iP4"
				message="Wow this works!"
				timestamp="this is timestamp"
				username="Tigran Gev"
				image="https://images.unsplash.com/photo-1640622842523-4825918c4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
			/>
			<Post 
				profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEBve2Os8_1Ag/profile-displayphoto-shrink_800_800/0/1516869986449?e=1652313600&v=beta&t=Ny5kgoHIFS5vYWxxcUPBht4OC4rtoLg1q3w2h226iP4"
				message="Wow this works!"
				timestamp="this is timestamp"
				username="Tigran Gev"
			/>
			
		</div>
	)
}

export default Feed