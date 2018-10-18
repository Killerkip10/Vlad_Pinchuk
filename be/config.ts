export const config = {
  port: process.env.PORT || 3030,

  jwt: {
    secretKey: 'secret',
    algorithm: 'HS256'
  }
};