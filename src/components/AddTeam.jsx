import axios from 'axios'
import React, { useState } from 'react'

const AddTeam = () => {
    const [input, changeInput] = useState(

        {
            teamId: "",
            teamName: "",
            teamLeader: "",
            leaderEmail: "",
            leaderPhone: "",
            collegeName: "",
            numofMembers: "",
            projectTitle: "",
            problemState: "",
            technology: "",
            mentor: "",
            registrationDate: "",
            table: ""
        }

    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-team", input).then(

            (response) => {
                alert("Team added successfully")
            }

        ).catch(
            (error) => {
                console.error("error adding team", error)
                alert("failed to add team")
            }
        )
    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team ID</label>
                                <input type="text" className="form-control" name="teamId" value={input.teamId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Name</label>
                                <input type="text" className="form-control" name="teamName" value={input.teamName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">TeamLeader Name</label>
                                <input type="text" className="form-control" name="teamLeader" value={input.teamLeader} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Email</label>
                                <input type="text" className="form-control" name="leaderEmail" value={input.leaderEmail} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Phone</label>
                                <input type="text" className="form-control" name="leaderPhone" value={input.leaderPhone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">College Name</label>
                                <input type="text" className="form-control" name="collegeName" value={input.collegeName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">NumberOf Members</label>
                                <input type="text" className="form-control" name="numofMembers" value={input.numofMembers} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Project Title</label>
                                <input type="text" className="form-control" name="projectTitle" value={input.projectTitle} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Problem Statement</label>
                                <input type="text" className="form-control" name="problemState" value={input.problemState} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Technology</label>
                                <input type="text" className="form-control" name="technology" value={input.technology} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mentor Name</label>
                                <input type="text" className="form-control" name="mentor" value={input.mentor} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Registration Date</label>
                                <input type="date" className="form-control" name="registrationDate" value={input.registrationDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Table</label>
                                <input type="text" className="form-control" name="table" value={input.table} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTeam