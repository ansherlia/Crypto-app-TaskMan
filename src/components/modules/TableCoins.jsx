import TableRow from "./TableRow";
import styles from "./TableCoin.module.css";
function TableCoins({ coins }) {
	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Coin</th>
						<th>Name</th>
						<th>Price</th>
						<th>24h</th>
						<th>Totale Volume</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{coins.map((coin) => (
						<TableRow coin={coin} key={coin.id} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TableCoins;
