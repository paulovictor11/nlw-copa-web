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
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests allowed" });
    }

    const createLoginBody = z.object({
        email: z.string().email(),
        password: z.string().min(5),
    });

    const { email, password } = createLoginBody.parse(req.body);

    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        return res.status(400).json({
            message: "Invalid credentials",
        });
    }

    const isValidPassword = await encrypter.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(400).json({
            message: "Invalid credentials",
        });
    }

    const token = await tokenGenerator.generate(user.id);
    return res.json({
        token,
        user: { name: user.name, email: user.email, avatarUrl: user.avatarUrl },
    });
}
