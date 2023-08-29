'use client'
import React from 'react'
import SettingsGear from './buttons/SettingsGear'
import ListAndPause from './ListAndPause'
import CardFooter from './CardFooter'

export default function PauseCard() {
    return (
        <div className="flex flex-col items-center w-100">
            <div className="card w-8/12 bg-base-100 shadow-xl grow m-8">
                <div className="card-body w-100">
                    <SettingsGear />
                    <ListAndPause />
                    <CardFooter />
                </div>
            </div>
        </div>
    )
}
