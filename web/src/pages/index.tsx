import { debugData } from '@/utils/debugData'
import { fetchNui } from '@/utils/fetchNui'

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true
  }
])

function App() {
  return <div className=''>Alo</div>
}

export default App
