import React,{createContext, useState} from 'react';
import axios from 'axios'

export const globalData = createContext();

export function Globalcontext({children}) {
    const [numOfQuestions, setNumOfQuestion] = useState(10);
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] = useState('');

    const numOfQuestionsChangeHandler = (e) =>{
        setNumOfQuestion(e.target.value);
    }
    
    const categoryChangeHandler = (e) =>{
        setCategory(e.target.value);
    }
    const difficultyChangeHandler = (e) =>{
        setDifficulty(e.target.value);
    }
    const typeChangeHandler = (e) =>{
        setType(e.target.value);
    }

    const startQuizHandler = (e) =>{
        e.preventDefault();
        axios.get(`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${+category}&difficulty=${difficulty}&type=${type}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <globalData.Provider value={{
                numOfQuestions,
                category,
                type,
                difficulty,
                numOfQuestionsChangeHandler,
                categoryChangeHandler,
                typeChangeHandler,
                difficultyChangeHandler,
                startQuizHandler,
            }}>
                {children}
            </globalData.Provider>
        </div>
    )
}

export default Globalcontext
