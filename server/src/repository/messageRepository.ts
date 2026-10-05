
import { Message } from "../../generated/prisma/client"
import {prisma} from "../lib/prisma"

export async function findMessagesByProjectId(projectId:string):Promise<Message[]> {
    return prisma.message.findMany({
        where:{projectId},
        orderBy:{
            createdAt:"asc"
        },
        include:{
            fragments:true
        },
    })
}

type createMessageInput={
    projectId : string,
    content : string
}

export async function createMessage(input:createMessageInput){
    return prisma.message.create({
        data:{
            project:input.projectId,
            content:input.content,
            role:"user",
            type:"result"
        },
    });
}

