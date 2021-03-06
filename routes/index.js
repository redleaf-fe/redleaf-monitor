module.exports = (router) => {
  router.use('/login', require('./login'));
  router.use('/group', require('./group'));
  router.use('/app', require('./app'));
  router.use('/publish', require('./publish'));
  router.use('/log', require('./log'));
  router.use('/user', require('./user'));
};
