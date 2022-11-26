import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { Encrypter } from "../../../../utils/helpers/encrypter";
import { TokenGenerator } from "../../../../utils/helpers/token-generator";
import prisma from "../../../../lib/prisma";

const encrypter = new Encrypter();
const tokenGenerator = new TokenGenerator();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const createUserBody = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(5),
        });

        const { name, email, password } = createUserBody.parse(req.body);
        const isUserAlreadyExists = await prisma.user.findUnique({
            where: { email },
        });

        if (isUserAlreadyExists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const hashedPassword = await encrypter.encrypt(password);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        const token = await tokenGenerator.generate(user.id);

        return res.status(201).json({ token, user });
    }

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
    });

    return res.json({ users });
}
