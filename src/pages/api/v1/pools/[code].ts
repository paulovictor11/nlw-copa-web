import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const pool = await prisma.pool.findUnique({
        where: {
            code: req.query.code as string,
        },
        include: {
            owner: true,
            participants: true,
        },
    });

    res.json({ pool });
}
