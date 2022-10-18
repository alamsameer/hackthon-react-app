import ChallengeCard from "./ChallengeCard"
import { useContext } from "react"
import localStorageContext from "../context/LocalStorage"

const ShowCards = ({ allChallenges }) => {
  return <>
    {allChallenges.map((challenge, i) => {
      console.log(i);
      return <ChallengeCard key={i} challenge={challenge} />
    })}
  </>
}
export default function ChallengeCards() {
  const { allChallenges } = useContext(localStorageContext)
  console.log(typeof (allChallenges), allChallenges.length, "from cards parent");
  return (
    <div>
      
      {
        allChallenges.length > 0 ? <ShowCards allChallenges={allChallenges} /> : <p>All challneges Are over</p>

      }
    </div>
  )
}
