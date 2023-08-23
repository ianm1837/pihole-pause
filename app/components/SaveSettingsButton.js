"use client"
import { useTransition } from "react"
import saveSettings from "../actions/saveSettings"

export default function SaveSettingsButton(){
  const [isPending, startTransistion] = useTransition()

  const handleClick = () => {
    startTransistion(async () => {
      saveSettings()
    })
  }

  return(
    <button className="btn" onClick={handleClick}>Close</button>
  )
}