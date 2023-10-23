yarn --production --frozen-lockfile

pm2 start ecosystem.config.js --env prd
