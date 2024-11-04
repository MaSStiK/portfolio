"use client"
import { useLocalization } from "@/components/Localization/Localization";

import "./index.scss"

export default function Index() {
    const Loc = useLocalization("Index")
    return (
        <section className="index-info">
            <div className="index-info__inner">
                <h1>{Loc.info.title}</h1>
                <p className="text-gray">{Loc.info.desc}</p>
                <button className="primary">{Loc.info.contact_me}</button>
            </div>
        </section>
    )
}
