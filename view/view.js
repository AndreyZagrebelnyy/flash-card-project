const inquirer = require('inquirer');

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
    if (choices.length > 1) {
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
      console.log('Красавчики(с) Макс');
      counter += 100;
    } else {
      console.log('Накажу(с) Игорь');
    }
    return counter;
  }
}
module.exports = View;
