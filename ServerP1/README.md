# Server Node js
Proyecto realizado con docker para el curso seminario de Sistemas, archivos pertenecientes para la creacion 
de un container con node js.


### Pre-requisitos 📋
Tener instalado Docker.
Si no podemos instalarlo de esta forma.
Actualizar los paquetes.
```
sudo apt-get update
```
Ahora vamos a instalar Docker. Agregue la clave GPG para el repositorio oficial de Docker al sistema:
```
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```
Agregue el repositorio Docker a fuentes APT:
```
sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
```
Actualizar los paquetes.
```
sudo apt-get update
```
Asegúrese de que está a punto de instalar desde el repositorio de Docker en lugar del repositorio predeterminado.
```
apt-cache policy docker-engine
```
Por ultimo, instalar Docker:
```
sudo apt-get install -y docker-engine
```

## Comenzando 🚀

1. Para poder comenzar debemos construir un contenedor para el area de  trabajo.
2. Creamos el ambiente de desarrollo para docker con node js
Este comando baja del repositorio de docker las herramientas necesarias para ejecutar node js
```
docker pull node js
```
3. Para un mejor manejo de archivos entre el contenedor y la computadora local, podemos hacer una carpeta compartida.
Example.
```
docker run -it -v /home/andree/ServerP1:/server --name server-node -p 3001:3001 node bash
```
* **-it** Agrega un script de consola al iniciar el contenedor
* **-v** Crea una carpeta compartida
* **-name** Asigna una nombre al contenedor
* **-p** Mapea el puerto
