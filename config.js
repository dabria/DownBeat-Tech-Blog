// ### Production
config = {
  production: {
    url: 'http://downbeatblog.com',
    database: {
      client: 'pg',
      connection: {
            host: url.parse(process.env.DATABASE_URL).host,
            user: url.parse(process.env.DATABASE_URL).auth.split(':')[0],
            password: url.parse(process.env.DATABASE_URL).auth.split(':')[1],
            database: url.parse(process.env.DATABASE_URL).path.replace('/', ''),
            port: url.parse(process.env.DATABASE_URL).port
      },
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    }
  }
}