class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    getQuestion(){
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    } 
    
    shuffleQuestions(){
        for (let i= this.questions.length-1; i>0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
        return this.questions;
    }

    checkAnswer (answer){
        if (answer === this.questions[this.currentQuestionIndex].answer){
            this.correctAnswers++;
            return true;
        }
    }

    hasEnded(){
        if (this.currentQuestionIndex >= this.questions.length){
            return true;
        }
        else{
            return false;
        }
    }
    filterQuestionsByDifficulty(difficulty){
        if (typeof difficulty !== 'number'|| difficulty < 1 || difficulty > 3){
            return 
        }
        else{
            return this.questions= this.questions.filter(question => question.difficulty === difficulty);
        }
    }

    averageDifficulty(){
        const totalDifficlty= this.questions.reduce(function(acc, question){
            return acc + question.difficulty;
        },0)
        const averageDifficulty = totalDifficlty / this.questions.length;
        return averageDifficulty;
}

}