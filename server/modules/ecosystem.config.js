module.exports = {
  apps : [
    {
      name      : 'weekend-challenge-5',
      script    : '../server/server.js'
    }],
  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-18-219-244-117.us-east-2.compute.amazonaws.com',
      ref  : 'origin/aws',
      repo : 'git@github.com:pftiller/weekend-challenge-5.git',
      path: '/home/ubuntu/weekend-challenge-5',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
