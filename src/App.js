import Qanosa from './Qanosa'
import VideoContextProvider from './contexts/VideoContext'

export default function App() {
  return (
    <div className='app'>
      <VideoContextProvider>
        <Qanosa />
      </VideoContextProvider>
    </div>
  );
}
