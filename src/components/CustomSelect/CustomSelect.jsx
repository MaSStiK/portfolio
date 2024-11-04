import Image from "next/image";
import { useState, useRef } from "react"
import useClickOutside from "../ClickOutside/ClickOutside";
import svgCaretDown from "@/assets/svg/Caret-down.svg"

import "./CustomSelect.scss"

export default function CustomSelect({
    className,
    options=[], // [{title: str, value: str}]
    defaultValue=null,
    onChange
}) {
    const [SelectOpen, setSelectOpen] = useState(false);
    const SelectTitle = options.find(option => option.value === defaultValue).title
    console.log("SelectTitle", SelectTitle);
    
    
    const MenuRef = useRef()
    useClickOutside(MenuRef, closeSelect)

    function closeSelect() {
        setSelectOpen(false)
    }
    
    return (
        <div className={`custom-select__wrapper ${className} ${SelectOpen ? "open" : ""}`} ref={MenuRef}>
            <button className="custom-select" onClick={() => setSelectOpen(true)}>{SelectTitle}</button>
            <Image
                className="custom-select__caret"
                src={svgCaretDown}
                alt="caret"
                sizes="12px"
            />
            <div className="custom-select__content">
                {options.map((option, key) => (
                    <button
                        key={key}
                        className={`custom-option ${option.value === defaultValue ? "selected" : ""}`} 
                        onClick={() => onChange(option.value)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>
        </div>
    )
}