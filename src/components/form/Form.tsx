import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik , FormikProps } from 'formik';
import { Crud } from '../interfaces';
import * as  Yup from 'yup'


interface  props {
  addName(crud:Crud):void;
  cruds : Crud[];
  objUpdate:Crud;
  showEdit:boolean;
  EditName(crud:Crud):void
}


const Form:FC<props> = ({addName,cruds,objUpdate,showEdit,EditName}) => {
  const formik: FormikProps<Crud> = useFormik<Crud>({
    initialValues:{
      id:0,
      name:"",
      age:0,
      addres:""

    },

    onSubmit :(values)=>{
       const data:Crud = {
          id: cruds && cruds.length + 1,
          name:values.name,
          addres:values.addres,
          age:values.age,
       }
       addName(data)
       values.name = "";
       values.addres="";
       values.age=0

      },
      validationSchema:Yup.object({
         name:Yup.string().required("name is required"),
         age:Yup.number().required("age required"),
         addres:Yup.string().required("addres required")
      })
  });


  const formikEdit: FormikProps<Crud> = useFormik<Crud>({
    initialValues:{
      id:objUpdate.id,
      name:objUpdate.name,
      age:objUpdate.age,
      addres:objUpdate.addres

    },
    onSubmit :(values)=>{

     
        const dataEdit:Crud = {
          id:objUpdate.id,
          name:values.name,
          addres:values.addres,
          age:values.age,
       }
      EditName(dataEdit)
      values.name = "";
      values.addres="";
      values.age=0
      

    },
    validationSchema:Yup.object({
      name:Yup.string().required("name is required"),
      age:Yup.number().required("age required"),
      addres:Yup.string().required("addres required")
   })

  });



  return (
   <React.Fragment>
    <h2 style={{textAlign:"center",margin:"10px"}}>{showEdit?"Edit Crud":"Add Crud"}</h2>
    {
      showEdit ? (
        <React.Fragment>
          
    
    <Box component={'form'} sx={{mt:"20px"}} onSubmit={formikEdit.handleSubmit}>

<Grid container spacing={2}>
        <Grid item xs={12}  md={6}>
        <TextField
             sx={{width:"100%"}}
             id="name"
             name="name"
              label="name"
         
             value={formikEdit.values.name}
             onChange={formikEdit.handleChange}
          />
             {formikEdit.errors.name && <p style={{color:"red"}}>{formikEdit.errors.name}</p>}  
        </Grid>

        <Grid item  xs={12}  md={6}  >
        <TextField
               sx={{width:"100%"}}
              id="age"
              name="age"
               label="age"
               type={"number"}
              onChange={formikEdit.handleChange}
          />
             {formikEdit.errors.age && <p style={{color:"red"}}>{formikEdit.errors.age}</p>}  
        </Grid>

        <Grid item  xs={12}  md={6}  >
        <TextField
              sx={{width:"100%"}}
             id="addres"
             name="addres"
              label="addres"
             value={formikEdit.values.addres}
             onChange={formikEdit.handleChange}
          />
             {formikEdit.errors.addres && <p style={{color:"red"}}>{formikEdit.errors.addres}</p>}  
        </Grid>


      
        
</Grid>
<Grid item  xs={12} sm={6} md={4} lg={2} sx={{my:"10px"}} >
        <TextField
               value={showEdit? "Edit":"Add" }
               type={"submit"}
               sx={{background:showEdit?"green":"blue",color:"white"}}
          />
       </Grid>

</Box>
        </React.Fragment>
      ):(
        <React.Fragment>
          
    
    <Box component={'form'} sx={{mt:"20px"}} onSubmit={formik.handleSubmit}>

<Grid container spacing={2}>
        <Grid item xs={12}  md={6}>
        <TextField
          sx={{width:"100%"}}
             id="name"
             name="name"
              label="name"
             value={formik.values.name}
             onChange={formik.handleChange}
          />
          {formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}  
        </Grid>

        <Grid item  xs={12}  md={6}  >
        <TextField
              sx={{width:"100%"}}
              id="age"
              name="age"
               label="age"
               type={"number"}
              value={formik.values.age}
              onChange={formik.handleChange}
          />
              {formik.errors.age && <p style={{color:"red"}}>{formik.errors.age}</p>}  
        </Grid>

        <Grid item  xs={12}  md={6}  >
        <TextField
            sx={{width:"100%"}}
             id="addres"
             name="addres"
              label="addres"
             value={formik.values.addres}
             onChange={formik.handleChange}
          />
              {formik.errors.addres && <p style={{color:"red"}}>{formik.errors.addres}</p>}  
        </Grid>


      
        
</Grid>
<Grid item  xs={12} sm={6} md={4} lg={2} sx={{my:"10px"}} >
        <TextField
               value={showEdit? "Edit":"Add" }
               type={"submit"}
               sx={{background:showEdit?"green":"blue",color:"white"}}
          />
        </Grid>

</Box>
        </React.Fragment>
      )
    }
   </React.Fragment>
  )
}

export default Form