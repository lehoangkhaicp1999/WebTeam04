import Sidebar from '../container/Sidebar';
import { Link } from 'react-router-dom';

const Jean3 = () => {
    return ( 
        <>
           <div className="container mt-4">
  <div className="row">
   <Sidebar/>
    <div className="col col-lg-9">
      <div className="row"><img src={require("../img/sale_quanao.jpg")} alt=" " /></div>
      <div className="row mt-4 mb-1 size"><nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/Home">Trang Chủ</Link></li>
            <li className="breadcrumb-item"><Link to="/QuanAo">Quần Áo</Link></li>
            <li className="breadcrumb-item " aria-current="page">Jeans</li>
            <li className="breadcrumb-item active" aria-current="page">Quần Jean Ống Rộng</li>
          </ol>
        </nav></div>
      <div className="row">
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="row">
            <div className="carousel-inner items_list">
              <div className="carousel-item active">
                <div className="row des_pr">
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">13%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." />
                    </a>
                    <h6 className="mt-2 text-center">
                      <a href>  ÁO PROTOP PLOLOR</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">13%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href> ÁO ỐNG THUN XỊN</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")}className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">13%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." />
                    </a>
                    <h6 className="mt-2 text-center">
                      <a href>  ÁO PROTOP PLOLOR</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">13%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href> ÁO ỐNG THUN XỊN</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">0,1%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
                  <div className="col-6 col-lg-4">
                    <a href>
                      <div className="sale">20%</div>
                      <img src={require("../img/anharo2.jpg")} className="img-fluid " alt="..." /></a>
                    <h6 className="mt-2 text-center">
                      <a href>  ĐẦM 2S THUN GỢN SÓNG</a>
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
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active justify-content-center" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Jean3 ;