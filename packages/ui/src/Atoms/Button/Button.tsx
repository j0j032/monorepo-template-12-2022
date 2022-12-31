import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    color?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = "medium",
    backgroundColor,
    color,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? styles.primary : styles.secondary;
    return (
        <button
            type="button"
            className={[styles.button, styles[size], mode].join(" ")}
            style={{ backgroundColor, color }}
            {...props}
        >
            {label}
        </button>
    );
};
