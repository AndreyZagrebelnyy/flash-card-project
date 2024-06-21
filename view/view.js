const inquirer = require('inquirer');
// const chalk = require('chalk');



class View {
  async startQuiz() {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'category',
        message: 'Что выбираем?',
        choices: ['Эльбрус движ', 'Они правда это сказали?', 'Киберпанк или реальность',],
      },
    ]);
  }

  async pullQuestions({ question, answer, choices }, counter) {
    let userAnswer;
    if (choices.length > 0) {
      userAnswer = await inquirer.prompt([
        {
          type: 'list',
          name: 'userAnswer',
          message: question,
          choices,
        },
      ]);
    } else {
      userAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'userAnswer',
          message: question,
        },
      ]);
    }
    if (userAnswer.userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
      // console.log(chalk.green('Красавчики! (с) Макс\n'));
		console.log("\x1b[32m", 'Красавчики! (с) Макс\n');
      counter += 100;
    } else {

      // console.log(chalk.red('Накажу! (с) Игорь\n'));
		console.log("\x1b[31m", 'Накажу! (с) Игорь\n');
    }
    return counter;
  }
}
module.exports = View;
