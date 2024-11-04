"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"
import NavLink from "@/components/NavLink/NavLink"
import { useLocalization, Languages } from "@/components/Localization/Localization";
import CustomSelect from "../CustomSelect/CustomSelect";
import Logo from "@/components/Logo/Logo"


import "./Header.scss"

export default function Header() {
    const Router = useRouter()
    const Loc = useLocalization("Header")
    const LanguagesArray = Object.keys(Languages).map(lang => {return {value: lang, title: Languages[lang].title}})

    const [LanguageDefault, setLanguageDefault] = useState();
    useEffect(() => {
        if (typeof window !== "undefined") { // Проверяем, что код выполняется на клиенте
            setLanguageDefault(localStorage.language);
        }
    }, [])


    // Смена языка
    function changeLang(value) {
        console.log("Set new language: " + value)
        localStorage.language = value
        setLanguageDefault(value)
        window.location.reload()
    }

    return (
        <header>
            <Logo />

            <ul>
                <li><NavLink href="/"><text-primary>#</text-primary>{Loc && Loc.nav.home}</NavLink></li>
                <li><NavLink href="/works"><text-primary>#</text-primary>{Loc && Loc.nav.works}</NavLink></li>
                <li><NavLink href="/about"><text-primary>#</text-primary>{Loc && Loc.nav.about_me}</NavLink></li>
                <li><NavLink href="/contacts"><text-primary>#</text-primary>{Loc && Loc.nav.contacts}</NavLink></li>
                <li>
                    {LanguageDefault
                        ? <CustomSelect
                            className="language-select"
                            options={LanguagesArray}
                            defaultValue={LanguageDefault}
                            onChange={value => changeLang(value)}
                        />
                        : <div className="select-placeholder"></div>
                    }
                </li>
            </ul>
        </header>
    )
}