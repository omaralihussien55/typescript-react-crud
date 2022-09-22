import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/system';
import '../container/container.medule.css'
import Form from '../form/Form';
import { Crud } from '../interfaces';
import Lists from '../lists/Lists';
import List from '../lists/List';

const Item = styled("div")({
  backgroundColor:"gray",
  height:"100px",
  minWidth:"100px"
})



const Containers = () => {
  const [cruds ,setCrud] = useState<Crud[]>([])
  const [showEdit , setShowEdit] = useState<boolean>(false)
   const [objUpdate , setobjUpdate] = useState<any>({id:0,name:"",age:0,addres:""})
 const  addName = (crud:Crud):void =>{

    setCrud((prev)=> [...prev,crud])
    setShowEdit(false)
  
  console.log(cruds)
 }


 const  EditName = (crud:Crud):void =>{
  const items = cruds.map((i)=>{
    if(objUpdate.id == i.id){
      return {...i,name:crud.name,age:crud.age,addres:crud.addres}
    }else{
      return i
    }
  })

  setShowEdit(false)
  setCrud(items)
console.log(cruds)
}



 const update =(id:number):void=>{
  if(cruds.length >= 1){
    const item = cruds.find((i:Crud)=>{
      return i.id == id
    })
   
    setobjUpdate(item)
  }
  setShowEdit(true)
 }

 const Delete = (id:number):void=>{
const item = cruds.filter((i)=> i.id !== id)
setCrud(item)
 }

  return (
    <Container fixed >
      <Form addName={addName} cruds={cruds} objUpdate={objUpdate} showEdit={showEdit} EditName={EditName} />
        
      <Lists >
        <List cruds={cruds} update={update} Delete={Delete} ></List>
      </Lists>
    </Container>
  )
}

export default Containers