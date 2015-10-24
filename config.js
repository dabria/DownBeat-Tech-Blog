config = {
  production: {
    url: 'http://downbeatblog.com',
    
    database: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    }
  }
}