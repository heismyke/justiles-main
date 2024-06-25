import { useState, useEffect } from "react";

const UseIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false)
    
    useEffect(() => {
        const updateMediaQuery = () => {
            setIsDesktop(window.innerWidth > 1024)
        }
        updateMediaQuery()
        window.addEventListener('resize', updateMediaQuery)
        return () => window.removeEventListener('resize', updateMediaQuery)

    }, [])

    return isDesktop
}

export default UseIsDesktop