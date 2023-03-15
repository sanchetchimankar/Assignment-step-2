import React from "react";
import { useState } from "react";
import {Nav} from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const Dashboard = () =>{
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"  >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Customer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Configuration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>  
  );
};


export default Dashboard;
