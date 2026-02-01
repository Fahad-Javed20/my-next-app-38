"use server"

import * as userService from "@/lib/user.service";

export async function createUserAction(data: {
    username: string;
    email: string;
    password: string;
    bloodgroup: string;
}) {
    return userService.createUser(data);
}

export async function updateUserAction(id: number, data: {
    username?: string;
    email?: string;
    password?: string;
    bloodgroup?: string;
}) {
    return userService.updateUser(id, data);
}


export async function deleteUserAction(id: number) {
    return userService.deleteUser(id);
}