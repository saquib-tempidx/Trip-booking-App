import React from 'react'
import './Home.css'

export default function Home() {
    return (
        
    <div>

     <h1>MyTrip Destinations</h1>
        <div class="container" >
        <div class="row products" style={{marginTop:"7%"}}>

                        <div className="col-sm-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="/agra.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Agra</h5>
                                    <p className="card-text">Taj Mahal</p>
                                </div>
                                <div>
                                    <span>Ratings:  </span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="/coorg.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Coorg</h5>
                                    <p className="card-text">Raja's seat</p>
                                </div>
                                <div>
                                    <span>Ratings:  </span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="/kashmir.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Kashmir</h5>
                                    <p className="card-text">Dal lake</p>
                                </div>
                                <div>
                                    <span>Ratings:  </span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="/goa.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Goa</h5>
                                    <p className="card-text">Calangutte Beach</p>
                                </div>
                                <div>
                                    <span>Ratings:  </span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="/kerala.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Kerala</h5>
                                    <p className="card-text">Anamudi</p>
                                </div>
                                <div>
                                    <span>Ratings:  </span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="/mysore.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Mysore</h5>
                                    <p className="card-text">Mysore Palace</p>
                                </div>
                                <div>
                                    <span>Ratings:  </span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>

           

        </div>
        </div>
    </div>
    )
}
