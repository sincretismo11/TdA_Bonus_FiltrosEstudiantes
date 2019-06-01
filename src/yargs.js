const nombre= {
	demand: true,
	alias: 'n'
}
const matematicas= {
	demand: true,
	alias: 'm'
}
const programacion= {
	demand: true,
	alias: 'p'
}
const ingles= {
	demand: true,
	alias: 'i'
}
const creacion= {
	nombre,
	matematicas,
	programacion,
	ingles
}
const seleccionaEstudiante={
	nombre
}

const argv = require('yargs')
				.command('crear','Función para crear un estudiante', creacion)
				.command('mostrar', 'Función para mostrar todo el archivo de estudiantes')
				.command('mostrarEstudiante', 'Función para mostrar la información de un estudiante en específico', seleccionaEstudiante)
				.command('mostrarPromedio', 'Función para calcular y mostrar el promedio de un estudiante en específico', seleccionaEstudiante)
				.command('listarAprobados', 'Función para listar los estudiantes con un promedio superior a 3')
				.argv;


module.exports={
	argv
};