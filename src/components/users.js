import React from 'react'
import { useParams } from "react-router-dom";

const Users = () =>{
            let params = useParams();
            return (
            <div>
                <h1>Usuarios</h1>
                <h3>{params.id}</h3>
               
            </div>)

    }

export default Users;

