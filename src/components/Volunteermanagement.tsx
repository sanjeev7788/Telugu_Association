import { Box ,Button,Grid,InputAdornment,TextField,Typography} from "@mui/material"
import { Custombutton, Filterbutton, Subscriptionbutton } from "../adminstyles/MembershiptableStyles"
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import FilterListIcon from '@mui/icons-material/FilterList';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleIcon from '@mui/icons-material/Circle';
import Paginationcomponent from "./Pagination";
import {useNavigate } from "react-router-dom";


const Volunteermanagement = () => {
  const navigate=useNavigate()


    const tabledata=[
        {sno:1,name:'Tanuja Abhilash',email:'tanuja@gmail.com',phone:'+18103303039',joineddate:'Mar15,2025',status:"Active",action:''},
        {sno:2,name:'Tanuja Abhilash',email:'tanuja@gmail.com',phone:'+18103303039',joineddate:'Mar15,2025',status:"Active",action:''},
        {sno:3,name:'Tanuja Abhilash',email:'tanuja@gmail.com',phone:'+18103303039',joineddate:'Mar15,2025',status:"Active",action:''},
        {sno:4,name:'Tanuja Abhilash',email:'tanuja@gmail.com',phone:'+18103303039',joineddate:'Mar15,2025',status:"Active",action:''},
        {sno:5,name:'Tanuja Abhilash',email:'tanuja@gmail.com',phone:'+18103303039',joineddate:'Mar15,2025',status:"Active",action:''},
        {sno:6,name:'Tanuja Abhilash',email:'tanuja@gmail.com',phone:'+18103303039',joineddate:'Mar15,2025',status:"Active",action:''},
        
      ]
  

  return (
    <Box>
    
   <Grid container>
       <Grid size={{lg:6,md:6,sm:6,xs:6}}>
            <Typography variant="h5" color='#3DB80C'>Volunteer Management</Typography>   
       </Grid>
       <Grid size={{lg:6,md:6,sm:6,xs:6}}>
           <Box display="flex" justifyContent="flex-end" gap="10px">
            <Subscriptionbutton >Membership Management</Subscriptionbutton>
            <Subscriptionbutton >Subscription Plans</Subscriptionbutton>   
            </Box>
          </Grid>
         {/* search line */}
         <Grid size={{lg:6,md:6,sm:6,xs:6}}>
               <TextField 
                     type='search'
                     placeholder='Search'
                     size="small"
                     
                     slotProps={{
                       input: {
                         startAdornment: <InputAdornment position="start">
                           <SearchIcon sx={{color:"#3DB80C"}}/>
                         </InputAdornment>,
                       }
                      }}  
                      sx={{
                       '& .MuiOutlinedInput-root': {
                         '& fieldset': {
                           borderColor: '#3DB80C', 
                           borderRadius:'10px'
                         },
                         '&:hover fieldset': {
                           borderColor: '#3DB80C', 
                         },
                         '&.Mui-focused fieldset': {
                           borderColor: '#3DB80C', 
                         },
                       },
                       '& input::placeholder': {
                         color: '#3DB80C',
                         opacity: 1,
                       },
                       width:{lg:'500px',md:'500px'},
                       borderRadius:'10px',
                       background:"white",
                       marginTop:"20px"
                     }}
                    />
         </Grid>
         <Grid size={{lg:6,md:6,sm:12,xs:12}}>
             <Box display="flex" 
                  
                  gap="20px" 
                  sx={{marginTop:{xs:2}, justifyContent:{lg:'flex-end',md:'flex-end',sm:'flex-start'
             }}}>
               <Custombutton startIcon={<AddIcon/>} onClick={()=>navigate('addvolunteer')}>
                 Add Volunteer
               </Custombutton>
                <Custombutton variant="contained" startIcon={<UploadIcon />} >
                Bulk Upload
                </Custombutton>
               <Custombutton startIcon={<UploadIcon />}>
                 Export
               </Custombutton>
               <Filterbutton variant="outlined" startIcon={<FilterListIcon />}>
                 Filters
                 </Filterbutton>
                </Box>
            </Grid>
         {/* table data */}     
         <Grid size={{lg:12,md:12,sm:12,xs:12}}>
   <TableContainer component={Paper} sx={{marginTop:"10px",background:"white"}}>
<Table sx={{ minWidth: 650 }} size="small">
<TableHead   sx={{
        border: '2px solid #3DB80C',         
                 
      }}>
          <TableRow 
           sx={{
            fontWeight: 'bold',                
            '& .MuiTableCell-head': {
              fontWeight: 'bold',              
              color: '#3DB80C',                
              borderBottom: 'none',            
            },
          }}>
            <TableCell>S.No</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Joined Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {
            tabledata.map(data=>(
             <TableRow key={data.sno}
             
             >
              <TableCell>{data.sno}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.joineddate}</TableCell>
              <TableCell sx={{color:"#3DB80C"}}>
              {data.status&& ( <CircleIcon  sx={{fontSize:"11px"}}/>)}
                {data.status}</TableCell>
              <TableCell><Button
        variant="text"
        startIcon={<EditIcon />}
        endIcon={<ArrowDropDownIcon />}
        sx={{ textTransform: 'none', color: '#555555'}} 
      >
        Edit
      </Button></TableCell>
              
             </TableRow>


            ))
          }
        </TableBody>
   </Table>
  </TableContainer>

   </Grid>
</Grid>   
<Paginationcomponent />    
</Box>
  )
}

export default Volunteermanagement
