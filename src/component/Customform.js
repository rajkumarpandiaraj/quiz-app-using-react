import React,{useContext} from 'react';
import { globalData } from '../context/Globalcontext';


function Customform() {

    const {
        numOfQuestions,
        category,
        type,
        difficulty,
        numOfQuestionsChangeHandler,
        categoryChangeHandler,
        typeChangeHandler,
        difficultyChangeHandler,
        startQuizHandler
    } = useContext(globalData);

    return (
        <form className='custom-form'>
            <div className='form-group'>
                <label htmlFor='number'>Number of Questions</label>
                <input type='number' id='number' name='numOfQuestions' value={numOfQuestions} onChange={numOfQuestionsChangeHandler}/>
            </div>
            <div className='form-group'>
                <label htmlFor='category'>Select Category</label>
                <select id='category' name='category' value={category} onChange={categoryChangeHandler}>
                    <option value=''>Any category</option>
                    <option value='9'>General Knowledge</option>
                    <option value='10'>Entertainment : Books</option>
                    <option value='11'>Entertainment : Film</option>
                    <option value='12'>Entertainment : Music</option>
                    <option value='13'>Entertainment : Musicals & Theatre</option>
                    <option value='14'>Entertainment : Television</option>
                    <option value='15'>Entertainment : Video Games</option>
                    <option value='16'>Entertainment : Board Games</option>
                    <option value='17'>Science & Nature </option>
                    <option value='18'>Science : Computers</option>
                    <option value='19'>Science : Mathematics</option>
                    <option value='20'>Mythology</option>
                    <option value='21'>Sports</option>
                    <option value='22'>Geography</option>
                    <option value='23'>History</option>
                    <option value='24'>Politics</option>
                    <option value='25'>Art</option>
                    <option value='26'>Celebrities</option>
                    <option value='27'>Animals</option>
                    <option value='28'>vehicles</option>
                    <option value='29'>Entertainment : Comics</option>
                    <option value='30'>Science : Gagets</option>
                    <option value='31'>Entertainment : Japanese Anime andManga</option>
                    <option value='32'>Entertainment : Cartoon & Animation</option>
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='difficulty'>Select Difficulty</label>
                <select id='difficulty' name='difficulty' value={difficulty} onChange={difficultyChangeHandler}>
                    <option value=''>Any Difficulty</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='type'>Select Type</label>
                <select id='type' name='type' value={type} onChange={typeChangeHandler}>
                    <option value=''>Any Type</option>
                    <option value='multiple'>Multiple Choice</option>
                    <option value='boolean'>True / false</option>
                </select>
            </div>
            <button className='btn' type='submit' onClick={startQuizHandler}>Start</button>
        </form>
    )
}

export default Customform
