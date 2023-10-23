module.exports = {
  apps: [
    {
      name: 'solar-server',
      script: './index.js',
      instances: 'max',
      exec_mode: 'cluster',
      env_dev: {
        NODE_ENV: 'dev',
        PORT: 4141,
      },
      env_prd: {
        NODE_ENV: 'prd',
        PORT: 4141,
      },
    },
  ],
};
