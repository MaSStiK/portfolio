"use client"
import { useLocalization } from "@/components/Localization/Localization";

export default function Loading() {
    const Loc = useLocalization("Loading")

    return (
        <section>
            <h2>{Loc.message}</h2>
        </section>
    )
}