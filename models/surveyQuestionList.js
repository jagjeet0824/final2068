const mongoose = require( 'mongoose' )

const QuestionSchema = new mongoose.Schema({
  /*
    (4) Add a field called 'question' that collects a string and is required
  */ question: {
        type:String,
        required: 'question is required'
    }
})

const SurveyQuestionListSchema = new mongoose.Schema({
  /*
    (4) Add a field called 'title' that collects a string and is required
  */title: {
            type:String,
            required: 'title is required'
        },
  /*
    (4) Add a field called 'surveyor' that collects a string and is required
  */surveyor: {
        type:String,
        required: 'surveyor is required'
    },
  /*
    (4) Add a field called 'questions' that collects an array of QuestionSchema
  */questions: {
        type:Array,
        required: 'questions is required'
    }
})

// (4) export the model
module.exports = mongoose.model('surveyQuestionList', QuestionSchem);