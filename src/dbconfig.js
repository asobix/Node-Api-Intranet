const oracledb = require('oracledb');
const config = {
    user: 'INTRANET',
    password: 'temporal.',
    connectString:"10.119.0.25:1521/DESAWEB"
};


async function Open(sql, binds, autoCommit){
    try{
        conn = await oracledb.getConnection(config);

        let result = await conn.execute(sql,binds,{autoCommit, outFormat: oracledb.OBJECT});

    console.log("DB conectada");
    return result;
    } catch (error){
        console.log("error Conectando a Base de datos"+error)
    }
};

exports.Open = Open;