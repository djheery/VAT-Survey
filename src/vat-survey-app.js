const VAT_SURVEY_APP = (() => {
  const state = VAT_SURVEY_STATE.getState()
  const questions = VAT_SURVEY_STATE.getQuestions()
  const ui = VAT_SURVEY_UI.getSelectors()
  const loadEventListeners = () => {
    ui.answerContainer.addEventListener('click', e => nextQuestion(e))
    ui.btnContainer.addEventListener('click', checkQuestion)
  }

  const checkQuestion = (e) => {
    if(e.target.classList.contains('prev-btn')) previousQuestion()
    if(e.target.classList.contains('start-survey-btn')) nextQuestion()
  }

  const nextQuestion = (e) => {
    VAT_SURVEY_UI.transitionOut()
    setTimeout(() => {
      const targetID = parseInt(ui.answerContainer.dataset.nextquestion)
      const nextQuestion = questions.find(q => q.id === targetID)
        if(e) {
          if(e.target.dataset.dnq !== 'false') {
            VAT_SURVEY_STATE.updateDoesNotQualify(questions.find(q => q.id === state.CQ)) 
          }
        }
      VAT_SURVEY_STATE.updateCurrentQuestion(nextQuestion.id)
      VAT_SURVEY_STATE.updateNextQuestion(nextQuestion.NQ[0])
      nextQuestion.id !== -1 ?
        VAT_SURVEY_UI.displayNextQuestion(nextQuestion) :
        VAT_SURVEY_UI.displayFinalVerdict(nextQuestion)
      VAT_SURVEY_UI.transitionIn()
    }, 800)
  }

  const previousQuestion = () => {

  }

  return {
    init: () => {
      loadEventListeners()
    }
  }
})(VAT_SURVEY_UI, VAT_SURVEY_STATE)

VAT_SURVEY_APP.init()