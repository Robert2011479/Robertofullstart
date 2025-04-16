const clienteService = require('../services/clienteService');

class ClienteController {
    // Obtener todos los clientes
    async getClientes(req, res) {
        try {
            const clientes = await clienteService.getClientes();
            res.json(clientes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los clientes' });
        }
    }

    // Obtener un cliente por DNI
    async getClienteByDni(req, res) {
        const { dni } = req.params;
        try {
            const cliente = await clienteService.getClienteByDni(dni);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }
            res.json(cliente);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el cliente' });
        }
    }

    // Crear un nuevo cliente
    async createCliente(req, res) {
        try {
            // Usar snake_case para alinearse con la BD
            const { dni, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento } = req.body;
    
            const nuevoCliente = await clienteService.addCliente({
                dni,
                nombre,
                apellidoPaterno, // ¡Ahora coincide con la BD!
                apellidoMaterno,
                fechaNacimiento
            });
    
            res.status(201).json(nuevoCliente);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el cliente' });
        }
    }

    // Actualizar cliente por DNI
    async updateCliente(req, res) {
        try {
            const { dni } = req.params;
            const { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento } = req.body;
            const clienteActualizado = await clienteService.modifyCliente(dni, {
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                fechaNacimiento
            });
            res.json(clienteActualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el cliente' });
        }
    }

    // Eliminar cliente por DNI
    async deleteCliente(req, res) {
        try {
            const { dni } = req.params;
            await clienteService.removeCliente(dni);
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el cliente' });
        }
    }
}

module.exports = new ClienteController();
