// app/page.tsx
"use client";

import { useState } from "react";
import { Checkbox } from "@/components/Checkbox";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

export default function Home() {
    const [checked, setChecked] = useState<boolean[]>(
        Array(pages.length).fill(false)
    );

    const allChecked = checked.every(Boolean);

    const toggleAll = () => {
        setChecked(
            allChecked
                ? Array(pages.length).fill(false)
                : Array(pages.length).fill(true)
        );
    };

    const toggleOne = (index: number) => {
        setChecked((prev) => {
            const copy = [...prev];
            copy[index] = !copy[index];
            return copy;
        });
    };

    const handleDone = () => {
        const selected = pages.filter((_, i) => checked[i]);
        console.log("Selected pages:", selected);
    };

    return (
        <main className="page">
            <section className="card">
                <div className="card-row card-row--first">
                    <span className="card-label">All pages</span>
                    <Checkbox checked={allChecked} onChange={toggleAll} />
                </div>

                <div className="divider" />

                {pages.map((label, i) => (
                    <div className="card-row" key={label}>
                        <span className="card-label">{label}</span>
                        <Checkbox
                            checked={checked[i]}
                            onChange={() => toggleOne(i)}
                        />
                    </div>
                ))}

                <div className="divider divider--bottom" />

                <button className="btn-primary" type="button" onClick={handleDone}>
                    Done
                </button>
            </section>
        </main>
    );
}
