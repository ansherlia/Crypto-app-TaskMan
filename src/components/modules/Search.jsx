import { useEffect, useState } from "react";
import { fetchSearchInput } from "../../services/apiandReq";
import styles from "./Search.module.css";
import { DNA } from "react-loader-spinner";
function Search({ setCurrency }) {
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState("");
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		const controller = new AbortController();
		const fetchSearch = async () => {
			try {
				const res = await fetch(fetchSearchInput(text), {
					signal: controller.signal,
				});
				const json = await res.json();
				setCoins(json.coins);
				setLoading(false);
			} catch (error) {
				// alert(error.message);
			}
		};
		setLoading(true);
		fetchSearch();
		return () => {
			controller.abort();
		};
	}, [text]);
	const currencyHandler = (event) => {
		const value = event.target.value;
		setCurrency(value);
	};
	console.log(coins);
	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Search"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<select className={styles.select} onClick={currencyHandler}>
				<option value="usd">USD</option>
				<option value="jpy">JPY</option>
				<option value="eur">EUR</option>
			</select>
			{!!text ? (
				<div className={styles.search}>
					{loading && <DNA />}
					<ul>
						{coins.map((coin) => (
							<li key={coin.id}>
								<img src={coin.thumb} alt={coin.name} />
								<p>{coin.name}</p>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</div>
	);
}

export default Search;
