class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async runQuiz() {
    let counter = 0;
    const userCategory = await this.view.startQuiz();

    console.log(`Вы выбрали категорию "${userCategory.category}"`);
    let arrOfQuestions;

    if (userCategory.category === "Киберпанк или реальность") {
      arrOfQuestions = await this.model.getQuestionsAndAnswers("kiberpank.txt");
    }
    if (userCategory.category === "Они правда это сказали?") {
      arrOfQuestions = await this.model.getQuestionsAndAnswers("IsntReally.txt");
    }
    if (userCategory.category === "Эльбрус движ") {
      arrOfQuestions = await this.model.getQuestionsAndAnswers("funElbrus.txt");
    }
    for (const question of arrOfQuestions) {
      counter = await this.view.pullQuestions(question, counter);
    }
    console.log(
      `Поздравляем! Ты выиграл ${counter} очков в категории: ${userCategory.category}`
    );
  }
}

module.exports = Controller;
