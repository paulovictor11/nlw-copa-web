import { Encrypter } from "../src/utils/helpers/encrypter";
import prisma from "../src/lib/prisma";

const encrypter = new Encrypter();

async function main() {
    const hashedPassword = await encrypter.encrypt("12345");
    const user = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "john.doe@gmail.com",
            avatarUrl: "https://github.com/paulovictor11.png",
            password: hashedPassword,
        },
    });

    const pool = await prisma.pool.create({
        data: {
            title: "Example Pool",
            code: "BOL123",
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id,
                },
            },
        },
    });

    await prisma.game.create({
        data: {
            date: "2022-11-03T12:00:00.399Z",
            firstTeamCountryCode: "DE",
            secondTeamCountryCode: "BR",
        },
    });

    await prisma.game.create({
        data: {
            date: "2022-11-04T12:00:00.399Z",
            firstTeamCountryCode: "BR",
            secondTeamCountryCode: "AR",

            guesses: {
                create: {
                    firstTeamPoints: 2,
                    secondTeamPoints: 1,

                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id,
                            },
                        },
                    },
                },
            },
        },
    });
}

main();
