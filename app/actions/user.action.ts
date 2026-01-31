"use server"

import * as userService from "@/lib/user.service";

export async function createUserAction(data: {
    email: string;
    name: string;
    department: string;
}) {
    return userService.createUser(data);
}

export async function updateUserAction(id: number, data: {
    email?: string;
    name?: string;
    department?: string;
}) {
    return userService.updateUser(id, data);
}

export async function deleteUserAction(id: number) {
    return userService.deleteUser(id);
}