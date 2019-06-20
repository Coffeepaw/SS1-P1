# _BASE DE DATOS_

# sql-scripts 
Contiene los archivos que son utilizados para crear una base de datos al crear una base de datos

_SS1-P1/BDP1/sql-scripts/_

- DDL
Ejemplo de como creamos una tabla alumno en la base de datos
```
CREATE TABLE Alumno (
carnet int,
dpi bigint,
nombre varchar(25),
apellido  varchar(25),
email  varchar(50),
telefono varchar(8)
);
```

- DML


# DockeFile
Contiene como se debe crear una base de datos y lo necesario para poder ejecutar un contenedor con una base datos

### Contruir container

docker build -t [nombre de la base de datos] [dockerfile].

**entrar al container **

docker exec -it [nombre de la base de datos] bash

# Pasos a seguir
1. Crear una carpeta para el proyecto 
    
    cd ~
    mkdir miProyectoDocker
    
2. Entrar a la carpeta

    cd miProyectoDocker

3. Crear un archivo dockerfile y agregar las instrucciones para construir

    nano dockerfile

4. Copiar los archivos para construir la base de datos
5. Crear la imagen de docker con docker build

