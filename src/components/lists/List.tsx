import React,{FC} from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import { Crud } from '../interfaces';
 interface propsLI {
    cruds:Crud[];
    update(id:number):void;
    Delete(id:number):void;
}
const List:FC<propsLI> = ({cruds,Delete,update}) => {
  return (
<React.Fragment>
        <Grid container component={"ul"}  sx={{p:"0px",m:"0px"}}>
        <Grid item component={'li'}  sx={{width:"20px",border:"1px solid gray",p:"3px",textAlign:"center"}} >
              m
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
              name
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
              age
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
              address
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
              update | delete
        </Grid>
    </Grid>
{
    cruds.map((i:Crud,idx:number)=>{
        return(
<Grid container component={"ul"}  sx={{p:"0px",m:"0px"}} key={idx}>
          <Grid item component={'li'}  sx={{width:"20px",border:"1px solid gray",p:"3px",textAlign:"center"}} >
              {i.id}
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
              {i.name}
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
              {i.age}
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
             { i.addres}
        </Grid>
        <Grid item component={'li'} xs sx={{border:"1px solid gray",p:"3px",textAlign:"center"}} >
              <Button onClick={()=> update(i.id)} variant='contained'>update</Button> |
              <Button onClick={()=> Delete(i.id)} variant='contained' sx={{background:"red",color:"white",mx:"10px"}}>delete</Button> 
        </Grid>
    </Grid>
        )
    })
}
    
    </React.Fragment>
 

  )
}

export default List