import Head from "next/head";
import { CalendarCard } from "../../../components/CalendarCard";
import { Common } from "../../../components/Common";

export default function Calendar() {
    return (
        <>
            <Head>
                <title>Nlw Copa | Calendário</title>
            </Head>
            <Common>
                <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                    <CalendarCard.Root>
                        <CalendarCard.Header date="24/11" day="quinta" />

                        <CalendarCard.Content>
                            <CalendarCard.Tile time="07:00" />
                            <CalendarCard.Tile time="13:00" />
                            <CalendarCard.Tile time="16:00" />
                        </CalendarCard.Content>
                    </CalendarCard.Root>

                    <CalendarCard.Root>
                        <CalendarCard.Header date="28/11" day="segunda" />

                        <CalendarCard.Content>
                            <CalendarCard.Tile time="10:00" />
                            <CalendarCard.Tile time="13:00" />
                            <CalendarCard.Tile time="16:00" />
                        </CalendarCard.Content>
                    </CalendarCard.Root>
                </div>
            </Common>
        </>
    );
}
