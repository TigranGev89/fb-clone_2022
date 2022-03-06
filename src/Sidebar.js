
import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';


function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarRow src="https://media-exp1.licdn.com/dms/image/C5103AQEBve2Os8_1Ag/profile-displayphoto-shrink_800_800/0/1516869986449?e=1652313600&v=beta&t=Ny5kgoHIFS5vYWxxcUPBht4OC4rtoLg1q3w2h226iP4" title="Henry Gev" />
			<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
			<SidebarRow Icon={PeopleIcon} title="Friends"/>
			<SidebarRow Icon={ChatIcon} title="Messenger"/>
			<SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
			<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
			
		</div>
	)
}

export default Sidebar