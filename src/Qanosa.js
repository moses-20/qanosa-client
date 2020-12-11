// components
import Board from './components/Board'
import Toolbar from './components/Toolbar'

// icons
// import { IconContext } from 'react-icons'
// import { AiFillInfoCircle } from 'react-icons/ai'

export default function Qanosa() {
  return (
    <div className='qanosa'>
      <div className='info-whbd'>
        <div> <h4> Yamah Knoorls </h4> </div>
        <div> <h3> WhiteBoard Qanosa </h3> </div>
        <div> <h4> Active: <span> 15 </span> | Questions: <span> 2 </span> | Info: <span> 🤔 </span> </h4></div>
      </div>
      <Board />
      <Toolbar />
    </div>
  )
}

