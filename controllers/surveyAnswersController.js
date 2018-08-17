var SurveyAnswer = require( '../models/surveyAnswer' )
var SurveyQuestionList = require( '../models/surveyQuestionList' )

exports.index/* (1) What is our action? */ = ( req, res, next ) => {

  let locals = { title: 'Survey Answers' }

   /* (1) What is the model name? */SurveyAnswer.find()
  .populate( 'surveyQuestionList' )
    SurveyAnswer.find()/* (1) Promise has been fullfilled */( ( surveyAnswers ) => {
    locals.answers = surveyAnswers

    /* (2) Render */res.render( 'SurveyAnswer/SurveyAnswers'/* (1) What are we rendering? */ )
  })
  .catch/* (1) An error needs to be caught */ /* (2) Catch the error and output it using the Express default */
  ('error', function (err) {
      next(err);
      
  }  );
}

exports.Survey/* (1) What is our action? */ = ( req, res, next/* (1) What 3 parameters are missing? */ ) => {
  let locals = { title: 'Survey' }

   /* (1) What is the model name? */SurveyAnswer.findById( req.params.id )
  .populate( 'surveyQuestionList' )
  SurveyAnswer.findById/* (1) Promise has been fullfilled */( ( surveyAnswer ) => {
    locals.answer =Survey /* (1) ? */

    /* (2) Render */res.render ('SurveyAnswer/Survey'/* (1) What are we rendering? */ )
  })
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )

  ('error', function (err) {
      next(err);
  });
}

exports.show/* (1) What is our action? */ =  ( /* (1) What 3 parameters are missing? */ req, res, next) => {
  let locals = { title: 'Answer Survey' }

  SurveyQuestionList.findById( req.params.surveyQuestionListID )
  SurveyAnswer.findById/* (1) Promise has been fullfilled */( ( surveyQuestionList ) => {
    locals.survey = show/* (1) ? */
    /* (2) Render */res.render('SurveyAnswer/show' /* (1) What are we rendering? */ )
  })
}

exports.create/* (1) What is our action? */ = ( req, res, next/* (1) What 3 parameters are missing? */ ) => {
   /* (1) What is the model name? */surveyAnswer.create({
    surveyQuestionList: req.body.surveyQuestionListID,
    participant: req.body.participant,
    answers: req.body.answers.map( ( ele ) => { return { answer: ele } } )
  })
  .then(function () {
      
  })/* (1) Promise has been fullfilled */( () => res.redirect( '/surveyAnswers' ) )
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )
  ('error', function (err) {
      next(err);
  });
}
