module.exports = {
  apps: [
    {
      name: "john-v-martine",
      // Use Next's start binary so the PM2-managed process runs production Next
      script: "./node_modules/next/dist/bin/next",
      args: "start -p 3002",
      cwd: "/var/www/john-v-martine",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3002
      },
      // Keep logs handled by PM2 (default paths). Remove extra/unsafe entries.
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      max_memory_restart: "1G",
      watch: false,
      ignore_watch: ["node_modules", ".next"]
    }
  ]
};