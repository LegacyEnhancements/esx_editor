import { debugData } from '@/utils/debugData'
import { fetchNui } from '@/utils/fetchNui'
import { NextPage } from 'next'

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true
  }
])

function App(): NextPage {
  return <div className=''>Alo</div>
}

export default App
