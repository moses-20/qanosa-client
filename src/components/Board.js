import { useRef, useEffect } from 'react'


// styling
import styles from '../stylesheets/css modules/board.module.css'

export default function Board(props) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.fillstyle = '#47cfab'
        context.fillRect(0, 0, context.canvas.width, context.canvas.heigth)
    }, [])

    return (
        <div className={styles.board}>
            <canvas ref={canvasRef} {...props} />
        </div>
    )
}