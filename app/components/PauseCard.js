'use client'
import React from 'react'

import PauseButton from './PauseButton'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimate, usePresence } from 'framer-motion'
import PencilIcon from './icons/PencilIcon'
import DoneIcon from './icons/DoneIcon'
import TrashIcon from './icons/TrashIcon'
import SpinningPencil from './animations/SpinningPencil'
import TrashcanAnimation from './animations/TrashcanAnimation'
import ServerList from './ServerList'
import ServerEditList from './ServerEditList'

export default function PauseCard({ serverList }) {
    const [editMode, setEditMode] = useState(false)
    const [paused, setPaused] = useState(false)

    function togglePaused() {
        setPaused(!paused)
    }

    function toggleEditMode() {
        setEditMode(!editMode)
    }

    return (
        <div className="container">
            <div className="flex flex-col items-center w-100">
                <div className="card w-10/12 bg-neutral shadow-xl grow m-8 pb-14">
                    <div className="card-body items-center w-100">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
