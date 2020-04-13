
const fetch = require('node-fetch');
const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';
const myReservation = {
    "name": "Lokman",
    "numberOfPeople": 7
};

	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(myReservation)
	})
		.then((res) => res.text())
		.then((text) => {
			console.log(text);
		})
		.catch((err) => {
			console.log(err);
		});



