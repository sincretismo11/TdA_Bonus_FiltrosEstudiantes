# BONUS | Archivo de estudiantes

Archivo manejado en la clase sobre el CRUD. Implementa las funciones de crear una entrada en el archivo de estudiantes, mostrar el archivo de estudiantes, mostrar la información de un estudiante particular de acuerdo a su nombre, mostrar el promedio de un estudiante en particular de acuerdo a su nombre y mostrar todos los estudiantes que completaron un promedio mayor a 3

## Instalacion

Basta con descargar el release del proyecto. Éste ya incluye la modificación requerida.

## Ejecución

1. Para crear un estudiante:
>**node index.js crear -n** *nombre del estudiante* **-m** *nota de matematicas* **-p** *nota de programación* **-i** *nota de inglés*

2. Para mostrar el listado completo de estudiantes registrados:
>**node index.js mostrar**

3. Para mostrar la información de un estudiante basado en su nombre:
>**node index.js mostrarEstudiante -n** *nombre del estudiante*

4. Para mostrar el promedio de un estudiante en particular:
>**node index.js mostrarPromedio -n** *nombre del estudiante*

5. Para mostrar la lista de los estudiantes aprobados con un promedio superior a 3:
>**node index.js listarAprobados**

## Contacto
**Jonathan Peña R.**

jopenara@unal.edu.co