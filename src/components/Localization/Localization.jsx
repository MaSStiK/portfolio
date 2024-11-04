"use client"
import { useState, useEffect } from "react"
import { useAppContext } from "@/components/Context/Context"

import RU from "./RU"
import EN from "./EN"
import FR from "./FR"

export const Languages = {
    ru: {title: "RU", data: RU},
    en: {title: "EN", data: EN},
    fr: {title: "FR", data: FR},
}

export function useLocalization(category) {
    const { PageLanguage, setPageLanguage} = useAppContext()
    const DefaultLanguage = "en"
    const [LocalizedData, setLocalizedData] = useState(Languages[PageLanguage].data[category]);
    
    useEffect(() => {
        if (typeof window !== "undefined") { // Проверяем, что код выполняется на клиенте
            let language = DefaultLanguage

            if (localStorage.language) { // Проверяем, существует ли сохранённый язык
                language = localStorage.language // Берём сохранённый язык
            } else { // Если нет, используем язык из системы
                let newLanguage = navigator.language.substring(0, 2)
                language = newLanguage // Язык по умолчанию (язык системы)
                localStorage.language = newLanguage
                console.log("Set new language: " + newLanguage)
            }
        
            if (!Languages[language]) { // Проверяем, существует ли выбранный язык
                console.log(`Unknown language: ${language}; Set default language: ${DefaultLanguage}`)
                language = DefaultLanguage // Если нет, используем язык по умолчанию
                localStorage.language = PageLanguage
            }

            console.log(`Languages[${language}].data[${category}]: ${JSON.stringify(Languages[language].data[category], null, 4)}`)
    
            // Обновляем состояние данными для выбранного языка и категории
            setPageLanguage(language)
            setLocalizedData(Languages[PageLanguage].data[category]);
            document.documentElement.setAttribute("lang", language);
        }
    }, [category, PageLanguage, setPageLanguage]);

    return LocalizedData;
}