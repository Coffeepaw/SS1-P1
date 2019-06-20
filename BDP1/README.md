#BASE DE DATOS

sql-scripts 
Contiene los archivos que son utilizados para crear una base de datos al crear una base de datos

DockeFile
Contiene como se debe crear una base de datos

DockeFile
Contiene lo necesario para poder ejecutar un contenedor con una base datos

Contiene lo necesario para poder ejecutar un contenedor con una base datos

contruir container

docker build -t [nombre de la base de datos] [dockerfile]
docker build -t my-mysql /home/luigitercero/carpeta/
docker build -t my-mysql .

**entrar al container **

docker exec -it [nombre de la base de datos] bash

Pasos a seguir

    crear una carpeta para el proyecto

cd ~
mkdir miProyectoDocker

    entrar a la carpeta

cd miProyectoDocker

    crear un archivo dockerfile y agregar las instrucciones para construir

nano dockerfile

    copiar los archivos para construir la base de datos
    crear la imagen de docker con docker build
