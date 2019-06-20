##### Estructura de PIM 
### _BASE DE DATOS_

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
1. Crear una carpeta para el proyecto 
    
    cd ~
    mkdir miProyectoDocker
    
2. Entrar a la carpeta

    cd miProyectoDocker

3. Crear un archivo dockerfile y agregar las instrucciones para construir

nano dockerfile

4. Copiar los archivos para construir la base de datos
5. Crear la imagen de docker con docker build
