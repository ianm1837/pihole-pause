const { PrismaClient } = require('@prisma/client')
import { NextResponse, NextRequest } from 'next/server'
import { headers } from 'next/headers'

const prisma = new PrismaClient()

export async function GET() {

  //get all servers
  const allServers = await prisma.servers.findMany()

  return NextResponse.json(allServers)
}


export async function POST(request) {
  //for adding new data

  const { serverName, serverAddress, lastDisabledTime } = await request.json()

  try{
    const createdObject = await prisma.servers.create({
      data:{
        serverName: serverName,
        serverAddress: serverAddress
      }
    })
    return NextResponse.json(createdObject)
  } catch(error) {
    //find type of error
    console.log("Error Type: ", error.constructor.name)

    //find conflicting field(s)
    console.log("Error Target: ", error.meta.target)

    //find verbose error message
    console.log("Error Message: ", error.message)

    //find error code
    console.log("Error Code", error.code)
    
    return NextResponse.json({
      errorCode: error.code, 
      errorMessage: error.message, 
      errorTarget: error.meta.target
    })
}
  
}

export async function PUT(reuqest) {
  //for updating current data

  //get json body
  const requestJSON = await reuqest.json()

  //update the database based on the values provided
  try{
    const updatedRecord = await prisma.servers.update({
      where: {
        id: requestJSON.id
      },
      data: {
        serverName: requestJSON.serverName,
        serverAddress: requestJSON.serverAddress
      }
    })
      return NextResponse.json(updatedRecord)
  }catch{ (error) => {
    return NextResponse.json({
      errorCode: error.code, 
      errorMessage: error.message, 
      errorTarget: error.meta.target
    })
  }
  }
}

export async function DELETE(request){
  //for deleting the data
  // const params = new URL(request)
  // console.log(await request.nextUrl.searchParams.get("id"))
  const requestJSON = await request.json()

  const deletedValue = await prisma.servers.delete({
    where: {
      id: requestJSON.id
    }
  })

  return NextResponse.json(deletedValue)
}