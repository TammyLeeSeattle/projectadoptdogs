/* AIM OF THIS FILE:

    - Set up the "user survey" quiz page that will EVENTUALLY render components conditionally
    - for MVP, only base components are created and all will be shown on this page

*/

// DEPENDENCIES
import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import Question from '../components/userSurveyComponent/Question';
import quizQuestions from '../api/quizQuestions';
import Quiz from '../components/userSurveyComponent/Quiz'
import Result from '../components/userSurveyComponent/Result'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import axios from "axios";



class UserSurvey extends Component {
	constructor(props) {
    super(props);

		this.state = {
			counter: 0,
			questionId: 1,
			question: '',
			answerOptions: [],
			answer: '',
			answersCount: {},
      result: '',
      redirect: false
    };
    
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.redirectToDogList = this.redirectToDogList.bind(this);
  }
  
  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
  
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    this.setState({ result: result[0] });
  }

  //sendResults (result) {
  //  axios.post("/api/dogrecommendations", {
  //    chosenBreeds: result.split(", ").join(","),
  //  })
  //  .then(function(res) {
  //    console.log(res);
  //  })
  //  .catch(function(err) {
  //    console.log(err)
  //  });
  //}

  redirectToDogList(){
    let queryString = "chosenBreeds=" + this.state.result;

    window.location.href = `/doglist?${queryString}`; 
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  renderResult() {
    return (
      
      <div>
        <Result quizResult={this.state.result} />
        <Button variant="contained" color="primary" onClick={this.redirectToDogList}>
				Search For Adoptable Dogs
				<Icon >search</Icon>
			</Button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default UserSurvey;
