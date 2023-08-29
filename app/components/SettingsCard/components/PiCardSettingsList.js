import React from 'react'
import PiCardSettings from './PiCardSettings'
import PlusButton from './PlusButton'

export default function PiCardSettingsList() {
    return (
        <div className="flex-col m-auto min-h-[18rem]">
            <PiCardSettings />
            <PiCardSettings />
            <div className="w-100 flex align-middle">
                <PlusButton className="m-auto" />
            </div>
        </div>
    )
}
