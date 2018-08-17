const mongoose = require( 'mongoose' )
var Schema = mongoose.Schema

const AnswerSchema = new mongoose.Schema({
  /*
    (4) Add a field called 'answer' that collects a string and is required
  */
    answer: {
        type:String,
        required: 'answer is required'
    }
})

const SurveyAnswerSchema = new mongoose.Schema({
  surveyQuestionList: { type: Schema.Types.ObjectId, ref: 'SurveyQuestionList' },
  /*
    (4) Add a field called 'participant' that collects a string and is required
  */participant : {
        type:String,
        required: 'participant is required'
    },
  /*
    (4) Add a field called 'answers' that collects an array of AnswerSchema
  */answer : {
        type:Array,
        required: 'answers is required'
    }
})

// (4) export the model
module.exports = mongoose.model('surveyAnswer', AnswerSchema);