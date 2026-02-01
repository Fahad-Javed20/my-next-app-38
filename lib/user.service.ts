import prisma from '@/lib/prisma';

type User = {
  id: number;
  email: string;
    username: string;
    bloodgroup: string;
    createdAt: Date;
    updatedAt: Date;
};

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany();
}

export async function getUserById(id: number): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function createUser(data: {
    username: string;
    email: string;
    password: string;
    bloodgroup: string;
}) {
  return prisma.user.create({ data });
}

export async function updateUser(id: number, data: {
    username?: string;
    email?: string;
    password?: string;
    bloodgroup?: string;
}) {  
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: number) {
  return prisma.user.delete({
    where: { id },
  });
}