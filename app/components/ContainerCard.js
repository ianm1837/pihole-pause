'use client'
import { useGlobalContext } from './context/GlobalContext'
import PiCardSettingsList from './SettingsCard/components/PiCardSettingsList'
import SaveButton from './SettingsCard/components/SaveButton'
import CloseButton from './SettingsCard/components/CloseButton'
import React from 'react'
import SettingsGear from './PauseCard/components/SettingsGear'
import ListAndPause from './PauseCard/components/ListAndPause'
import CountdownTimer from './PauseCard/components/CountdownTimer'

export default function ContainerCard() {
    const { settingsPage, pauseTimeout } = useGlobalContext()

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
                    </>
                )}
                {/* {!settingsPage && (
                    <div className="h-12 w-100"></div>
                )} */}
                {
                    pauseTimeout? (
                        <div className='w-100 flex justify-center m-3'>
                            <CountdownTimer duration={pauseTimeout} />
                        </div>
                    )
                    :
                    (
                        ''
                    )
                }
            </div>
        </div>
    )
}
