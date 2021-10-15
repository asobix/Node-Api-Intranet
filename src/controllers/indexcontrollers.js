const oracledb = require('oracledb');
const BD =require ('../dbconfig');

module.exports = {
    obtenerCodDirectorio: async (req, res) => {
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_obtener_cod_directorio(:cursor); END; ";
          const binds = {cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, false);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      crearActualizarDirectorio: async (req, res) => {

        const { p_codigo_directorio, p_descripcion, p_usuario, p_tipo_directorio, p_sub_directorio } = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_crear_actualizar_directorio(:p_codigo_directorio, :p_descripcion, :p_usuario, :p_tipo_directorio, :p_sub_directorio, :cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio, p_descripcion:p_descripcion, p_usuario:p_usuario, 
                         p_tipo_directorio:p_tipo_directorio, p_sub_directorio:p_sub_directorio,cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, true);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      mostrarDirectorio: async (req, res) => {

        

        const { p_tipo_directorio, p_sub_directorio } = req.body;
        // console.log(p_tipo_directorio + ',' +p_sub_directorio )

        // return;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_mostrar_directorio(:p_tipo_directorio, :p_sub_directorio, :cursor); END; ";
          const binds = {  p_tipo_directorio:p_tipo_directorio, p_sub_directorio:p_sub_directorio,
                          cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, false);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      eliminarDirectorio: async (req, res) => {

        const { p_codigo_directorio} = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_eliminar_directorio(:p_codigo_directorio,:cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio,cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, true);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      crearActualizarDocumento: async (req, res) => {

        const { p_codigo_directorio, p_nombre_documento,p_descripcion, p_documento, p_usuario, p_mine_type} = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_crear_actualizar_documento(:p_codigo_directorio,:p_nombre_documento, :p_descripcion,:p_documento, :p_usuario, :p_mine_type, :cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio,p_nombre_documento:p_nombre_documento, p_descripcion:p_descripcion,
                         p_documento: p_documento, p_usuario:p_usuario, p_mine_type:p_mine_type,   
                         cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, true);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      eliminarDocumento: async (req, res) => {

        const { p_codigo_directorio, p_nombre_documento} = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_eliminar_documento(:p_codigo_directorio, :p_nombre_documento, :cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio, p_nombre_documento:p_nombre_documento,
                        cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, true);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      mostrarDocumento: async (req, res) => {

        const { p_codigo_directorio} = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_mostrar_documento(:p_codigo_directorio, :cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio, cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, false);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      crearActualizarImagen: async (req, res) => {

        const { p_codigo_directorio, p_nombre_imagen,p_descripcion, p_imagen,p_usuario} = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_crear_actualizar_imagen(:p_codigo_directorio,:p_nombre_imagen, :p_descripcion,:p_imagen, :p_usuario, :cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio,p_nombre_imagen:p_nombre_imagen, p_descripcion:p_descripcion,
                         p_imagen: p_imagen, p_usuario:p_usuario,cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, true);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      eliminarImagen: async (req, res) => {

        const { p_codigo_directorio, p_nombre_imagen} = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_eliminar_imagen(:p_codigo_directorio, :p_nombre_imagen, :cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio, p_nombre_imagen:p_nombre_imagen,
                        cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, true);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      mostrarImagen: async (req, res) => {

        const { p_codigo_directorio} = req.body;
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_DIRECTORIO.sp_mostrar_imagen(:p_codigo_directorio, :cursor); END; ";
          const binds = {p_codigo_directorio:p_codigo_directorio, cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, false);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
    
    
          res.send(rows);
          // console.log(rows);
    
        } catch (error) {
          console.log(error)
        }
      },
      crearActualizarUsuario: async (req, res) => {

        const { p_codigo_usuario, p_cedula, p_nombre_usuario, p_email} = req.body;
        // console.log(p_codigo_usuario)
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_USUARIO.sp_crear_actualizar_usuario(:p_codigo_usuario, :p_cedula, :p_nombre_usuario, :p_email, :cursor); END; ";
          const binds = {p_codigo_usuario:p_codigo_usuario, p_cedula:p_cedula, p_nombre_usuario:p_nombre_usuario, p_email:p_email,
                         cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, true);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
          res.send(rows);
          // console.log(rows);    
        } catch (error) {
          console.log(error)
        }
      },
      autenticarUsuario: async (req, res) => {

        const { p_codigo_usuario} = req.body;
        
 
        try {
    
          const sql = "BEGIN INTRANET.PR_INTRANET_USUARIO.sp_autenticar_usuario(:p_codigo_usuario, :cursor); END; ";
          const binds = {p_codigo_usuario:p_codigo_usuario,cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR } };
          const result = await BD.Open(sql, binds, false);
    
          let row;
          let rows = [];
          while ((row = await result.outBinds.cursor.getRow())) {
            rows.push(row);
          }
          res.send(rows);
          // console.log(rows);    
        } catch (error) {
          console.log(error)
        }
      },
}