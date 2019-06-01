//IMPORTACIÓN DEL MÓDULO FILE SYSTEM
const fs = require('fs');

//DECLARACIÓN DEL VECTOR QUE ALMACENARÁ LA INFORMACIÓN
listaEstudiantes=[];

//IMPLEMENTACIÓN DE UNA FUNCIÓN PARA VALIDAR LA EXISTENCIA DE UN ARCHIVO .JSON PARA ALMACENAR LA INFORMACIÓN
const validacionArchivo = () =>{
	try{
		listaEstudiantes = require('./listaDeEstudiantes.json');
	} catch(err) {
		listaEstudiantes=[];
	}
}

//IMPLEMENTACIÓN DE LA FUNCIÓN PARA VERIFICAR SI EXISTE YA UN ESTUDIANTE REGISTRADO
const validacionEstudiante = (name) =>{
	var indiceEstudiante = listaEstudiantes.findIndex(i => i.nombre === name);
	return indiceEstudiante;
}

//IMPLEMENTACIÓN DE LA FUNCIÓN PARA GUARDAR LA INFORMACIÓN CONTENIDA EN EL VECTOR listaEstudiantes 
//EN UN ARCHIVO .JSON
const guardar = () =>{
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listaDeEstudiantes.json', datos, (err)=>{
		if (err) throw (err);
		console.log('El archivo ha sido creado exitosamente');
	})
}

//IMPLEMENTACIÓN DE LA FUNCION CREAR ESTUDIANTE
const crear = (name,nota1,nota2,nota3)=>{
	let estudiante = {
		nombre: name,
		matematicas: nota1,
		programacion: nota2,
		ingles: nota3
	};
	validacionArchivo();
	if (validacionEstudiante(name)== -1){
		listaEstudiantes.push(estudiante);
		guardar();
	}else{
		console.log('El estudiante que usted intenta registrar ya se encuentra en la base de datos');
	}
}

//IMPLEMENTACIÓN DE LA FUNCIÓN LEER ESTUDIANTES
const mostrar = ()=> {
	validacionArchivo();
	if (listaEstudiantes.length>0){
		console.log('\nLos estudiantes registrados actualmente en el sistema son:\n');
		for(var index in listaEstudiantes){
			let estudiante = listaEstudiantes[index];
			console.log('Nombre: '+estudiante.nombre);
			console.log('Nota de matematicas: '+estudiante.matematicas);
			console.log('Nota de programacion: '+estudiante.programacion);
			console.log('Nota de ingles: '+estudiante.ingles);
			console.log('----------------------------------------------');
		}
	}else{
		console.log('\nNo existen aún estudiantes registrados en el sistema');
	}
}

//IMPLEMENTACION DE LA FUNCIÓN PARA MOSTRAR UN ESTUDIANTE EN PARTICULAR
const mostrarEstudiante = name=> {
	validacionArchivo();
	let indiceEstudiante = validacionEstudiante(name);
	if(validacionEstudiante(name) != -1){
		let estudiante = listaEstudiantes[indiceEstudiante];
		console.log('Nota de matematicas: '+estudiante.matematicas);
		console.log('Nota de programacion: '+estudiante.programacion);
		console.log('Nota de ingles: '+estudiante.ingles);
		console.log('----------------------------------------------');
	}else{
		console.log('El estudiante '+name+' no se encuentra aún registrado en nuestro sistema.');
	}
}

//IMPLEMENTACIÓN DE LA FUNCIÓN QUE CALCULA UN PROMEDIO PARA DETERMINADO ESTUDIANTE
const calcularPromedio = name=> {
	validacionArchivo();
	let indiceEstudiante = validacionEstudiante(name);
	if(indiceEstudiante != -1){
		let estudiante = listaEstudiantes[indiceEstudiante];
		let promedio = (estudiante.matematicas+estudiante.programacion+estudiante.ingles)/3;
		return promedio;
	}else{
		console.log('No es posible calcular el promedio de '+name+' ya que no está registrado en nuestro sistema');
		return 0;
	}
}

//IMPLEMENTACIÓN DE LA FUNCIÓN QUE MUESTRA EL PROMEDIO CALCULADO PARA DETERMINADO ESTUDIANTE
const mostrarPromedio = name =>{
	let promedio = calcularPromedio(name);
	if (promedio !=0){
		console.log('El promedio de '+name+' es de: \n'+promedio);
	}
}

//IMPLEMENTACIÓN DE LA FUNCIÓN QUE MUESTRA EL NOMBRE DE LOS ESTUDIANTES QUE SUPERAN EL PROMEDIO
const promediosSuperiores = () =>{
	validacionArchivo();
	var estPromedio = listaEstudiantes.filter(function(element){return (calcularPromedio(element.nombre)>3)});
	estPromedio.forEach(element=>{console.log(element.nombre);});
}

//EXPORTACIÓN DE LAS FUNCIONES IMPLEMENTADAS
module.exports={
	crear,
	mostrar,
	mostrarEstudiante, 
	mostrarPromedio,
	promediosSuperiores
}