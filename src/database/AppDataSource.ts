import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
   type: 'mongodb',
   database: process.env.DB_NAME,   
   synchronize: true,
   entities: ['./src/entities/*.ts'],
   useUnifiedTopology: true,
   host: process.env.DB_HOST,
   port: Number(process.env.DB_PORT),
});

export { AppDataSource }