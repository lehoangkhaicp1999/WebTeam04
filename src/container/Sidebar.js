const Sidebar = () => {
    return(
        <>
        <div className=" sidebar_span d-none d-lg-block col-12 col-sm-3">
  <ul>
    <h6 style={{fontSize: 20}}>Danh Mục Sản Phẩm</h6>
    <h6 style={{fontSize: 19}}>Quần áo</h6>
    <li>
      <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
        <span className=" d-sm-inline dropdown-toggle">BLACK FRIDAY</span> </a>
      <ul className="collapse nav flex-column " id="submenu1" data-bs-parent="#menu">
        <li className="w-100">
          <a href="/Croptop-49k " className="nav-link px-0"> <span className=" d-sm-inline">CROPTOP ĐỒNG GIÁ 49K</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#submenu2"  data-bs-toggle="collapse" className="nav-link px-0  align-middle">
      <span className=" d-sm-inline dropdown-toggle">VEST</span> </a>
      <ul className="collapse nav flex-column " id="submenu2" data-bs-parent="#menu">
        <li className="w-100">
          <a href="/Vest-9-tac " className="nav-link px-0"> <span className=" d-sm-inline">VEST 9 Tắc </span></a>
        </li>
        <li className="w-100">
          <a href="/Vest-Nap " className="nav-link px-0"> <span className=" d-sm-inline">VEST NẮP</span></a>
        </li>
        <li className="w-100">
          <a href="/Vest-Vay " className="nav-link px-0"> <span className=" d-sm-inline">VEST VÁY</span></a>
        </li>
        <li className="w-100">
          <a href="/Vest-Dui " className="nav-link px-0"> <span className=" d-sm-inline">VEST ĐÙI</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a href="/BLAZER" className="nav-link px-0 align-middle">
        <span className="d-sm-inline">BLAZER</span></a>
    </li>
    <li>
      <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
        <span className=" d-sm-inline dropdown-toggle">QUẦN VẢI</span> </a>
      <ul className="collapse nav flex-column " id="submenu3" data-bs-parent="#menu">
        <li className="w-100">
          <a href="/Quan-Ong-Suong-Dung " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN ỐNG SUÔNG ĐỨNG </span></a>
        </li>
        <li className="w-100">
          <a href="/Quan-Ong-Rong " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN ỐNG RỘNG</span></a>
        </li>
        <li className="w-100">
          <a href="/Quan-Ong-Loe " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN ỐNG LOE</span></a>
        </li>
        <li className="w-100">
          <a href="/Quan-Baggy " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN BAGGY</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#submenu4" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
        <span className=" d-sm-inline dropdown-toggle">JEANS</span> </a>
      <ul className="collapse nav flex-column " id="submenu4" data-bs-parent="#menu">
        <li className="w-100">
          <a href="/Jean-Ong-Dung " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN ỐNG ĐỨNG</span></a>
        </li>
        <li className="w-100">
          <a href="/Jean-Ong-Loe " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN ỐNG LOE</span></a>
        </li>
        <li className="w-100">
          <a href="/Jean-Ong-Rong " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN ỐNG RỘNG</span></a>
        </li>
        <li className="w-100">
          <a href="/Jean-Baggy " className="nav-link px-0"> <span className=" d-sm-inline">QUẦN JEAN BAGGY</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a href="/Quan-Short " className="nav-link px-0 align-middle">
        <span className="d-sm-inline ">QUẦN SHORT</span></a>
    </li>
    <li>
      <a href="/Chan-Vay " className="nav-link px-0 align-middle">
        <span className="d-sm-inline">CHÂN VÁY</span></a>
    </li>
    <li>
      <a href="#submenu5" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
        <span className=" d-sm-inline dropdown-toggle">ÁO SƠ MI/ ÁO KIỂU</span> </a>
      <ul className="collapse nav flex-column " id="submenu5" data-bs-parent="#menu">
        <li className="w-100">
          <a href="/Ao-So-Mi " className="nav-link px-0"> <span className=" d-sm-inline">ÁO SƠ MI</span></a>
        </li>
        <li className="w-100">
          <a href="/Ao-Kieu " className="nav-link px-0"> <span className=" d-sm-inline">ÁO KIỂU</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a href="/Ao-CropTop " className="nav-link px-0 align-middle">
        <span className="d-sm-inline">ÁO CROPTOP</span></a>
    </li>
    <li>
      <a href="/Dam " className="nav-link px-0 align-middle">
        <span className="d-sm-inline">ĐẦM</span></a>
    </li>
    <li>
      <a href="Set " className="nav-link px-0 align-middle">
        <span className="d-sm-inline">SET</span></a>
    </li>
    <h6 className="mt-2" style={{fontSize: 19}}>Phụ Kiện</h6>
    <img src={require("../img/hotdeal.jpg")} alt=" " />
  </ul>
</div>

        </>
    )
}
export default Sidebar ;