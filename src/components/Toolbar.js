import { useContext } from 'react'
import styles from '../stylesheets/css modules/toolbar.module.css'
import { VideoContext } from '../contexts/VideoContext'

// icons
import { IconContext } from 'react-icons'
import { MdFolderShared } from 'react-icons/md'
import { RiArtboardFill } from 'react-icons/ri'
import { IoMdChatbubbles } from 'react-icons/io'

export default function Toolbar() {

    // eslint-disable-next-line no-unused-vars
    const { vid, setVid, shareScreen } = useContext(VideoContext)


    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbox}>
                <IconContext.Provider value={{ size: '3em', className: 'tool' }}>
                    <MdFolderShared />
                    <div onClick={() => {
                        setVid(!vid)
                    }}> <RiArtboardFill /> </div>
                    <IoMdChatbubbles />
                    <button onClick={shareScreen}>Share screen</button>
                </IconContext.Provider>
            </div>
        </div>
    )
}