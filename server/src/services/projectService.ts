import { findAllProjects, findProjectById } from "../repository/projectRepository";

export async function getAllProjects(){
    return findAllProjects()
}
export async function getProjectById(id: string){
    return findProjectById(id);
}