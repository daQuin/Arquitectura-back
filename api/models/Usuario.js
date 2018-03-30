/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    usuario: 'string',
    mensajesBy: {
      collection: 'mensaje',
      via: 'remitente'
    },
    mensajesTo: {
      collection: 'mensaje',
      via: 'destinatario'
    }

  }
};
