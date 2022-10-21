
import Home from "./pages/Home";
import CreateChallenge from "./pages/CreateChallenge";
import "./global.css"
import { useReducer} from "react";
import LocalStorageContext from "./context/LocalStorage";
// define init function to get from local storage,this what we wnat tok display first time of their componetnt
const init = (item) => {
  const challenges = JSON.parse(localStorage.getItem('challenges'))
  if (challenges) {
    return challenges
  } else {
    localStorage.setItem('challenges', JSON.stringify(new Array()))
    return []
  }
}
// define reducer function to change and modify the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'addstatus':
      let updatedStatus=state.map((item)=>{
        item['status']=action.payload.status
        return item
      })
      localStorage.setItem('challenges', JSON.stringify(updatedStatus))
      return updatedStatus
    case 'addHackathon':
      state.push(action.payload.item)
      let newChallenge = state
      localStorage.setItem('challenges', JSON.stringify(newChallenge))
      return newChallenge
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer,[],init)

  return (
    <LocalStorageContext.Provider value={{dispatch,state}}>
      <div >
        <Home />
        <CreateChallenge />
      </div>
    </LocalStorageContext.Provider>
  );
}

export default App;

















  // const getFromls = (item) => {
  //   const challenges = JSON.parse(localStorage.getItem('challenges'))
  //   if (challenges) {
  //     setChallenges(challenges);
  //     if (item) {
  
  //     }

  //   } else {
  //     localStorage.setItem('challenges', JSON.stringify(new Array()))
  //     setChallenges([]);
  //   }
  // }
  // useEffect(() => {
  //   getFromls()
  // }, [])