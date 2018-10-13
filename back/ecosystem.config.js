const { port } = require('./settings');
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // API Server
    {
      name: 'wildhub-api-server',
      script: 'server.js',
      env: {
        PORT: port,
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: port
      }
    }
  ]
}
