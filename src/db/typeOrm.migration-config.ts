import { DataSource, DataSourceOptions } from "typeorm";
import { StudentEntity } from "./entities/student.entity";

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [StudentEntity],
    migrations: [__dirname + "/migrations/*.ts"],
    synchronize: false,
}

export default new DataSource(dataSourceOptions);