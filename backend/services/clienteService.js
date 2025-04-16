const clienteModel = require("../models/clienteModel");

class ClienteService {

    // Obtener todos los clientes
    async getClientes() {
        return await clienteModel.getAllClientes();
    }

    // Obtener un cliente por DNI
    async getClienteByDni(dni) {
        return await clienteModel.getClienteByDni(dni);
    }

    // Agregar un nuevo cliente
    async addCliente(data) {
        return await clienteModel.createCliente(data);
    }

    // Modificar un cliente por DNI
    async modifyCliente(dni, data) {
        return await clienteModel.updateCliente(dni, data);
    }

    // Eliminar un cliente por DNI
    async removeCliente(dni) {
        await clienteModel.deleteCliente(dni);
    }
}

module.exports = new ClienteService();

