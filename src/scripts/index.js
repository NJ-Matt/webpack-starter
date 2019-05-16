
function startCar(carId) {
	let message = 'Starting...';
	let startFn = function turnKey() {
		console.log(message);
	};
	startFn();
}

startCar(123);