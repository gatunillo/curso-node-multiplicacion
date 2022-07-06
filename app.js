const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

// console.log( argv );

// console.log('base: yargs', argv.b);
// const base = 7;

crearArchivo(argv.b, argv.l, argv.h)
 .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
 .catch( err => console.log(err) );