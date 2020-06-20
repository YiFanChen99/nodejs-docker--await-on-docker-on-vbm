
(async function() {
	process.on('beforeExit', (code) => {
		console.log('Process before exit event with code: ', code);
	});

	const { Client } = require('pg')
	const client = new Client({
		user: 'postgres',
		host: "127.0.0.1",
		database: 'mydatabase',
		password: 'mypassword',
		port: 5432
	});

	console.log("before connect");
	await client
		.connect()
		.then(() => console.log('connected'))
		.catch(err => console.log('connection error', err.stack))
	console.log("after connect");
	setTimeout(() => {
		console.log("after timeout 3 secs")
	}, 3000);
})();
