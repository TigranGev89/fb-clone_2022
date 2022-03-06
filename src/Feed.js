import React from 'react'
import StoryReel from "./StorryReel"
import "./Feed.css"
import MessageSender from './MessageSender'

function Feed() {
	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />
			{/* MessageSender*/}
			
		</div>
	)
}

export default Feed