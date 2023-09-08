import PiCardList from './PiCardList'
import PauseButton from './PauseButton'
import RestartButton from './RestartButton'
import SettingsGear from './SettingsGear'
import CountdownTimer from './CountdownTimer'
import TimePicker from './TimePicker'
import { useGlobalContext } from '../../context/GlobalContext'

export default function ListAndPause() {
    const { paused, pauseTimeout } = useGlobalContext()

    return (
        <div>
            <div className=" w-full sm:max-w-sm xl:max-w-full m-auto">
                <SettingsGear />
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-center min-h-[18rem]">
                <div className={` w-full sm:max-w-sm m-auto`}>
                    <PiCardList />
                </div>
                <div className={` w-full sm:max-w-sm xl:m-auto my-5 mx-auto`}>
                    {!paused ? <PauseButton /> : <RestartButton />}
                    <div className="w-100 flex justify-center">
                        {pauseTimeout ? (
                            <CountdownTimer duration={pauseTimeout} />
                        ) : (
                            <TimePicker />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
