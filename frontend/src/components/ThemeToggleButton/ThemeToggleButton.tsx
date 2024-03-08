'use client'

import { Switch } from "@nextui-org/react"
import { useTheme } from "next-themes"
import { IoIosMoon, IoIosSunny } from "react-icons/io"

interface ThemeToggleButtonProps {
}
const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ }) => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const isSelected = theme === "dark"

    const thumbIcon = ({ isSelected, className }: { isSelected: boolean, className: string }) =>
    isSelected ? (
        <IoIosMoon className={className} />
    ) : (
        <IoIosSunny className={className} />
    )
    return (
        <Switch
            isSelected={isSelected}
            onChange={toggleTheme}
            size="lg"
            color="secondary"
            thumbIcon={thumbIcon
            }
        />
    )
}

export default ThemeToggleButton