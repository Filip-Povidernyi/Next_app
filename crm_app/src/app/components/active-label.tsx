import React from "react";
import style from "./active-label.module.css"

export interface ActiveLabelProps {
    children: React.ReactNode;
}

export default function ({ children }: ActiveLabelProps) {
    return (
        <span className={style.label}>{children}</span>
    );
}