const mongoose = require('mongoose')
/* 
 * Retira a mensagem de advertencia pois agora 
 * o mongoose.Promise vai estar utilizando a Promise do próprio node
 */
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')
