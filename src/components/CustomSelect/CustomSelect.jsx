import Image from "next/image";
import { useState, useRef } from "react"
import useClickOutside from "../ClickOutside/ClickOutside";
import svgCaretDown from "@/assets/svg/Caret-down.svg"

import "./CustomSelect.scss"

export default function CustomSelect({
    options = [], // [{title: str, value: str}]
    defaultValue = null,
    onChange
}) {
    const [IsOpen, setIsOpen] = useState();
    const menuRef = useRef()
    useClickOutside(menuRef, closeSelect)

    function closeSelect() {
        setIsOpen(false)
    }
    return (
        <div className={`custom-select__wrapper ${IsOpen ? "open" : ""}`}>
            <button className="custom-select" onClick={() => setIsOpen(true)}>RU</button>
            <Image
                className="custom-select__caret"
                src={svgCaretDown}
                alt="caret"
                sizes="12px"
            />
            <div className="custom-select__content" ref={menuRef}>
                {options.map((option, key) => (
                    <button
                        key={key}
                        className={`custom-option ${defaultValue === option.value ? "selected" : ""}`} 
                        onClick={() => onChange(option.value)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>
        </div>
    )
}