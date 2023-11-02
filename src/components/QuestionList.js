
import React, { useState , useEffect} from "react";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    // Make a GET request to the specified URL
    fetch('http://localhost:4000/questions')
    .then(response => response.json())  // Parse the JSON-formatted response
    .then(result => setQuestions(result))    // Set the data in the state
    .catch(error => console.error('Error:', error));  // Handle any errors
    }, []);

    console.log(questions)

    function handleAddQuestion(newQuestion) {
      setQuestions([...questions, newQuestion])
    }


    function handleDeleteQuestion(deletedQuestion) {
      const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
      setQuestions(updatedQuestions);
    }
    



  


  return (
    <section>
      <h1>Quiz Questions</h1>
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionItem key={questions.id} onDeleteItem={handleDeleteQuestion}/>
      <ul>{questions.map(question => (
<li key={question.id}>{question.prompt}</li>
))}</ul>
    </section>
  );
}

export default QuestionList;
