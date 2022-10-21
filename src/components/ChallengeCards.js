import ChallengeCard from "./ChallengeCard"
import { useContext } from "react"
import localStorageContext from "../context/LocalStorage"

const ShowCards = ({ state }) => {
  return <>
    {state.map((challenge, i) => {
      return <ChallengeCard key={i} challenge={challenge} />
    })}
  </>
}
export default function ChallengeCards() {
  const { state } = useContext(localStorageContext)
  return (
    <div>
      
      {
        state.length > 0 ? <ShowCards state={state} /> : <p>All challneges Are over</p>

      }
    </div>
  )
}
