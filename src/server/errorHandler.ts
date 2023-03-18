export default function errorHandler(e: Error) {
	console.log(`${e.constructor.name}: ${e.message}\n'${e.stack}`);
}