export default function errorHandler(e: Error) {
	console.log(`${e.name}: ${e.message}\n'${e.stack}`);
}