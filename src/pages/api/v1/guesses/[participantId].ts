import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const guesses = await prisma.guess.findMany({
        where: { participantId: req.query.participantId as string },
    });

    return res.json({ guesses });
}
