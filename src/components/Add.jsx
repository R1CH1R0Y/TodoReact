import React from 'react'
import NavBar from './NavBar'

const Add = () => {
  return (
    <div>
        <NavBar/>
        <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Event</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">User Id :</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Id :</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Title :</label>
                                        <input type="text" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Completed :</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-outline-success">Add</button>
                </div>
            </div>
            <br />
    </div>
  )
}

export default Add