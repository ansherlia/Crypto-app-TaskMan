const convertedData = (data, type) => {
	const convertData = data[type].map((item) => {
		const day = new Date(item[0]).getDate();
		const time = new Date(item[0]).getHours();
		// const fullTime = `date:${day} hour:${time}`;
		console.log(day);
		return {
			date: day,
			[type]: item[1],
		};
	});
	return convertData;
};
export { convertedData };
