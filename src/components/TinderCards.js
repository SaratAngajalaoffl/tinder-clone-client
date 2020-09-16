import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../Styles/TinderCard.css";
import axios from "../axios";

function TinderCards() {
	const [profiles, setprofiles] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get("/cards/");

			console.log("Data is", req.data);
			setprofiles(req.data);
		}

		fetchData();
	}, []);

	return (
		<div className="tinderCard">
			<div className="tinderCard-Cardcontainer">
				{profiles.map((profile) => {
					return (
						<TinderCard
							className="swipe"
							key="SARAT"
							preventSwipe={["up", "down"]}
						>
							<div
								style={{
									backgroundImage: `url(${profile.imgurl})`,
								}}
								className="card"
							>
								<h1 className="card-title">{profile.name}</h1>
							</div>
						</TinderCard>
					);
				})}
			</div>
		</div>
	);
}

export default TinderCards;
