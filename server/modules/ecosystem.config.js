module.exports = {
  apps : [
    {
      name      : 'weekend-challenge-5',
      script    : '../server.js'
    }],
  deploy : {
    production : {
      user : ' ubuntu',
      host : 'ec2-13-59-238-152.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/portfolio.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:pftiller/weekend-challenge-5.git',
      path: '/home/ubuntu/weekend-challenge-5',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
