config = {
  production: {
    url: 'http://downbeatblog.com',
    
    database: {
      client: 'postgres',
      connection: {
        host: 'ec2-107-21-219-142.compute-1.amazonaws.com',
        user: 'username',
        password: 'rridscvkqkiwig',
        database: 'd4eg5fdssfjeba',
        port: '5432'
      }
    },
    server: {
      host: '0.0.0.0',
      port: process.env
    }
  }
}