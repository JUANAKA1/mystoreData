'use strict';

const { ORDER_PROCUCT_TABLE, OrderProductSchema } = require('./../models/order-product.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORDER_PROCUCT_TABLE, OrderProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_PROCUCT_TABLE);
  }
};
