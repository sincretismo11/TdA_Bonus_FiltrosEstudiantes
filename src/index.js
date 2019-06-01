//IMPORTACIÓN DE LOS MÓDULOS YARGS, FUNCIONES 
const {argv} = require('./yargs');
const funciones = require('./funciones');
const crear = funciones.crear;
const mostrar = funciones.mostrar;
const mostrarEstudiante = funciones.mostrarEstudiante;
const mostrarPromedio = funciones.mostrarPromedio;
const listarAprobados = funciones.promediosSuperiores;

//RECOPILACION DEL COMANDO INGRESADO PARA OPERAR
var command = argv._[0];

console.log('\n--------------------------------------------------');
console.log('\nBienvenido al sistema de gestión de estudiantes \n');
console.log('--------------------------------------------------\n');
switch (command){

	case 'crear':
		console.log('\n- Ha seleccionado la opción para la creación de un estudiante en el sistema \n');
		crear(argv.n, argv.m, argv.p, argv.i);
		break;

	case 'mostrar':
		console.log('\n- Ha seleccionado la opción para leer los estudiantes registrados en el sistema \n');
		mostrar();
		break;	

	case 'mostrarEstudiante':
		console.log('\n- Ha seleccionado la opción para visualizar la información de '+ argv.n +':\n');
		mostrarEstudiante(argv.n);
		break;

	case 'mostrarPromedio':
		console.log('\n- Ha seleccionado la opción para visualizar el promedio de '+ argv.n +':\n');
		mostrarPromedio(argv.n);
		break;
	case 'listarAprobados':
		console.log('\n- Los estudiantes que aprobaron con un promedio superior a 3 son:\n');
		listarAprobados();
		break;

	default:
		console.log('! - Opción no valida. Por favor verificar la operación que se desea realizar');
		break;
}