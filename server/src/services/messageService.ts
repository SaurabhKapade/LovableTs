import { NullTypes } from "@prisma/client/runtime/client"
import {createMessage,findMessagesByProjectId} from "../repository/messageRepository"
import { findProjectById } from "../repository/projectRepository"

export async function getMessagesByProjectId(projectId:string){
    const projct = await findProjectById(projectId)
    if(!projct){
        return null
    }
    return findMessagesByProjectId(projectId);
}


export async function addMessageToProject(projectId:string,content:string){
    const project = await findProjectById(projectId)

    if(!project) return null;

    return createMessage({projectId,content})

}