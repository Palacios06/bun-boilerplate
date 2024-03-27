
console.log('Hello from client!');

setImmediate(() => {
    emitNet('helloserver');
});

onNet('helloclient', (message: string) => {
    console.log(`The server replied: ${message}`);
});