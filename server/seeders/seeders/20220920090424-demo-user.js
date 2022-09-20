'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'John',
      email: 'admin@example.com',
      userRole: 1,
      password: 'Password@123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ann',
      email: 'editor@example.com',
      userRole: 1,
      password: 'Editor@123',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
