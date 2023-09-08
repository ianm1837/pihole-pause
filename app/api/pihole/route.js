import { NextResponse, NextRequest } from 'next/server'
import { headers } from 'next/headers'

const util = require('util')

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams

    const ip = searchParams.get('ip')
    const action = searchParams.get('action')
    const duration = searchParams.get('duration')
    const apiKey = searchParams.get('auth')

    if (!ip) {
        return new Response('No ip included in params')
    }

    if (!action) {
        return new Response('No action included in params')
    }

    if (action == 'status') {
        const getStatus = await fetch(`http://${ip}/admin/api.php?status`)

        const getStatusJSON = await getStatus.json()
        return new Response(JSON.stringify(getStatusJSON))
    }

    if (action == 'enable') {
        const sendEnable = await fetch(
            `http://${ip}/admin/api.php?enable&auth=${apiKey ? apiKey : ''}`
        )

        const sendEnableJSON = await sendEnable.json()
        return new Response(JSON.stringify(sendEnableJSON))
    }

    if (action == 'disable') {
        const sendDisable = await fetch(
            `http://${ip}/admin/api.php?disable=${duration}&auth=${
                apiKey ? apiKey : ''
            }`
        )

        const sendDisableJSON = await sendDisable.json()
        return new Response(JSON.stringify(sendDisableJSON))
    }
}
1
