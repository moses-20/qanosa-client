import { createContext, useState, useRef } from 'react'

export const VideoContext = createContext()

export default function VideoContextProvider(props) {

    const [vid, setVid] = useState(false)
    const senders = useRef([]);
    const userStream = useRef();

    const shareScreen = () => {
        navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(stream => {
            const screenTrack = stream.getTracks()[0];
            screenTrack.onended = function () {
                senders.current.find(sender => sender.track.kind === "video") //.replaceTrack(userStream.current.getTracks()[1]);
            }
        })
    }

    return (
        <VideoContext.Provider value={{ vid, setVid, senders, shareScreen, userStream }}>
            { props.children}
        </VideoContext.Provider>
    )
}