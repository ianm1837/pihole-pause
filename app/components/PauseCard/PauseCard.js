'use client'
import React from 'react'
import SettingsGear from './components/SettingsGear'
import ListAndPause from './components/ListAndPause'

export default function PauseCard() {
    return (
        <div className="flex flex-col items-center w-100">
            <div className="card w-8/12 bg-base-100 shadow-xl grow m-8">
                <div className="card-body w-100">
                    <SettingsGear />
                    <ListAndPause />
                    <div className="h-12 w-100"></div>
                </div>
            </div>
        </div>
    )
}
