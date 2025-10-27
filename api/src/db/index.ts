import {drizzle} from 'drizzle-orm/node-postgres'
import {env} from '../env/index'
import * as schema from './schema/index'

export const db = drizzle(env.DATABASE_URL, {
  schema,
  casing: 'snake_case'
})