class Controller {
  constructor(model, view) {}

  async getStartedQuiz() {
    let counter = 0;
    const userCategory = await this.view.startQuiz();

    console.log(Вы выбрали категорию "${userCategory.category}");
    
  }
}
