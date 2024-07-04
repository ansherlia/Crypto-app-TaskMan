import styles from "./Layout.module.css";
function Layouts({ children }) {
	return (
		<div>
			<header className={styles.header}>
				<h1>Crypto App</h1>
				<p>
					ReactJS Project | <span>TaskMan</span>
				</p>
			</header>
			{children}
			<footer className={styles.footer}>
				Developed By Reza With <span>&#10084;</span>
			</footer>
		</div>
	);
}

export default Layouts;
