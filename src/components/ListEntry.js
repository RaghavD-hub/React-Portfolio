import React, { useState } from 'react'
import styles from './listentry.module.css'
import ReactMarkdown from 'react-markdown'

export default function ListEntry(props) {
    const { title, date, children, active, onClick, onMouseEnter, onMouseLeave } = props
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
        if (onMouseEnter) onMouseEnter()
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        if (onMouseLeave) onMouseLeave()
    }

    return (
        <div
            className={active ? styles.listEntryWrapperActive : styles.listEntryWrapper}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.headerWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <h1 className={styles.date}>{date}</h1>
            </div>
            {(active || isHovered) && (
                <div className={styles.markdownContent}>
                    <ReactMarkdown>{children}</ReactMarkdown>
                </div>
            )}
        </div>
    )
}
