// (3) Include the model
var SurveyQuestionList = require( '../models/surveyQuestionList' )

var SurveyAnswer = require( '../models/surveyAnswer' )

exports.index/* (1) What is our action? */ = (req, res, next /* (1) What 3 parameters are missing? */ ) => {
  let locals = { title: 'Surveys' }

  /* (1) What is the model name? */surveyQuestionList.find()
    SurveyQuestionList.find()/* (1) Promise has been fullfilled */( ( surveyQuestionLists ) => {
    locals.surveys = index/* (1) ? */

    /* (2) Render */res.render( 'SurveyQuestionList/index', /* (1) What are including? */ )
  })
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )
  ('error', function (err) {
      next(err);

  }  );
}

exports.show/* (1) What is our action? */ = ( res, req, next/* (1) What 3 parameters are missing? */ ) => {
  let locals = { title: 'Survey' }

  /* (1) What is the model name? */surveyQuestionList.findById( req.params.id )
  SurveyQuestionList.findById/* (1) Promise has been fullfilled */( ( surveyQuestionList ) => {
    locals.survey = show/* (1) ? */

    /* (2) Render */res.render( 'SurveyQuestionList/show', /* (1) What are including? */ )
  })
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )
  ('error', function (err) {
      next(err);

  }  );
}

exports.new/* (1) What is our action? */ = (req, res, next /* (1) What 3 parameters are missing? */ ) => {
  let locals = { title: 'new' }

  /* (2) Render */res.render( 'SurveyQuestionList/NewSurvey', /* (1) What are including? */ )
}

exports.Edit/* (1) What is our action? */ = ( /* (1) What 3 parameters are missing? */ ) => {
  let locals = { title: 'Edit Survey' }

  /* (1) What is the model name? */surveyQuestionList.findById( req.params.id )
  SurveyQuestionList.findById/* (1) Promise has been fullfilled */( ( surveyQuestionList ) => {
    locals.survey = Edit/* (1) ? */

    /* (2) Render */res.render( 'SurveyQuestionList/Edit', /* (1) What are including? */ )
  })
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )
  ('error', function (err) {
      next(err);

  }  );
}

exports.create/* (1) What is our action? */ = (res, req, next /* (1) What 3 parameters are missing? */ ) => {
  console.log( req.body )
  /* (1) What is the model name? */surveyQuestionList.create({
    /* (3) Save title */title: req.body.title,
    /* (3) Save surveyor */surveyor: req.body.surveyor,
    questions: req.body.questions.map( ( ele ) => { return { question: ele } } )
  })
  .then(function () {
      
  })/* (1) Promise has been fullfilled */( () => res.redirect( '/surveyQuestionList'/* (1) Redirect back to the survey list */ ) )
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )

  ('error', function (err) {
      next(err);

  }  );
}

exports.Update/* (1) What is our action? */ = ( res, req, next /* (1) What 3 parameters are missing? */ ) => {
  console.log(req.body)
  /* (1) What is the model name? */surveyQuestionList.findById( req.params.id )
  SurveyQuestionList.findById/* (1) Promise has been fullfilled */( ( surveyQuestionList ) => {
      locals.survey = Update/*
      (6) We want our validation to be called, so we can't use update.
      Because of this, we need to reassign the fields/attributes/properties
      of our surveyQuestionList.
      Save 'title', 'surveyor', and the 'questions'.
      HINT: 'questions' will require mapping
      ...I've done this already in this file once...
     */
      surveyQuestionList.Update({
          title: req.body.title,
        surveyor: req.body.surveyor,
          questions: req.body.questions.map( ( ele ) => { return { question: ele } } )
      })
      

    surveyQuestionList.save()
   .then(function () {
       
   })/* (1) Promise has been fullfilled */( () => res.redirect( '/surveyQuestionList'/* (3) Redirect back to this survey */ ) )
    .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )
    ('error', function (err) {
        next(err);

    }  );
  })
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )
  ('error', function (err) {
      next(err);

  }  );
}

exports.Delete/* (1) What is our action? */ = ( /* (1) What 3 parameters are missing? */ ) => {
  /* (1) What is the model name? */surveyQuestionList.remove( { _id: req.params.id } )
  .then(function () {

  })/* (1) Promise has been fullfilled */( () => res.redirect('/surveyQuestionList' /* (1) Redirect back to the survey list */ ) )
  .catch/* (1) An error needs to be caught */( /* (2) Catch the error and output it using the Express default */ )

  ('error', function (err) {
      next(err);

  }  );
}
