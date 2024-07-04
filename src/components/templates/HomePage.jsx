import { useEffect, useState } from "react";
import { apiAndUrl } from "../../services/apiandReq";
import TableCoins from "../modules/TableCoins";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import styles from "./HomePage.module.css";
import Chart from "../modules/Chart";
import Layouts from "../Layouts/Layouts";
function HomePage() {
	const [page, setPage] = useState(1);
	const [coins, setCoins] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [currency, setCurrency] = useState("usd");
	const [chart, setChart] = useState(false);
	useEffect(() => {
		const coinsFetchData = async () => {
			try {
				const respone = await fetch(apiAndUrl(page, currency));
				const json = await respone.json();

				setCoins(json);
				setIsLoading(false);
			} catch (error) {
				setError(true);
			}
		};
		coinsFetchData();
	}, [page, currency]);
	return (
		<Layouts>
			<Search setCurrency={setCurrency} />
			{error ? (
				<h2 className={styles.errorMessage}>SomeThing went wrong!</h2>
			) : (
				<TableCoins
					coins={coins}
					isLoading={isLoading}
					setIsLoading={setIsLoading}
					currency={currency}
					setChart={setChart}
				/>
			)}
			<Pagination page={page} setPage={setPage} />
			{!!chart && <Chart setChart={setChart} chart={chart} coins={coins} />}
		</Layouts>
	);
}

export default HomePage;
