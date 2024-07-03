import React from "react";
import style from "./non-active-label.module.css"

export interface NonActiveLabelProps {
    children: React.ReactNode;
}

export default function ({ children }: NonActiveLabelProps) {
    return (
        <span className={style.label}>{children}</span>
    );
}