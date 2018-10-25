export const config = {
  port: process.env.PORT || 3030,

  jwt: {
    secretKey: 'secret',
    algorithm: 'HS256'
  },
  morgan: {
    type: 'combined'
  },
  cors: {
    origin: 'http://localhost:4200',
    credentials: true
  }
};