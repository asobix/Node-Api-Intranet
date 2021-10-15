const { Router } = require('express');
const indexControllers = require('../controllers/indexControllers')
const router = Router();


router.post('/obtenerCodDirectorio', indexControllers.obtenerCodDirectorio);
router.post('/crearActualizarDirectorio', indexControllers.crearActualizarDirectorio);
router.post('/mostrarDirectorio', indexControllers.mostrarDirectorio);
router.post('/eliminarDirectorio', indexControllers.eliminarDirectorio);
router.post('/crearActualizarDocumento', indexControllers.crearActualizarDocumento);
router.post('/eliminarDocumento', indexControllers.eliminarDocumento);
router.post('/mostrarDocumento', indexControllers.mostrarDocumento);
router.post('/crearActualizarImagen', indexControllers.crearActualizarImagen);
router.post('/eliminarImagen', indexControllers.eliminarImagen);
router.post('/mostrarImagen', indexControllers.mostrarImagen);
router.post('/crearActualizarUsuario', indexControllers.crearActualizarUsuario);
router.post('/autenticarUsuario', indexControllers.autenticarUsuario);

module.exports = router;