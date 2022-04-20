/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return(
        <>
     <div>
  <footer className=" mt-4 " style={{backgroundColor: '#f2f3f4'}}>
    <div className="container ">
      <div className="row mt-3 ">
        <div className="col-sm ">
          <div className="mt-3 circle ">
            <ul>
              <h5 className=" text-center">FOLLOW US</h5>
              <hr />
            </ul>
            <ul className="text-center">
              <a href=" https://www.facebook.com/moment.housee/ ">
                <i className="bi bi-facebook  " />
              </a>
              <a href="https://instagram.com/moment.housee?utm_medium=copy_link ">
                <i className="bi bi-instagram  " />
              </a>
              <a href="https://shopee.vn/momenthousee ">
                <i className="bi bi-bag"> </i>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-sm ">
          <ul className="mt-3 ">
            <h5 className=" text-center">CHÍNH SÁCH</h5>
            <hr className="text-center" />
            <li>
              <a href=" ">Chính sách giao hàng</a>
            </li>
            <li className="mt-3">
              <a href=" "> CHÍNH SÁCH ĐỔI TRẢ HÀNG</a>
            </li>
          </ul>
        </div>
        <div className="col-sm ">
          <ul className="mt-3 ">
            <h5 className=" text-center">STORE &amp; CONTACT</h5>
            <hr className="text-center" />
            <li>
              <p> Hotline: 0373 28 942 - 0352 726 697</p>
            </li>
            <li>
              <p>Website: momenthouse.vn</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <footer className="mt-2 " style={{backgroundColor: '#f2f3f4', marginBottom: '-20px'}}>
    <div className="container text-center ">
      <p>Copyright © 2021 by Moment House . Design by Nina</p>
    </div>
  </footer>
</div>

        </>
    )
}
export default Footer;