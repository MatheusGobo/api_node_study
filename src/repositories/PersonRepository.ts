import { AppDataSource } from '../database/AppDataSource';
import { Person } from '../entities/Person';

const personRepository = AppDataSource.getRepository(Person).extend({});

export { personRepository}