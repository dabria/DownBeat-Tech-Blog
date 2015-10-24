// ### Production
production: {
  url: 'http://downbeatblog.com',
  database: {
    client: 'postgres',
    connection: {
          host: 'c2-107-21-219-142.compute-1.amazonaws.com',
          user: 'johndown',
          password: '43Rw2GYzLyqkrO9QYs2fPFWgd3',
          database: 'd4eg5fdssfjeba',
          port: '5432'
    },
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT
  }
}