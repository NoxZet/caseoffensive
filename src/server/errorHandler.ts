export default function errorHandler(e: Error) {
	console.log(`${e.constructor.name}: ${e.message || '[no message]'}\n'${e.stack}`);
}