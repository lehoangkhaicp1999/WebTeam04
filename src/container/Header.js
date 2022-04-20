import { Link, NavLink } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
    return(
        <>
      <header className=" bg-light sticky-top">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient">
      <div className="container-fluid">
     
        <a className="navbar-brand" to="/Home" href="/Home">
          <img src={require("../img/logo.png")} alt="logo" />
        </a>
        {/* reponesive sm */}
          <a href className="d-none d-sm-block d-lg-none nav-item login_sm me-lg-3" title="đăng nhập">
            <i className=" bi me bi-box-arrow-in-right" />
          </a>
          <a href=" " className="d-sm-block d-none d-lg-none  nav-item giohang_sm mt-lg-3 " title="giỏ hàng">
            <i className="bi bi-cart2 " />
            <span className="count-cart_sm">0</span>
          </a>
            {/* reponesive xs */}
            <a href className="d-block d-sm-none d-lg-none nav-item login_xs me-lg-3" title="đăng nhập">
            <i className=" bi me bi-box-arrow-in-right" />
          </a>
          <a href=" " className="d-sm-none d-xs-block d-lg-none  nav-item giohang_xs mt-lg-3 " title="giỏ hàng">
            <i className="bi bi-cart2 " />
            <span className="count-cart_xs">0</span>
          </a>
         
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className=" menu collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar_span">
            <li className="d-lg-none nav-item dropdown">
              <a href="#submenu6" data-bs-toggle="collapse" className="nav-link px-0  align-middle me-3 " >
                <li className="d-sm-inline dropdown-toggle" >Quần Áo</li> </a>
              <ul className="collapse nav flex-column " id="submenu6" data-bs-parent="#menu">
                <li className="w-100">
                  <a href="#submenu7" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
                    <span className=" d-sm-inline dropdown-toggle">BLACK FRIDAY</span> </a>
                  <ul className="collapse nav flex-column " id="submenu7" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="/CropTop-49k" className="nav-link px-0"> <span className=" d-sm-inline">CROPTOP ĐỒNG GIÁ 49K</span></a>
                    </li>
                  </ul>
                </li>
                <li className="w-100">
                  <a href="#submenu8" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
                    <span className=" d-sm-inline dropdown-toggle">VEST</span> </a>
                  <ul className="collapse nav flex-column " id="submenu8" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="/Vest-9-tac" className="nav-link px-0"> <span className=" d-sm-inline">VEST 9 Tắc </span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Vest-Nap" className="nav-link px-0"> <span className=" d-sm-inline">VEST NẮP</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Vest-Vay" className="nav-link px-0"> <span className=" d-sm-inline">VEST VÁY</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Vest-Dui" className="nav-link px-0"> <span className=" d-sm-inline">VEST ĐÙI</span></a>
                    </li>
                  </ul>
                </li>
                <li className="w-100">
                  <a href="/BLAZER" className="nav-link px-0 align-middle">
                    <span className="d-sm-inline">BLAZER</span></a>
                </li>
                <li className="w-100">
                  <a href="#submenu9" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
                    <span className=" d-sm-inline dropdown-toggle">QUẦN VẢI</span> </a>
                  <ul className="collapse nav flex-column " id="submenu9" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="/Quan-Ong-Suong-Dung" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN ỐNG SUÔNG ĐỨNG </span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Quan-Ong-Rong" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN ỐNG RỘNG</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Quan-Ong-Loe" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN ỐNG LOE</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Quan-Baggy" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN BAGGY</span></a>
                    </li>
                  </ul>
                </li>
                <li className="w-100">
                  <a href="#submenu10" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
                    <span className=" d-sm-inline dropdown-toggle">JEANS</span> </a>
                  <ul className="collapse nav flex-column " id="submenu10" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="/Jean-Ong-Dung" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN ỐNG ĐỨNG</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Jean-Ong-Loe" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN ỐNG LOE</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Jean-Ong-Rong" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN ỐNG RỘNG</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Jean-Baggy" className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN BAGGY</span></a>
                    </li>
                  </ul>
                </li>
                <li className="w-100">
                  <a href="/Quan-Short" className="nav-link px-0 align-middle">
                    <span className="d-sm-inline ">QUẦN SHORT</span></a>
                </li>
                <li className="w-100">
                  <a href="/Chan-Vay" className="nav-link px-0 align-middle">
                    <span className="d-sm-inline">CHÂN VÁY</span></a>
                </li>
                <li className="w-100">
                  <a href="#submenu11" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
                    <span className=" d-sm-inline dropdown-toggle">ÁO SƠ MI/ ÁO KIỂU</span> </a>
                  <ul className="collapse nav flex-column " id="submenu11" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="/Ao-So-Mi" className="nav-link px-0"> <span className=" d-sm-inline">ÁO SƠ MI</span></a>
                    </li>
                    <li className="w-100">
                      <a href="/Ao-Kieu" className="nav-link px-0"> <span className=" d-sm-inline">ÁO KIỂU</span></a>
                    </li>
                  </ul>
                </li>
                <li className="w-100">
                  <a href="/Ao-CropTop" className="nav-link px-0 align-middle">
                    <span className="d-sm-inline">ÁO CROPTOP</span></a>
                </li>
                <li className="w-100">
                  <a href="/Dam" className="nav-link px-0 align-middle">
                    <span className="d-sm-inline">ĐẦM</span></a>
                </li>
                <li className="w-100">
                  <a href="Set" className="nav-link px-0 align-middle">
                    <span className="d-sm-inline">SET</span></a>
                </li>
              </ul>
            </li>
            <li className="d-none d-lg-block nav-item me-3">
              <Link className="nav-link" href="#" to="/QuanAo">Quần Áo</Link>
            </li>
            <li className="d-lg-none nav-item me-3">
              <a className="nav-link" href="/PhuKien" >Phụ Kiện</a>
            </li>
            <li className="d-none d-lg-block nav-item me-3">
              <NavLink className="nav-link" to="/PhuKien" >Phụ Kiện</NavLink>
            </li>
            <li className="d-lg-none  nav-item  me-3" >
              <a className="nav-link" href="/SaleOff" >Sale Off</a>
            </li>
            <li className="d-none d-lg-block nav-item me-3">
              <NavLink className="nav-link" to="/SaleOff" >Sale Off</NavLink>
            </li>
            <li className="d-lg-none nav-item  me-3">
            <a className=" nav-link"  href="/SanPhamMoi" >
            Sản Phẩm Mới
            </a>
              {/* <NavLink className="nav-link"  href="#" to="/SanPhamMoi">Sản Phẩm Mới</NavLink> */}
            </li>
            <li className="d-none d-lg-block nav-item me-3">
              <NavLink className="nav-link" to="/SanPhamMoi" >Sản Phẩm Mới</NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success " type="submit">Search</button>
          </form>
          <a href className="d-lg-block d-none nav-item circle me-lg-3" title="đăng nhập">
            <i className=" bi me bi-box-arrow-in-right" />
          </a>
          <a href className="d-lg-block d-none nav-item circle shopping mt-lg-3 " title="giỏ hàng">
            <i className="bi bi-cart2" />
            <span className="count-cart">0</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</header>

        </>
    )
}
export default Header;