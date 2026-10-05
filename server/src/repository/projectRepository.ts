import { LOCAL_USER_ID } from "../config/constants";
import { prisma } from "../lib/prisma";

export async function findAllProjects(){
    return prisma.project.findMany({
        where:{id:LOCAL_USER_ID},
        orderBy:{createdAt:"asc"}
    })
}

export async function findProjectById(id:string){
    return prisma.project.findFirst({
        where:{id,userId:LOCAL_USER_ID}
    })
}


type createProjectWithMessageInput={
    name: string,
    messageContent :string
}

export async function createProjectWithMessage(input:createProjectWithMessageInput){
    return prisma.project.create({
        data:{
            name:input.name,
            userId:LOCAL_USER_ID,
            messages:{
                create:{
                    content:input.messageContent,
                    role:"user",
                    type:"result"
                },
            },
        },
        include:{
            messages:true
        }
        
    })
}