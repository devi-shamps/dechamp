import React, { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 1;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor: React.FC = () => {
    const cursorOutline = useRef<HTMLDivElement>(null);
    const [hoverButton, setHoverButton] = useState<boolean>(false);

    const animate = () => {
        let distX = mouseX - outlineX;
        let distY = mouseY - outlineY;

        outlineX = outlineX + distX * CURSOR_SPEED;
        outlineY = outlineY + distY * CURSOR_SPEED;

        if (cursorOutline.current) {
            cursorOutline.current.style.left = `${outlineX}px`;
            cursorOutline.current.style.top = `${outlineY}px`;
        }

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        const mouseEventsListener = document.addEventListener(
            "mousemove",
            function (event) {
                mouseX = event.pageX;
                mouseY = event.pageY;
            }
        );

        const animateEvent = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", mouseEventsListener);
            cancelAnimationFrame(animateEvent);
        };
    }, []);

    useEffect(() => {
        const mouseEventListener = document.addEventListener(
            "mouseover",
            function (e) {
                if (
                    e.target instanceof HTMLAnchorElement ||
                    e.target.parentElement instanceof HTMLAnchorElement ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement
                ) {
                    setHoverButton(true);
                } else {
                    setHoverButton(false);
                }
            }
        );

        return () => {
            document.removeEventListener("mouseover", mouseEventListener);
        };
    }, []);

    return (
        <div
            className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
                hoverButton
                    ? "bg-transparent border-2 border-indigo-900 w-5 h-5"
                    : "bg-indigo-500 w-3 h-3"
            }`}
            ref={cursorOutline}
        ></div>
    );
};
