export default function errorHandler(e: Error) {
	console.log(`${e.message}\n'${e.stack}`);
}