
import Home from './pages/Home';
import Quanao from './pages/Quanao';
import PhuKien from './pages/PhuKien';
import Saleoff from './pages/Saleoff';
import SanPhamMoi from './pages/SanPhamMoi';
import Vest1 from './pages_listQuanAo_Vest/Vest-9-tac';
import Vest2 from './pages_listQuanAo_Vest/Vest-nap';
import Vest3 from './pages_listQuanAo_Vest/Vest-vay';
import Vest4 from './pages_listQuanAo_Vest/Vest-dui';
import Croptop from './pages_listQuanAo/Croptop-49k';
import Blazer from './pages_listQuanAo/Blazer';
import Quanvai1 from './pages_listQuanAo_QuanVai/Quan-Ong-Suong-Dung';
import Quanvai2 from './pages_listQuanAo_QuanVai/Quan-Ong-Rong';
import Quanvai3 from './pages_listQuanAo_QuanVai/Quan-Ong-Loe';
import Quanvai4 from './pages_listQuanAo_QuanVai/Quan-Baggy';
import Jean1 from './pages_listQuanAo_Jeans/Jean-Ong-Dung';
import Jean2 from './pages_listQuanAo_Jeans/Jean-Ong-Loe';
import Jean3 from './pages_listQuanAo_Jeans/Jean-Ong-Rong';
import Jean4 from './pages_listQuanAo_Jeans/Jean-Baggy';
import Aosomi from './pages_listQuanAo_AoKieu/Aosomi';
import Aokieu from './pages_listQuanAo_AoKieu/Aokieu';
import Aocroptop from './pages_listQuanAo_AoKieu/AoCropTop';
import Dam from './pages_listQuanAo/Dam';
import Chanvay from './pages_listQuanAo/Chan-vay';
import Quanshort from './pages_listQuanAo/Quan-short';
import Set from './pages_listQuanAo/set';

const routes=[
  
  {path:"",component:<Home/>},
  {path:"/Home",component:<Home/>},
  {path:"/QuanAo",component:<Quanao/>},
  {path:"/PhuKien",component:<PhuKien/>},
  {path:"/SaleOff",component:<Saleoff/>},
  {path:"/SanPhamMoi",component:<SanPhamMoi/>},
  {path:"/Vest-9-tac",component:<Vest1/>},
  {path:"/Vest-Nap",component:<Vest2/>},
  {path:"/Vest-Vay",component:<Vest3/>},
  {path:"/Vest-Dui",component:<Vest4/>},
  {path:"/Croptop-49k",component:<Croptop/>},
  {path:"/BLAZER",component:<Blazer/>},
  {path:"/Quan-Ong-Suong-Dung",component:<Quanvai1/>},
  {path:"/Quan-Ong-Rong",component:<Quanvai2/>},
  {path:"/Quan-Ong-Loe",component:<Quanvai3/>},
  {path:"/Quan-Baggy",component:<Quanvai4/>},
  {path:"/Jean-Ong-Dung",component:<Jean1/>},
  {path:"/Jean-Ong-Loe",component:<Jean2/>},
  {path:"/Jean-Ong-Rong",component:<Jean3/>},
  {path:"/Jean-Baggy",component:<Jean4/>},
  {path:"/Ao-So-Mi",component:<Aosomi/>},
  {path:"/Ao-Kieu",component:<Aokieu/>},
  {path:"/Ao-CropTop",component:<Aocroptop/>},
  {path:"/Dam",component:<Dam/>},
  {path:"/Chan-Vay",component:<Chanvay/>},
  {path:"/Quan-Short",component:<Quanshort/>},
  {path:"/Set",component:<Set/>},




];
export default routes;