module.exports = {
  apps: [{
    name: 'farmland-backend',
    script: 'backend/server.ts',
    interpreter: 'node',
    interpreter_args: '--import tsx',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
    },
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }]
};
