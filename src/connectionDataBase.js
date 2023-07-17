const mysql = require ("mysql")

const connetion = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "root123", // Aqui va la contraseña de TU USUARIO.
    database: "petscom", // Aqui va el nombre de TU BASE DE DATOS.
})

connetion.connect((error) => {
    if(error){
        console.error("Ha ocurrido un error y no nos hemos podido conectar con la base de datos, el error es el siguiente: " + error);
    } else {
        console.log("Todo ha salido bien, se estableció la conexion exitosamente.");
    }
})


// C = Cread = Crear.
let datos = {
    first_name : "Jose Luis",
    last_name : "Minota Yacue",
    phone : "1234568790",
    address : "xx xxx xx",
    account_number : 123000123,
    id_banco : 1
}

connetion.query('INSERT INTO paseador_mascota_user SET ?', datos, (error) =>{
    if(error) throw error
    console.log("Nuevo registro en la base de datos");
} )

// R = Read = Leer.
connetion.query('SELECT * FROM paseador_mascota_user', (error, results) =>{
    if(error) throw error
    console.log("Los registros de la tabla son: ");
    console.log(results);
} )

// U = Update = Actualizar.
let updateDatos = {
        first_name : "Maria Paula",
        last_name : "Torres",
        phone : "1234568790",
        address : "xx xxx xx",
        account_number : 123070123,
        id_banco : 1
    }
connetion.query('UPDATE paseador_mascota_user SET ? WHERE id = ?',[updateDatos, 1] ,(error, results) =>{
    if(error) throw error
    console.log("Los registros de la tabla son: ");
    console.log(results);
} )
// D = DELETE = ELIMINAR
connetion.query('DELETE FROM paseador_mascota_user WHERE id = ?', [1], (error, results) =>{
    if(error) throw error
    console.log("Registro eliminado");
} )

connetion.end()