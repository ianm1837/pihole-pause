import React from 'react'
import { useGlobalContext } from '../../context/GlobalContext'

export default function TimePicker() {
    const { selectedDuration, setSelectedDuration } = useGlobalContext()

    function handleChange(event) {
        const currentSelection = event.currentTarget.id
        setSelectedDuration(currentSelection)
    }

    return (
        <div className="join mx-auto">
            <input
                className="join-item btn btn-xs w-24 border border-neutral bg-base-100 hover:bg-base-100 hover:text-neutral-300 hover:border-neutral text-neutral-500"
                id="1"
                type="radio"
                name="one"
                aria-label="1 Minute"
                onChange={handleChange}
                checked={selectedDuration === '1'}
            />
            <input
                className="join-item btn btn-xs w-24 border border-neutral bg-base-100 hover:bg-base-100 hover:text-neutral-300 hover:border-neutral text-neutral-500"
                id="5"
                type="radio"
                name="one"
                aria-label="5 Minutes"
                onChange={handleChange}
                checked={selectedDuration === '5'}
            />
            <input
                className="join-item btn btn-xs w-24 border border-neutral bg-base-100 hover:bg-base-100 hover:text-neutral-300 hover:border-neutral text-neutral-500"
                id="10"
                type="radio"
                name="one"
                aria-label="10 Minutes"
                onChange={handleChange}
                checked={selectedDuration === '10'}
            />
        </div>
    )
}
