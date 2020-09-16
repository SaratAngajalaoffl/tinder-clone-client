import React from "react";
import "../Styles/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon />
			</IconButton>
			<img
				className="header-logo"
				src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
				alt="tinder"
			/>
			<IconButton>
				<ForumIcon />
			</IconButton>
		</div>
	);
}

export default Header;
