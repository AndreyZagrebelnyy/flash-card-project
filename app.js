const Model = require('./model/model');
const Controller = require('./controller/controller');
const View = require('./view/view');
// const chalk = require('chalk');

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.runQuiz()