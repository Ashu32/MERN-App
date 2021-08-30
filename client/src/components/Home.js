import React from 'react';

const Home = () => {
    return (
      <div className="container-fluid ms-0 me-0 p-0">
          <div id="myCarousel" class="carousel slide m-0" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner m-0">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://image01.realme.net/general/20210817/1629198371332.jpg" alt="First slide" style={{maxHeight: 400}}/>
              </div>
              <div class="carousel-item">
                <img class="w-100" src="https://image01.realme.net/general/20210820/1629451027124.jpg" alt="Second slide"  style={{maxHeight: 400}}/>
              </div>
              <div class="carousel-item">
                <img class="w-100" src="https://image01.realme.net/general/20210817/1629203359095.jpg" alt="Third slide" style={{maxHeight: 400}}/>
              </div>
            </div>
            <button class="carousel-control-prev" data-bs-target="#myCarousel" type="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <a class="carousel-control-next" data-bs-target="#myCarousel" type="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
      
          <div className="container bg-light mt-3">
            <h2>SmartPhones</h2>
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pb-4">
                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210401/1617293941790.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                      <h3>realme C20</h3>
                      <p className="card-text">
                      Big battery. Mega display.          
                      </p>
                      <h3 className='text-danger'>₹ 7,499</h3>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210519/1621424163546.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                    <h3>realme C25</h3>
                    <p className="card-text">
                    Big battery, Processor          
                    </p>
                    <h3 className='text-danger'>₹ 8,499</h3>
                  </div>
                </div>
                </div>

                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210323/1616485282573.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                    <h3>realme 8</h3>
                    <p className="card-text">
                    In Style,Mega display.          
                    </p>
                    <h3 className='text-danger'>₹ 14,499</h3>
                  </div>
                </div>
                </div>

                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210609/1623253153556.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                    <h3>realme Narzo 30</h3>
                    <p className="card-text">
                    Unleash Peak Performance          
                    </p>
                    <h3 className='text-danger'>₹ 15,499</h3>
                  </div>
                </div>
                </div>

                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210401/1617293941790.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                    <h3>realme C20</h3>
                    <p className="card-text">
                    Big battery. Mega display.          
                    </p>
                    <h3 className='text-danger'>₹ 7,499</h3>
                  </div>
                </div>
                </div>

                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210519/1621424163546.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                    <h3>realme C25</h3>
                    <p className="card-text">
                    Big battery, Processor          
                    </p>
                    <h3 className='text-danger'>₹ 8,499</h3>
                  </div>
                </div>
                </div>

                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210323/1616485282573.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                    <h3>realme 8</h3>
                    <p className="card-text">
                    In Style,Mega display.          
                    </p>
                    <h3 className='text-danger'>₹ 14,499</h3>
                  </div>
                </div>
                </div>

                <div className="col">
                  <div className="card mt-4">
                    <img src='https://image01.realme.net/general/20210609/1623253153556.png' alt="img" className="img-fluid d-block mx-auto"/>
                    <div className="card-body">
                    <h3>realme Narzo 30</h3>
                    <p className="card-text">
                    Unleash Peak Performance          
                    </p>
                    <h3 className='text-danger'>₹ 15,499</h3>
                  </div>
                </div>
                </div>
            
        </div>
        </div>
            
        <div className="container-fluid bg-dark text-white m-0 ms-0 me-0">
          <div className="row">
            <div className="col-sm-12 col-md-10">
                <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </div>
            <div className="col-sm-12 col-md-2">
                <a href="#" style={{textDecoration: "none"}}>Back to top</a>
            </div>
          </div>
        </div>
    </div>
      
    );
};

export default Home;