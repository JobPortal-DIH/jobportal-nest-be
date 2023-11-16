import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { UserDTO } from '../../application/register/register.dto'
const prisma = new PrismaClient()


@Injectable()
export class AuthRepository {

    async findByEmail(email: string) {
        return await prisma.user.findUnique({
            where: {email}
        })
    }


    static async create(data: UserDTO): Promise<User> {
        return await prisma.user.create({
            data: data
        })
    }
}