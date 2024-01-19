import './App.css'
import {useState, useEffect} from "react";


const QuizList  = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/api/quizzes');
                if (response.ok) {
                    const jsonData = await response.json();
                    setQuizzes(jsonData._embedded.quizzes);
                } else {
                    console.error('Failed to fetch');
                }
            } catch (error) {
                console.error('Failed during fetch', error);
            }
        };

        fetchData();
    },[]);

    return (
        <div>
            <h1>Quiz List</h1>
            <ul>
                {quizzes.map((quiz) => (
                    <li>
                        <strong>{quiz.question}</strong> - {quiz._links.self.href}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizList;