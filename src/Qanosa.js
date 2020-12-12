import { useContext } from 'react'
import { VideoContext } from './contexts/VideoContext'

// components
import Board from './components/Board'
import Toolbar from './components/Toolbar'
import VideoChat from './components/VideoChat'

export default function Qanosa() {

  const { vid } = useContext(VideoContext)

  return (
    <div className='qanosa'>
      <div className='info-whbd'>
        <div> <h4> Yamah Knoorls </h4> </div>
        <div> <h3> WhiteBoard Qanosa </h3> </div>
        <div> <h4> Active: <span> 15 </span> | Questions: <span> 2 </span> | Info: <span> 🤔 </span> </h4></div>
      </div>
      <div className='switch'>
        {vid ? <VideoChat /> : <Board />}
      </div>
      <Toolbar />
    </div>
  )
}

