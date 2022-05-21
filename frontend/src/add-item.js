// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar/Navbar";
// import { useRouter } from "next/router";
// import {
//   getProjectByIdRequest,
//   createProjectRequest,
// } from "../services/projects-services";
// import jwt_decode from "jwt-decode";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function AddItem() {

return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1 className="text-center">Add Project</h1>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Title: </label>
                  <input
                    placeholder="Title"
                    name="title"
                    className="form-control"
                    //value={title}
                    //onChange={changeTitleHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Description: </label>
                  <input
                    placeholder="Description"
                    name="description"
                    className="form-control"
                    //value={description}
                    //onChange={changeDescriptionHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Salary: </label>
                  <input
                    placeholder="Salary"
                    name="salary"
                    className="form-control"
                    //value={salary}
                    //onChange={changeSalaryHandler}
                  />
                </div>
                <br></br>
                <button
                  className="btn btn-success"
                  //onClick={saveOrUpdateProject}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  //onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}