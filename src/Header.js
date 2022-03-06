import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Header() {
	return (
		<div className='header'>
			<div className="header__left">
				<img 
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" 
				alt="" 
				/>
				<div className="header__input">
					<SearchIcon />
					<input placeholder="Search Facebook" type="text" />
				</div>

			</div>
			<div className="header__center">
				<div className="header__option header__option--active" >
					<HomeIcon />
				</div>
				<div className="header__option">
					<FlagIcon  />
				</div>
				<div className="header__option">
					<SubscriptionsOutlinedIcon  />
				</div>
				<div className="header__option">
					<StorefrontOutlinedIcon  />
				</div>
				<div className="header__option">
					<SupervisedUserCircleIcon />
				</div>

			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQEBve2Os8_1Ag/profile-displayphoto-shrink_800_800/0/1516869986449?e=1652313600&v=beta&t=Ny5kgoHIFS5vYWxxcUPBht4OC4rtoLg1q3w2h226iP4"/>
					<h4>Henry Gev</h4>
				</div>
				<IconButton>
					<AddIcon/>
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>

			</div>
			
		</div>
	)
}

export default Header