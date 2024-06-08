import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [todos,changeData]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
          changeData(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
      return (
        <div>
            <NavBar/>
            <br />
            <div class="card text-center mb-3">
      <div class="card-body">
        <h5 class="card-title">To-Do List</h5>
        <p></p>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">User Id</th>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Completed</th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map(
            (value,index)=>{
              return <tr>
              <td>{value.userId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{""+value.completed}</td>
            </tr>
            }
          )
        }
        
      </tbody>
    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
    <br />
        </div>
      )
}

export default View