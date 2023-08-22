# pruebaAJ
Hay que instalar las siguientes dependencias
"bcryptjs"
"body-parser"
"cors"
"express"
"jsonwebtoken"
"mongoose"
"nodemon"
para iniciar el programa se colocara "npm run start" se inicia con un script en el package.json tener nodemon antes, se dejo en devdependecies  (npm i -D nodemon  )
tener el servicio de mongo corriendo antes de iniciar el programa y crear y verificar la base de datos en este caso en el archivo properties.js linea 3 es la direccion de la base de datos "login" (mongodb://localhost:27017/login) que corre localmente y para verificar el envio de los metodos Post en Postman http://localhost:3000/login y http://localhost:3000/register
con el siguiente formato 
{
    "email":"prueba@gmail.com",
    "name":"juanca2",
    "password":"1234567"
}
para el login 
{
    "email":"prueba@gmail.com",
    "password":"1234567"
}
