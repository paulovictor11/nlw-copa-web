import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import prisma from "../../../../lib/prisma";
import ShortUniqueId from "short-unique-id";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const createPoolBody = z.object({
            title: z.string(),
        });

        const { title } = createPoolBody.parse(req.body);

        const generate = new ShortUniqueId({ length: 6 });
        const code = String(generate()).toUpperCase();

        await prisma.pool.create({
            data: {
                title,
                code,
            },
        });

        return res.status(201).send({ code });
    }

    const pools = await prisma.pool.findMany({
        select: {
            id: true,
            title: true,
            code: true,
            owner: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });

    return res.json({ pools });
}
