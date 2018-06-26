module.exports = {
    apps: [{
      name: 'weekend-challenge-5',
      script: './server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-219-244-117.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/portfolio.pem',
        ref: 'origin/aws',
        repo: 'git@github.com:roberttod/tutorial-pt-2.git',
        path: '/home/ubuntu/tutorial-2',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }