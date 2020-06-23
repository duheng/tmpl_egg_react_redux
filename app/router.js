'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller  } = app;
 // const { ssr } = middleware
  router.get('/(.*?)', controller.ssr.index);
};
