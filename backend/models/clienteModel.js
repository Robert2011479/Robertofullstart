const db = require('../config/db');

class ClienteModel {

    // Obtener todos los clientes
    async getAllClientes() {
        const result = await db.query('SELECT * FROM clientes');
        return result.rows;
    }

    // Obtener un cliente por su DNI
    async getClienteByDni(dni) {
        const result = await db.query('SELECT * FROM clientes WHERE dni = $1', [dni]);
        return result.rows[0];
    }

    // Crear un nuevo cliente
    async createCliente({ dni, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento }) {
        const result = await db.query(
            `INSERT INTO clientes (dni, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [dni, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento]
        );
        return result.rows[0];
    }

    // Actualizar cliente por DNI
    async updateCliente(dni, { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento }) {
        const result = await db.query(
            `UPDATE clientes 
             SET nombre = $1, apellidoPaterno = $2, apellidoMaterno = $3, fechaNacimiento = $4
             WHERE dni = $5 RETURNING *`,
            [nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, dni]
        );
        return result.rows[0];
    }

    // Eliminar cliente por DNI
    async deleteCliente(dni) {
        await db.query('DELETE FROM clientes WHERE dni = $1', [dni]);
    }
}

module.exports = new ClienteModel();