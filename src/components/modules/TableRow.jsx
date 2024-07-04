import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableRow.module.css";
import { fetchChartData } from "../../services/apiandReq";
function TableRow({ coin, currency, setChart }) {
	const {
		name,
		image,
		symbol,
		current_price,
		price_change_24h,
		id,
		total_volume,
	} = coin;
	const chartHandler = async () => {
		try {
			const res = await fetch(fetchChartData(id));
			const json = await res.json();
			setChart({ ...json, coin: coin });
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<tr className={styles.contain}>
			<td>
				<div onClick={chartHandler} className={styles.symbol}>
					<img src={image} alt={name} />
					<span>{symbol.toUpperCase()}</span>
				</div>
			</td>
			<td>{name}</td>
			<td>{current_price.toLocaleString()}</td>
			<td className={price_change_24h < 0 ? styles.error : styles.success}>
				{price_change_24h.toLocaleString()}
			</td>
			<td>{total_volume}</td>
			<td>
				<img
					src={price_change_24h > 0 ? chartUp : chartDown}
					alt="chartUporDown"
				/>
			</td>
		</tr>
	);
}

export default TableRow;
