import styles from "./components/App.module.css";
import TotalQuestions from "./components/TotalQuestions";
import TotalPoints from "./components/TotalPoints";
import Header from "./components/header";
import Loading from "./components/Loading";
import { useEffect, useReducer,createContext } from "react";
import Totals from "./components/Totals";
import ProgressBar from "./components/ProgressBar";
import Error from "./components/Error";
import QuizArea from "./components/QuizArea";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import Button from "./components/Button";
import EndScreen from "./components/EndScreen";
import StartScreen from "./components/startScreen";

export const ProvideContext = createContext();

function App() {
    const initialState = {
        status : "start",
        index : 0,
        question : "",
        questions : [],
        points : 0,
        timer : 20,
        totalCorrectAnswers : 0 ,
        hasAnswered : true,
    };
    function reducer(state , action) {
        switch (action.type) {
            case "start" :
                return {...state};
            case "loading" :
                return {...state , status : "loading"};
            case "ready":
                return {...state, status : "ready", questions : action.payload , hasAnswered : false};
            case "error" :
                return {...state , status : "error",};
            case "nextQuestion":
                return {...state, index : state.index + 1 , timer : 20 , hasAnswered : state.hasAnswered = false};
            case "answering" : 
                return {...state, points : state.points + action.payload , hasAnswered : state.hasAnswered = true};
            case "time" : 
                return {...state, timer : state.timer - 1};
            case "end" : 
                return {...state , status : "end"}
            case "restart" : {
                return {...initialState , questions : state.questions , status : "loading"}
            }
            default : 
        }
    }

    const [{status , index , question , questions , points , timer , hasAnswered} , dispatch] = useReducer(reducer , initialState);
    // if (status === "loading") {
        
    // }
    useEffect(function() {
        async function fetchFunction() {
            try {
                // dispatch({type : "loading"})
                const fetchingData = await fetch("http://localhost:3000/questions");
                const data = await fetchingData.json();
                console.log(data);
                dispatch({type : "ready" , payload : data});
            }
            catch (err) {
                dispatch({type : "error"})
            }
        }
        if (status === "loading") fetchFunction()
    },[status])

    function nextBtn() {
        if (hasAnswered && index < 14) dispatch({type : "nextQuestion"});
        if (index === 14) dispatch({type : "end"});
    }
    
    return <main className = {styles.app}>
        <ProvideContext.Provider value = {{
        status,
        index,
        question,
        questions,
        points,
        dispatch,
        timer,
        hasAnswered,
        }}>
            {status === "start" && <StartScreen/>}
            {status === "loading" && <Loading/>}
            {status === "error" && <Error />}
            {status === "ready" && 
            <>
                <Header>
                    <Totals>
                        <TotalQuestions/>
                        <TotalPoints />
                    </Totals>
                    <ProgressBar/>
                </Header>
                <QuizArea question = {questions[index]}/>
                <Footer>
                    <Timer/>
                    <Button onClick = {nextBtn}>{index + 1 === 15 ? "Finish" : "Next"}</Button>
                </Footer>
            </>
            }
            {status === "end" && <EndScreen />}
        </ProvideContext.Provider>
    </main>
}
export default App;

// npm run server
// npm run dev