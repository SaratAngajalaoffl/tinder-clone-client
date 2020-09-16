import React from "react";
import "../Styles/SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
	return (
		<div className="swipe_buttons">
			<IconButton>
				<ReplayIcon fontSize="large" />
			</IconButton>
			<IconButton>
				<StarRateIcon fontSize="large" />
			</IconButton>
			<IconButton>
				<CloseIcon fontSize="large" />
			</IconButton>
			<IconButton>
				<FavoriteIcon fontSize="large" />
			</IconButton>
			<IconButton>
				<FlashOnIcon fontSize="large" />
			</IconButton>
		</div>
	);
}

export default SwipeButtons;
