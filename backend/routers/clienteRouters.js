const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Obtener todos los clientes
router.get('/', (req, res) => clienteController.getClientes(req, res));

// Obtener un cliente por DNI
router.get('/:dni', (req, res) => clienteController.getClienteByDni(req, res));

// Crear un nuevo cliente
router.post('/', (req, res) => clienteController.createCliente(req, res));

// Actualizar un cliente por DNI
router.put('/:dni', (req, res) => clienteController.updateCliente(req, res));

// Eliminar un cliente por DNI
router.delete('/:dni', (req, res) => clienteController.deleteCliente(req, res));

module.exports = router;
