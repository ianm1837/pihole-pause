'use client'
import PauseCard from './PauseCard'
import SettingsCard from './SettingsCard'
import { useState, useEffect, useContext } from 'react'
import { useGlobalContext } from './GlobalContext'

export default function ContainerCard() {
    const { settingsPage } = useGlobalContext()
    
    return <div>{settingsPage ? <SettingsCard /> : <PauseCard />}</div>
}
