import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css'
import {Answerslist} from "./components/index.js"

export default class App extends React.Component {
   constructor(props){
     super(props)
     this.state = {
          answers: [],
          chats: [],
          currentId: "init",
          dateset: defaultDataset,
          open: false
     }
   }

   initAnswer = () => {
     const initDataset = this.state.dateset[this.state.currentId]
     const initAnswers = initDataset.answers

     this.setState(  {
       answers: initAnswers
     })
   }

   componentDidMount() {
     this.initAnswer()
   }

    render(){
      return (
        <section className="c-section">
          <div className="c-box">
            <Answerslist answers = {this.state.answers}/>
          </div>
        </section>
      );
    }
}

