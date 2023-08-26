'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getServers() {
    return await prisma.servers.findMany()
}
