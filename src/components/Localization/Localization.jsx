"use client"
import { useState, useEffect } from "react"
import RU from "./RU"
import EN from "./EN"
import FR from "./FR"

export const Languages = {
    ru: {title: "RU", data: RU},
    en: {title: "EN", data: EN},
    fr: {title: "FR", data: FR},
}

export function useLocalization(category) {
    const DefaultLanguage = "ru" // Язык по умолчанию
    const [LocalizedData, setLocalizedData] = useState(Languages[DefaultLanguage].data[category]);
    
    useEffect(() => {
        if (typeof window !== "undefined") { // Проверяем, что код выполняется на клиенте

            let language = DefaultLanguage

            if (localStorage.language) { // Проверяем, существует ли сохранённый язык
                language = localStorage.language // Берём сохранённый язык
            } else { // Если нет, используем язык из системы
                language = navigator.language.substring(0, 2) // Язык по умолчанию (язык системы)
                localStorage.language = language
                console.log("Set default language: " + language)
            }
        
            if (!Languages[language]) { // Проверяем, существует ли выбранный язык
                console.log(`Unknown language: ${language}; Set default language: ${DefaultLanguage}`)
                language = DefaultLanguage // Если нет, используем язык по умолчанию
                localStorage.language = DefaultLanguage
            }

            console.log(`Languages[${language}].data[${category}]: ${JSON.stringify(Languages[language].data[category], null, 4)}`)
    
            // Обновляем состояние данными для выбранного языка и категории
            setLocalizedData(Languages[language].data[category]);
            
        }
    }, [category]);

    return LocalizedData;
}