import React from 'react'
import { useGlobalContext } from '../../context/GlobalContext'




export default function TimePicker() {

    
    
    const { selectedDuration, setSelectedDuration } = useGlobalContext()
    
    function handleChange(event){
        const currentSelection = event.currentTarget.id
        setSelectedDuration(currentSelection)
    }

    return (
        <div className="join mx-auto my-6">
            <input
                className="join-item btn btn-xs w-24"
                id="1"
                type="radio"
                name="one"
                aria-label="1 minute"
                onChange={handleChange}
                checked={selectedDuration === '1'}
            />
            <input
                className="join-item btn btn-xs w-24 "
                id="5"
                type="radio"
                name="one"
                aria-label="5 minutes"
                onChange={handleChange}
                checked={selectedDuration === '5'}
            />
            <input
                className="join-item btn btn-xs w-24"
                id="10"
                type="radio"
                name="one"
                aria-label="10 minutes"
                onChange={handleChange}
                checked={selectedDuration === '10'}
            />
        </div>
    )
}
