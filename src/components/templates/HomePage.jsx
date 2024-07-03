import { useEffect, useState } from "react";
import { apiAndUrl } from "../../services/apiandReq";
import TableCoins from "../modules/TableCoins";
function HomePage() {
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		const coinsFetchData = async () => {
			const respone = await fetch(apiAndUrl());
			const json = await respone.json();
			console.log(json);
			setCoins(json);
		};
		coinsFetchData();
		console.log(coins);
	}, []);
	return (
		<div>
			<TableCoins coins={coins} />
		</div>
	);
}

export default HomePage;
