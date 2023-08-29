'use client'
import PauseCard from './PauseCard/PauseCard'
import SettingsCard from './SettingsCard/SettingsCard'
import { useState, useEffect, useContext } from 'react'
import { useGlobalContext } from './context/GlobalContext'

export default function ContainerCard() {
    const { settingsPage } = useGlobalContext()

    return <div>{settingsPage ? <SettingsCard /> : <PauseCard />}</div>
}
