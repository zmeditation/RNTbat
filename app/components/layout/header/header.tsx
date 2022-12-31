import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [selected, setSelected] = useState(0);
    const buttons = [
        {
            name: 'Accueil',
            component: <h1>Acceuil</h1>
        },
        {
            name: 'Emplois',
            component: <h1>Emplois</h1>
        },
        {
            name: 'Forum',
            component: <h1>Forum</h1>
        },
        {
            name: 'Contact',
            component: <h1>Contact</h1>
        },
    ]
    return (
        <>
            {/* Tailwind header, logo Image, 4 middle button links, and 2 buttons in the end */}
            <header className="flex flex-row justify-between items-center px-10 py-2">
                <div className="flex flex-row items-center">
                    <Image
                        src="/logo.png"
                        width="100"
                        height="50"
                        alt="Logo"
                        priority
                    />
                </div>
                <div className="flex flex-row items-center justify-center gap-3">
                    {/* <button className="bg-[color:var(--C1)]	 bg-opacity-20 hover:bg-[color:var(--C5)] text-slate-100 font-bold hover:text-white py-2 px-4 rounded">
                        Accueil
                    </button>

                    <button className="bg-slate-400	 bg-opacity-20 hover:bg-slate-400 text-slate-500 font-bold hover:text-white py-2 px-4 rounded">
                        Emplois
                    </button>

                    <button className="bg-slate-400	 bg-opacity-20 hover:bg-slate-400 text-slate-500 font-bold hover:text-white py-2 px-4 rounded">
                        Forum
                    </button>

                    <button className="bg-slate-400	 bg-opacity-20 hover:bg-slate-400 text-slate-500 font-bold hover:text-white py-2 px-4 rounded">
                        Contact
                    </button> */}

                    {buttons.map((button, index) => {
                        return <button className={selected == index ? 'bg-[color:var(--C1)]	 bg-opacity-20 hover:bg-[color:var(--C5)] text-slate-100 font-bold hover:text-white py-2 px-4 rounded' : 'bg-slate-400	 bg-opacity-20 hover:bg-slate-400 text-slate-500 font-bold hover:text-white py-2 px-4 rounded'} onClick={() => setSelected(index)}>{button.name}</button>;
                    })}
                </div>
            </header>
        </>
    );
}
