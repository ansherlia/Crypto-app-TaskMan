import { useEffect, useState } from "react";
import { apiAndUrl } from "../../services/apiandReq";
import TableCoins from "../modules/TableCoins";
import Pagination from "../modules/Pagination";
function HomePage() {
	const [page, setPage] = useState(1);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		const coinsFetchData = async () => {
			const respone = await fetch(apiAndUrl(page));
			const json = await respone.json();
			console.log(json);
			setCoins(json);
		};
		coinsFetchData();
		console.log(coins);
	}, [page]);
	return (
		<div>
			<TableCoins coins={coins} />
			<Pagination page={page} setPage={setPage} />
		</div>
	);
}

export default HomePage;
