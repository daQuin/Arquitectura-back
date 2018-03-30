/**
 * Mensaje.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    texto: 'string',
    destinatario: {
      model: 'usuario',
      unique: false
    },
    remitente: {
      model: 'usuario',
      unique: false
    }

  }
};
