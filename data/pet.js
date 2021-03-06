'use strict';
const Mockgen = require('./mockgen.js');
const InMemoryDB = require('../lib/inmemorydb');
const PetModel = require('../lib/models/pet');
/**
 * Operations on /pet
 */
module.exports = {
    /**
     * summary: Add a new pet to the store
     * description:
     * parameters: body
     * produces: application/xml, application/json
     * responses: 200, 405
     * operationId: addPet
     */
    post: {
        200: function (req, res, callback) {

            let pet = req.body;
            if (pet) {
                pet = new PetModel(pet);
                pet.id = Math.floor(Math.random() * 10000);
                pet.status = 'available';
                pet = InMemoryDB.insertPet(pet);
                if (pet) {
                    pet = new PetModel(pet);
                }
            } else {
                pet = {};
            }
            callback(null, {
                responses: pet
            });
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'post',
                response: '405'
            }, callback);
        }
    },
    /**
     * summary: Update an existing pet
     * description:
     * parameters: body
     * produces: application/xml, application/json
     * responses: 200, 400, 404, 405
     * operationId: updatePet
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'put',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'put',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'put',
                response: '404'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'put',
                response: '405'
            }, callback);
        }
    }
};
