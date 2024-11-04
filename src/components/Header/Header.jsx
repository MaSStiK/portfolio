"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"
import NavLink from "@/components/NavLink/NavLink"
import { useLocalization, Languages } from "@/components/Localization/Localization";
import CustomSelect from "../CustomSelect/CustomSelect";
import Logo from "@/components/Logo/Logo"


import "./Header.scss"

export default function Header() {
    const Loc = useLocalization("Header")
    const LanguagesArray = Object.keys(Languages).map(lang => {return {value: lang, title: Languages[lang].title}})
    const Router = useRouter()

    // Смена языка
    function changeLang(value) {
        console.log("Set new language: " + value)
        localStorage.language = value
        Router.refresh()
    }

    return (
        <header>
            <Logo />

            <ul>
                <li><NavLink href="/"><text-primary>#</text-primary>{Loc && Loc.nav.home}</NavLink></li>
                <li><NavLink href="/works"><text-primary>#</text-primary>{Loc && Loc.nav.works}</NavLink></li>
                <li><NavLink href="/about"><text-primary>#</text-primary>{Loc && Loc.nav.about_me}</NavLink></li>
                <li><NavLink href="/contacts"><text-primary>#</text-primary>{Loc && Loc.nav.contacts}</NavLink></li>
                <CustomSelect 
                    options={LanguagesArray}
                    defaultSelected={localStorage.language}
                    onChange={value => changeLang(value)}
                />
                {/* <div className="select"> */}
                    {/* <select name="lang" defaultValue={localStorage.language} onChange={(event) => changeLang(event.target.value)}> */}
                        {/* {Object.keys(Languages).map((language, i) => ( */}
                            {/* <option value={language} key={i}>{Languages[language].title}</option> */}
                        {/* ))} */}
                    {/* </select> */}
                {/* </div> */}
            </ul>
        </header>
    )
}