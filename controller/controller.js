class Controller {
  constructor(model, view) {}

  async getStartedQuiz() {
    let counter = 0;
    const userCategory = await this.view.startQuiz();

    console.log(Вы выбрали категорию "${userCategory.category}");
    let arrOfQuestions

    if(userCategory.category === "111111"){    //! _______----------Wait data
        arrOfQuestions = await this.model.getQuestionsAndAnswers("111.txt"); //!----------Wait data

    } 
    if(userCategory.category === "222"){    //! _______----------Wait data
        arrOfQuestions = await this.model.getQuestionsAndAnswers("222.txt"); //!----------Wait data
    }
    if(userCategory.category === "333"){    //! _______----------Wait data
        arrOfQuestions = await this.model.getQuestionsAndAnswers("333.txt"); //!----------Wait data
    }
    for (const question of arrOfQuestions) {
        counter = await this.view.pullQuestions(question, counter);
      }
    console.log(`Поздравляем! Ты выиграл ${counter} очков в категории: ${userCategory.category}`) 
  }
}
