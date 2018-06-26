module.exports = {
    apps: [{
      name: 'weekend-challenge-5',
      script: './server.js'
    }],
    deploy: {
      production: {
        user: 'pftiller',
        host: 'ec2-18-219-244-117.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/portfolio.pem',
        ref: 'origin/aws',
        repo: 'git@github.com:pftiller/weekend-challenge-5.git',
        path: '~/weekend-challenge-5',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }