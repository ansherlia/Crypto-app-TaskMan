import TableRow from "./TableRow";
import styles from "./TableCoin.module.css";
import { DNA } from "react-loader-spinner";
function TableCoins({ coins, isLoading, setChart }) {
	return (
		<div className={styles.container}>
			{isLoading ? (
				<DNA width="400"  height="150"  ariaLabel="dna-loading"/>
			) : (
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
							<TableRow
								coin={coin}
								key={coin.id}
								isLoading={isLoading}
								setChart={setChart}
							/>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default TableCoins;
