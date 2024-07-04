import styles from "./Chart.module.css";
import { convertedData } from "../helper/helper";
import { useState } from "react";
import {
	CartesianGrid,
	LineChart,
	ResponsiveContainer,
	Line,
	YAxis,
	XAxis,
	Legend,
	Tooltip,
} from "recharts";
function Chart({ setChart, chart, coins }) {
	const [type, setType] = useState("prices");
	console.log(coins);
	console.log(convertedData(chart, type));
	const exitHandler = () => {
		setChart(false);
	};
	const typeHandler = (event) => {
		if (event.target.tagName === "BUTTON") {
			const text = event.target.innerText.toLowerCase().replace(" ", "_");
			setType(text);
		} else {
			return;
		}
	};
	return (
		<div className={styles.container}>
			<span onClick={exitHandler} className={styles.crossIcon}>
				X
			</span>
			<div className={styles.chart}>
				<div className={styles.name}>
					<img src={chart.coin.image} alt={chart.coin.name} />
					<p>{chart.coin.name}</p>
				</div>
				<div className={styles.charted}>
					<ChartComponent data={convertedData(chart, type)} type={type} />
				</div>
				<div onClick={typeHandler} className={styles.types}>
					<button>Prices</button>
					<button>Market Caps</button>
					<button>Total Volumes</button>
				</div>
				<div className={styles.details}>
					<div>
						<p>Prices:</p>
						<span>{chart.coin.current_price.toLocaleString()}</span>
					</div>
					<div>
						<p>ATH: </p>
						<span>{chart.coin.ath}</span>
					</div>
					<div>
						<p>Market Caps:</p>
						<span>{chart.coin.market_cap.toLocaleString()}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
const ChartComponent = ({ data, type }) => {
	return (
		<ResponsiveContainer>
			<LineChart width={400} height={400} data={data}>
				<Line
					type="monotone"
					dataKey={type}
					// stroke="#a12a1"
					strokeWidth="2px"
				/>
				<CartesianGrid stroke="#404042" />
				<YAxis dataKey={type} domain={["auto", "auto"]} />
				<XAxis dataKey="date" />
				<Legend />
				<Tooltip />
			</LineChart>
		</ResponsiveContainer>
	);
};
export default Chart;
