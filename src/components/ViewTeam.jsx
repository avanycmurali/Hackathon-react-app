import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTeam = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:3000/view-team").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>

<table class="table">
                <thead>
                    <tr>
                        <th scope="col">teamId</th>
                        <th scope="col">teamName</th>
                        <th scope="col">teamLeader</th>
                        <th scope="col">leaderEmail</th>
                        <th scope="col">leaderPhone</th>
                        <th scope="col">collegeName</th>
                        <th scope="col">numofMembers</th>
                        <th scope="col">projectTitle</th>
                        <th scope="col">problemState</th>
                        <th scope="col">technology</th>
                        <th scope="col">mentor</th>
                        <th scope="col">registrationDate</th>
                        <th scope="col">table</th>
                    </tr>
                </thead>
                <tbody>

                {data.map(
                    (value,index)=>{
                        return(
                            <tr>
                                    <th scope="row">{value.teamId}</th>

                                    <td>{value.teamName}</td>
                                    <td>{value.teamLeader}</td>
                                    <td>{value.leaderEmail}</td>
                                    <td>{value.leaderPhone}</td>
                                    <td>{value.collegeName}</td>
                                    <td>{value.numofMembers}</td>                                    
                                    <td>{value.projectTitle}</td>                                
                                    <td>{value.problemState}</td>                                
                                    <td>{value.technology}</td>                                
                                    <td>{value.mentor}</td>                                
                                    <td>{value.registrationDate}</td>                                
                                    <td>{value.table}</td>                                

                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>


    </div>
  )
}

export default ViewTeam