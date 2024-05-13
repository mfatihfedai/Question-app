import { useState } from 'react'
import './App.css'
import Questions from "./Questions.jsx";
import questionData from "./questions.js";
import videobackground from "../pictures/video-background.mp4";

function App() {
  const [testStart, setTestStart] = useState(true);


  function startQuiz() {
    setTestStart(false);
  }
  
  return(
    <>
        <video autoPlay muted loop id="myVideo">
            <source src = {videobackground} type="video/mp4" />
        </video>
      <div>
        {testStart ? (
          /* Question Information Area */
          <div>
            <h1>Welcome to the Test!</h1>
            <p>
                Welcome to this fun test! Here, you can test your knowledge on various subjects by answering interesting and engaging questions. Be prepared to be challenged by each question! 
                Every question have <b>30 second</b>. You <u>can't see</u> options in <b>first 10 seconds</b>.  
            </p>
            <button onClick={startQuiz} id='start'>Start Test</button>
          </div>
        ) : (
        /* Questions Area */
        <div className='question-area'>
          
          <Questions questions={questionData} />
        </div> 
        )}
      </div>
    </>
  )
}

export default App
