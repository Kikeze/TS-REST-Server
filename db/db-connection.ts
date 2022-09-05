import { Sequelize } from "sequelize";


const dataBase = new Sequelize("CursoNode", "sa", "Mexico321", {
    host: "KikezeMiniPC",
    dialect: "mssql",
    dialectOptions: {
        options: {
            instanceName: "SQL2019"
        }
    },
    // logging: false
});


export default dataBase;
