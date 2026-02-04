import { Variants } from "framer-motion";

export const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        }
    }
};

export const mobileMenuVariants: Variants = {
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    open: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

export const menuItemVariants: Variants = {
    closed: {
        x: -50,
        opacity: 0
    },
    open: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.3,
            ease: "easeOut"
        }
    })
};

export const iconVariants: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
};

export const pathVariants: Variants = {
    closed: { pathLength: 0 },
    open: { pathLength: 1 }
};