import PiCardList from "./PiCardList"
import PauseButton from "./PauseButton"

export default function ListAndPause() {
  return (
    <div className="flex min-h-[18rem]">
      <div className={`w-6/12 m-auto`}>
        <PiCardList/>
      </div>
      <div className={`w-6/12 m-auto`}>
        <PauseButton/>
      </div>
    </div>
  )
}
