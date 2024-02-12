console.log(getDate());

function write_date() {



	document.getElementById("date")
		.innerHTML = getDate() + " | " + getTime();

	setTimeout(write_date, 0);
}

function getDate() {


	const date = new Date();

	var week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	let week_day = week_days[ date.getDay() ]

	return week_day + ", " + day + "/" + month + "/" + year;
}

function getTime() {

	const date = new Date();


	let hour = date.toLocaleString("pl", { hour: "2-digit" });
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });

	return hour + ":" + minute + ":" + second
}

write_date();
