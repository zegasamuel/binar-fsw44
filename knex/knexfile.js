// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'pg',
        connection: {            
            host: '127.0.0',
            port: 5432,
            user: 'postgres',
            database: 'student',
        },
        pool: {
            min: 2,
            max: 100,
            acquireTimeoutMillis: 30000, // 30 seconds
            createTimeoutMillis: 30000, // 30 seconds
            idleTimeoutMillis: 30000, // 30 seconds
            reapIntervalMillis: 1000, // 1 second
            createRetryIntervalMillis: 2000, // 2 seconds
        },
        seeds: {
          directory: './seeds'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations'
        },
    },

    // staging: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // },

    // production: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // }
}
