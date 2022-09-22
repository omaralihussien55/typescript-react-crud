import React ,{FC} from 'react'
import List from './List'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
interface propsLists {
children:React.ReactNode
}
const Lists:FC<propsLists> = ({children}) => {
  return (
    <div>
   {children}
    </div>
  )
}

export default Lists
