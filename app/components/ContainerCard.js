'use client'
import { useGlobalContext } from './context/GlobalContext'
import PiCardSettingsList from './SettingsCard/components/PiCardSettingsList'
import SaveButton from './SettingsCard/components/SaveButton'
import ListAndPause from './PauseCard/components/ListAndPause'
import CountdownTimer from './PauseCard/components/CountdownTimer'
import TimePicker from './PauseCard/components/TimePicker'

export default function ContainerCard() {
    const { settingsPage, pauseTimeout, communicationsError } =
        useGlobalContext()

    return (
        <div className="flex flex-col items-center">
            <div className="rounded-2xl sm:w-8/12 w-full bg-base-100 shadow-xl m-8 p-8">
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
                        <div className="w-100 flex justify-center m-3">
                            {pauseTimeout ? (
                                <CountdownTimer duration={pauseTimeout} />
                            ) : (
                                <TimePicker />
                            )}
                        </div>
                    </>
                )}
            </div>
            {communicationsError ? (
                <div className="toast">
                    <div className="alert alert-error">
                        <span>Communication Error!</span>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
