'use client'
import { useRef, useState } from "react";

export default function OptionItem({label}) {
    const [check, setCheck] = useState(false)
    const [dirty, setDirty] = useState(false)
    const ref = useRef(null)
    return (
        <label
            onClick={(e) => { e.preventDefault(); ref.current.checked = !ref.current.checked }}
            className="flex justify-between py-2 pr-[15px] pl-[22px]">
            <h4>{label}</h4>
            <div
                className="group relative flex items-center rounded-full cursor-pointer"
            >
                <input
                    ref={ref}
                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); setDirty(true); setCheck(!check) }}
                    onMouseEnter={() => dirty ? setCheck(true) : null}
                    type="checkbox"
                    className={`peer relative appearance-none w-[23px] h-[23px] border rounded-md cursor-pointer transition-all ${check ? 'group-hover:bg-[#5087F8] group-hover:border-[#5087F8] hover:bg-[#2469F6] hover:border-[#2469F6]' : ''} checked:bg-[#2469F6] checked:hover:bg-[#5087F8] checked:hover:border-[#5087F8] hover:border-gray-400`}
                />
                <span
                    className={`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 peer-hover:opacity-100`}
                >
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.679993 6.592L6.22878 11.5272C6.24925 11.5454 6.28054 11.5437 6.29898 11.5235L16.32 0.519997" stroke="#E3E3E3" strokeLinecap="round" />
                    </svg>
                </span>
            </div>
        </label>
    )
}