// PM2 ecosystem config — Pecahkan Telur (standalone, port 5282).
// nginx reverse-proxies telkomsel3.qlipmobile.com → 127.0.0.1:5282.

module.exports = {
  apps: [
    {
      name: 'tsel-egg',
      cwd: '/home/qlip/tsel-egg',
      script: 'server.mjs',
      interpreter: 'node',
      instances: 1,
      exec_mode: 'fork',

      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: '5282',
      },

      // Restart behavior
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 2000,
      max_memory_restart: '500M',

      // Logs
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: '/home/qlip/tsel-egg/logs/tsel-egg.err.log',
      out_file: '/home/qlip/tsel-egg/logs/tsel-egg.out.log',
      merge_logs: true,
      time: true,
    },
  ],
}
