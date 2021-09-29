const VAT_SURVEY_STATE = (() => {
  const state = {
    CQ: 0,
    NQ: 1,
    PQ: [],
    PA: [],
    DNQ: []
  }

  const questions = [
    {
      id: -1,
      QC: 'You\'ve finished our survey we hope it helped you, if you have any issues regarding UK tax do not hesitate to <a href="https://bambridgeaccountants.com/contact-us" target="_blank" class="blog-link">contact us</a>.',
      NQ: [-1],
      PQ: state.PQ,
      PA: state.PA,
      DNQ: state.DNQ
    },
    {
      id: 1,
      QC: 'Has your VAT Taxable Turnover exceeded £85,000 over the last 12 months?',
      options: ['Yes', 'No'],
      NQ: [2],
      DNQ: [true, false],
      statement: 'If your VAT taxable turnover has exceeded £85,000 in the past 12 months you must register for VAT'
    },
    {
      id: 2,
      QC: 'Do you expect your VAT taxable turnover to exceed £85,000 in the next 30 days?',
      options: ['Yes', 'No'],
      NQ: [3],
      DNQ: [true, false],
      statement: 'If your VAT taxable turnover will exceed £85,000 in the next 30 days you must register for VAT'
    },
    {
      id: 3,
      QC: 'Do you or your business operate outside of the UK, and supply goods or services to the UK',
      options: ['Yes', 'No'],
      NQ: [4],
      DNQ: [true, false],
      statement: 'If you or your business operates outside of the UK, there is no VAT taxable turnover threshold i.e £85,000. Therefore you must register for VAT',
    },
    {
      id: 4,
      QC: 'Are you based in Northern Ireland, if so do you buy goods for more than £85,000 from EU VAT-registed suppliers to use in your business?',
      options: ['Yes', 'No'],
      NQ: [5],
      DNQ: [true, false],
      statement: 'If you are based in Northern Ireland, and buy goods for a value exceeding £85,000 for business use, you must register for VAT. This applies to those who only sell goods or services that are exempt from VAT.'
    },
    {
      id: 5,
      QC: 'Have you taken over a VAT registered business?',
      options: ['Yes', 'No'],
      NQ: [-1],
      DNQ: [true, false],
      statement: 'If yesm this is a sign that you <span class="fw-bold">may</span> have to register for VAT. Please check with the HMRC or consult a tax professional.'
    },
  ]

  return {
    getQuestions: () => {
      return questions
    },
    getState: () => {
      return state
    },
    updateCurrentQuestion: (CQ) => {
      state.CQ = CQ
    },
    updateNextQuestion: (NQ) => {
      state.NQ = NQ 
    },
    updatePreviousQuestion: (PQ, t, type) => {
      state.PQ.push(PQ)
    }, 
    removePreviousQuestion: (Q) => {
      state.PQ.pop()
      state.PA.pop()
    },
    updateDoesNotQualify: (q) => {
    
      state.DNQ.push({question: q.id, statement: q.statement})
    }
  }
})()