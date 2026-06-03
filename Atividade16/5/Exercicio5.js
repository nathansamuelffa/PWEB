let eventos = require('events');
let EmissorEventos = eventos.EventEmitter; //|boa prática
                                           //|
let ee = new EmissorEventos();             //|
//___________________________________________|

//ao invés de
//let ee = new eventos.EventEmitter();

ee.on('dados', function(fecha){
    console.log(fecha);
});

ee.emit('dados', 'primeira vez '+Date.now());

setInterval(function(){ee.emit('dados', Date.now());}, 500);