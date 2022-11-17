import { CardCalendar } from "../../components/CardCalendar";
import { Common } from "../../components/Common";

export default function Calendar() {
    return (
        <Common>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                <CardCalendar.Root>
                    <CardCalendar.Header date="24/11" day="quinta" />

                    <CardCalendar.Content>
                        <CardCalendar.Tile time="07:00" />
                        <CardCalendar.Tile time="13:00" />
                        <CardCalendar.Tile time="16:00" />
                    </CardCalendar.Content>
                </CardCalendar.Root>

                <CardCalendar.Root>
                    <CardCalendar.Header date="24/11" day="quinta" />

                    <CardCalendar.Content>
                        <CardCalendar.Tile time="10:00" />
                        <CardCalendar.Tile time="13:00" />
                        <CardCalendar.Tile time="16:00" />
                    </CardCalendar.Content>
                </CardCalendar.Root>
            </div>
        </Common>
    );
}
