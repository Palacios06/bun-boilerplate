
console.log('Hello from server!');

onNet('helloserver', () => {
    const _source = source;

    console.log(`Hello from ${_source}`);

    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
    emitNet('helloclient', _source, ' hola mexico');
});