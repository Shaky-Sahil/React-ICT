import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import './Home.css'
import axios from 'axios'

const Home = () => {
    const [value,setValue] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            console.log(response)
            setValue(response.data.users)
        axios.get('https://cat-fact.herokuapp.com/facts').then((res)=>{
            console.log(res.data[0].text)
            alert(res.data[Math.floor(Math.random()*6)].text)
        })
        }
        )
    },[])
  return (
    <div>
    <Table className='tbl'>
        <TableHead>
            <TableRow className='trow'>
                <TableCell className='tcell'>First Name</TableCell>
                <TableCell className='tcell'>Last Name</TableCell>
                <TableCell className='tcell'>Age</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {value.map((v,i)=>(
                <TableRow key={i}>
                <TableCell>{v.firstName}</TableCell>
                <TableCell>{v.lastName}</TableCell>
                <TableCell>{v.age}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </div>
  )
}

export default Home
