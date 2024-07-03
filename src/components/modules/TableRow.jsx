import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableRow.module.css";
function TableRow({ coin }) {
	return (
		<tr className={styles.contain}>
			<td>
				<div className={styles.symbol}>
					<img src={coin.image} alt={coin.name} />
					<span>{coin.symbol.toUpperCase()}</span>
				</div>
			</td>
			<td>{coin.name}</td>
			<td>{coin.current_price.toLocaleString()}</td>
			<td className={coin.price_change_24h < 0 ? styles.error : styles.success}>
				{coin.price_change_24h.toLocaleString()}
			</td>
			<td>{coin.total_volume}</td>
			<td>
				<img
					src={coin.price_change_24h > 0 ? chartUp : chartDown}
					alt="chartUporDown"
				/>
			</td>
		</tr>
	);
}

export default TableRow;
