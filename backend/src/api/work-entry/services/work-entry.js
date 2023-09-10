'use strict';

/**
 * work-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-entry.work-entry');
