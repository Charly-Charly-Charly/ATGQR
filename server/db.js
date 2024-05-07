import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: '82.180.174.103',
    port: 3306,
    user: 'u309496707_ATGadmin',
    password: '0d@ZCkkiSM',
    database: 'u309496707_ATG'
})


