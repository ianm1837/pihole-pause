'use client'
import { useGlobalContext } from './context/GlobalContext'
import PiCardSettingsList from './SettingsCard/components/PiCardSettingsList'
import SaveButton from './SettingsCard/components/SaveButton'
import ListAndPause from './PauseCard/components/ListAndPause'
import CountdownTimer from './PauseCard/components/CountdownTimer'
import TimePicker from './PauseCard/components/TimePicker'
import TimePickerDropdown from './PauseCard/components/TimePickerDropdown'

export default function ContainerCard() {
    const { settingsPage, pauseTimeout } = useGlobalContext()

    return (
        <div className="flex flex-col items-center">
            <div className="rounded-2xl sm:w-8/12 w-full bg-base-100 shadow-2xl m-4 p-8">
                {settingsPage ? (
                    <>
                        <PiCardSettingsList />
                        <div className="w-100 flex align-middle mb-3">
                            <SaveButton />
                        </div>
                    </>
                ) : (
                    <>
                        <ListAndPause />
                        <div className="w-100 flex justify-center m-0">
                            {pauseTimeout ? (
                                <CountdownTimer duration={pauseTimeout} />
                            ) : (
                                <TimePicker />
                                // <TimePickerDropdown />
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
