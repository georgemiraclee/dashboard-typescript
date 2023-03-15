
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillChatTextFill } from "react-icons/bs";
// import Image from 'next/image'

// import Logo from '../public/img/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect} from "react";


interface UserProps { 
  dataUsers : Array<any>;
}
//  const usernameValue = document.getElementById("username-value");
// const commentValue = document.getElementById("email-value");


export default function Users(props : UserProps) {
  const { dataUsers } = props;


  console.log(dataUsers);
   // Method : POST 


   const [username,setName]=useState("");
   const [comment,setComment]=useState("");

 
 



   function saveData()
   {
     let data={username, Comment}
     // verified
   
         console.warn(data);
     fetch("https://gorest.co.in/public/v2/comments", {
       method: "POST",
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       // body:JSON.stringify(data.data)
   
       body: JSON.stringify({
         data: {
          //  username: usernameValue.value,
          //  email: commentValue.value
  
         },
       }),
     })    .then((result)=>{
       result.json().then((resp)=>{
           console.warn(resp)
   
       })
   .then(() => location.reload());
   })
   // Reset input field to empty
   // titleValue.value = "";
   // bodyValue.value = "";
      
   
   }
   
   function deleteUser(id: any)
   {
       fetch(`https://gorest.co.in/public/v2/comments/${id}`,{
           method : 'DELETE'
       }).then((result)=>{
           result.json().then((resp)=>{
               console.warn(resp)

           })
     .then(() => location.reload());
       })
   }
  return (
    <>
     <div id="wrapper" >
        <div id="sidebar-wrapper">

            <ul className="sidebar-nav">
                <li className="sidebar-brand mb-5 mt-3 text-center ">
                   <h1 className='nav-title text-primary fs-1'> <strong><i><b>Blog <i className='text-dark'>Spot</i> </b></i></strong> </h1>
                </li>
                <li className="active">
                    <a href="index.html">
                        <i></i>
                        Dashboard
                    </a>
                </li>
                <li className="">
                    <a href="">
                        <i></i>
                        Segera Datang
                    </a>
                </li>
                {/* <li className="">
                    <a href="youtube.html">
                        <i className="fab fa-youtube"></i>
                        Youtube
                    </a>
                </li>
                <li className="">
                    <a href="#" className="text-danger">
                        <i className="fas fa-sign-out-alt"></i>
                        Logout
                    </a>
                </li> */}
            </ul>
        </div>
        <div className='data pt-3 p-4 '>
        

        <>
        <div className="blog card p-3 bg-light pt-5 border-0 mb-3 ">
              <div className="container">
                <div className="row">
                  <div className="col-5">
                  <div className="main-content text-center">
                  <img src='https://i.pinimg.com/originals/d7/dc/3b/d7dc3b37a0603484b6484a859e5bb786.gif' className='img-logo' alt="mypic"/>
                  <h2 className='mt-3'><strong>Dashboard Post</strong></h2>
                  <p>version 1.0</p>

                  </div>    
                  </div>

                  <div className="col-7">
                  <div className="main-content">
                  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} id="username-value" onChange={(e)=>{setName(e.target.value)}}   type="text" placeholder="Enter you name" />
        <Form.Text className="text-muted">
          Username Anda
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Komen</Form.Label>
        <Form.Control value={comment} id="comment-value" onChange={(e)=>{setComment(e.target.value)}}   type="text" placeholder="Masukan Komen Anda" />
      </Form.Group>
  
      <div className="row pt-2 pb-3">
      <div className="col-md-6 d-grid gap-2">
      <Button className='btn-create btn-block '  onClick={saveData} variant="primary" type="submit">
        Submit
      </Button>
      </div>
          <div className="col-md-6 d-grid gap-2 pt-2 pt-md-0">
          <Button className='btn-update btn-block' variant="outline-primary" type="submit">
        Update
      </Button>
          </div>
    
     

      </div>

     
    </Form>
                  </div>      
                  </div>
                </div>
              </div>

              </div>
              </>
         
                       <div className="col-lg-12 pt-3 pb-3 ">
                                <h2>List Post Unggahan</h2>
                    </div>
                    <div className="col-lg-12">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col" className='fs-4 p-0 col-2'><FaUserCircle className='mb-1'/>No ID</th>
                                      
                                                <th scope="col" className='fs-4 p-0 col-1'><FaUserCircle className='mb-1'/> Username</th>
                                                <th scope="col" className='fs-4 p-0 col-8'><BsFillChatTextFill className='mb-1'/>Komen</th>
                                                <th scope="col" className='fs-4 col-2'>  </th>
                                                {/* <th scope="col">Caption</th>
                                                <th scope="col">Link</th>
                                                <th scope="col">Dates</th>
                                                <th scope="col">Comments</th>
                                                <th scope="col">Views</th> */}
                                         
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                        {dataUsers.map((user) => (
                                              <>
                                            <tr>
                                            <td scope="row">{user.id}</td>
                                            
                                                <td scope="row">{user.name}</td>
                                                {/* <td>
                                                  <img src="https://via.placeholder.com/50x50" alt=""></td> */}
                                                 
                                                <td className="box">{user.body}</td>
                                           
                                                <td className='box text-center'>
                                                {/* <Button className='btn-detail m-2 btn-outline' variant="outline-primary" type="submit">
                                              Detail
                                            </Button> */}
                                            <Button className='btn-delete m-2 btn-outline' variant="outline-danger" onClick ={()=> deleteUser(user.id)} type="submit">
                                                  Hapus
                                                </Button>
                                                </td>
                                                {/* <td><a href="">Link</a></td>
                                                <td className="dates">07-07-2022</td>

                                                <td>12312</td>
                                                <td>1232</td> */}
                                            </tr>
                                            </>

                                                 ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
         
                </div>
      
                  </>
  );
}

    export async function getStaticProps() {
      const res = await fetch("https://gorest.co.in/public/v2/comments");
      const dataUsers = await res.json();
      return {
        props: {
          dataUsers,
        },
      };
    }
