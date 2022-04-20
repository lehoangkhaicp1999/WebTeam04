
const Home = () => {
    return ( 
        <>
  <main style={{backgroundColor: '#ffffff'}}>
  <div className="row">
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <a href=" ">
            <img src={require("../img/banner-web-1.png")} className="d-block w-100" alt="..." />
          </a>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <a  href=" ">
            <img src={require("../img/banner-web-w.png")} className="d-block w-100" alt="..." />
          </a>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon " aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div className="container">
  <div className="row">
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active"  data-bs-interval={10000}>
        <div className="row mt-4 items_list">
          <div className="col col-lg">
            <a  href=" " title="Quần Áo">
              <img src={require("../img/anh0.jpg")} className="img-thumbnail rounded-pill " alt="..." />
            </a>
          </div>
          <div className="col col-lg">
            <a  href=" ">
              <img src={require("../img/anh1.jpg")} className="img-thumbnail rounded-pill " alt="..." />
            </a>
          </div>
          <div className="col col-lg">
            <a  href=" ">
              <img src={require("../img/anh2.jpg")} className="img-thumbnail rounded-pill " alt="..." />
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <div className="row mt-4  items_list">
          <div className="col col-lg">
            <a  href=" ">
              <img src={require("../img/anh3.png")}className="img-thumbnail rounded-pill " alt="..." />
            </a>
          </div>
          <div className="col col-lg">
            <a  href=" "> <img src={require("../img/anh4.jpg")} className="img-thumbnail rounded-pill " alt="..." /></a>
          </div>
          <div className="col col-lg">
            <a  href=" ">
              <img src={require("../img/anh5.jpg")} className="img-thumbnail rounded-pill " alt="..." />
            </a>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon " aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  </div>
  {/* new arrival */}
  <div className="container">
    <div className="row mt-4 size">
     
      <img title="new arrival" src={require("../img/N.jpg")} alt=" " />
    </div>
    <div className="row">
      <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="row">
          <div className="carousel-inner items_list">
            <div className="carousel-item active">
              <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="carousel-indicators center">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active " aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* 
  best seller */}
  <div className="container mt-5">
    <div className="row">
 
      <img src={require("../img/bestsale.png")} alt="" />
    </div>
  </div>
  <div className="container">
    <div className="row  mt-4 size">
      <img src={require("../img/bsleimg.jpg")} alt="" />
    </div>
    <div className="row">
      <div id="bestsale" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="row">
          <div className="carousel-inner items_list">
            <div className="carousel-item active">
              <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="carousel-indicators center">
            <button type="button" data-bs-target="#bestsale" data-bs-slide-to={0} className="active justify-content-center" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#bestsale" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#bestsale" data-bs-slide-to={2} aria-label="Slide 3" />
            <button type="button" data-bs-target="#bestsale" data-bs-slide-to={3} aria-label="Slide 4" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* sale off */}
  <div className="container mt-5 ">
    <div className="row ">
      <img src={require("../img/saleoffbg.png")} alt="" />
    </div>
  </div>
  <div className="container">
    <div className="row mt-4 size">
      <img src={require("../img/saleoff.jpg")} alt="" />
    </div>
    <div className="row">
      <div id="saleoff" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="row">
          <div className="carousel-inner items_list">
            <div className="carousel-item active">
              <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row des_pr">
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>           
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <a  href=" ">
                    <div className="sale">13%</div>
                    <img src={require("../img/z257453020861241bdd988368cdf773d89a41d9bdf5504-6021.jpg")} className="img-fluid " alt="..." />
                  </a>
                  <h6 className="mt-2 text-center">
                    <a  href=" ">  ÁO PROTOP PLOLOR</a>
                  </h6>
                  <div className="des_pr_price">
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="p_old">200.000</p>
                      </div>
                      <div className="col-6">
                        <p>170.000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className="row mt-5">
          <div className="carousel-indicators center">
            <button type="button" data-bs-target="#saleoff" data-bs-slide-to={0} className="active justify-content-center" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#saleoff" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#saleoff" data-bs-slide-to={2} aria-label="Slide 3 " />
            <button type="button " data-bs-target="#saleoff " data-bs-slide-to={3 } aria-label="Slide 4 " />
          </div>
        </div>
      </div>
    </div>
  </div>
  <img className="mt-4" src={require("../img/bgbanner.png")} alt=" " />
</main>

        </>
     );
}
 
export default Home ;