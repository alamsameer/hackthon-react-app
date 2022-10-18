
import Home from "./pages/Home";
import CreateChallenge from "./pages/CreateChallenge";
import "./global.css"
import { useEffect, useState } from "react";
import LocalStorageContext from "./context/LocalStorage";
function App() {
  const [allChallenges, setChallenges] = useState([])
  const getFromls = (item) => {
    const challenges = JSON.parse(localStorage.getItem('challenges'))
    if (challenges) {
      setChallenges(challenges);
      if (item) {
        challenges.push(item)
        let newChallenge = challenges
        localStorage.setItem('challenges', JSON.stringify(newChallenge))
        setChallenges(challenges);
      }

    } else {
      var storage = []
      localStorage.setItem('challenges', JSON.stringify(new Array()))
      setChallenges([]);
    }
  }
  useEffect(() => {
    getFromls()
  }, [])
  return (
    <LocalStorageContext.Provider value={{ getFromls, allChallenges }}>
      <div >
        <Home />
        <CreateChallenge />
      </div>
    </LocalStorageContext.Provider>
  );
}

export default App;
