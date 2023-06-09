const url = "https://worldtimeapi.org/api/timezone";

fetch(url)
	.then(response => response.json())
	.then(data => {
		let countries = [];
		data.forEach(timezone => {
			if (/04:20$|04:20:/.test(timezone)) {
				let country = timezone.split("/")[0];
				if (!countries.includes(country)) {
					countries.push(country);
				}
			}
		});
		let worldClock = document.getElementById("world-clock");
		if (countries.length > 0) {
			worldClock.innerHTML = "Son las 4:20 en " + countries.join(", ");
		} else {
			worldClock.innerHTML = "No, pero podes fumar igual";
		}
	})
	.catch(error => console.log(error));

