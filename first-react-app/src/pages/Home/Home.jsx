import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import {ProductCard,Organic,Groca,
        Grocery,HeaderTitle,ProductCategories,
        ClientComponent,} from '../../components';
import {productCategoriesLink,latestNews} from '../../utils/data';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsArrowLeftRight,BsFillPersonFill,BsCalendarDateFill,BsTelephoneFill} from 'react-icons/bs';
import {BiSolidTruck} from 'react-icons/bi'
import {SlEarphones} from 'react-icons/sl';
import axios from 'axios';
import {getProduct} from '../../network/controllers/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';
const Home = () => {
  const [isArrowDown,setIsArrowDown]=useState(false);
  const [categorie,setCategorie]=useState('');
  const [productsCategories,setProductsCategories]=useState([]);
  const [times,setTimes]=useState({
    day:0,
    hours:0,
    mins:0,
    secs:0,
  });
  const isArrowDowns=()=>{
    window.scrollY > 0 ? setIsArrowDown(true) : setIsArrowDown(false);
  };
  const discountTime=()=>{
    const time=new Date();
    setTimes({
      day:time.getDate(),
      hours:time.getHours(),
      mins:time.getMinutes(),
      secs:time.getSeconds(),
    })
  }
  getProduct().then(product=>{
    setProductsCategories(product);
  })
  useEffect(()=>{
    // const getData=async ()=>{
    //   await axios.get("https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/products.json").then(res=>{
    //     const productsData=Object.values(res.data);
    //     setProductsCategories(productsData);
    //   })
    // }
    // getData();
    const myTimes=setInterval(discountTime,1000);
    window.addEventListener('scroll',isArrowDowns);
    return ()=>{
      clearInterval(myTimes);
      window.removeEventListener('scroll',isArrowDowns);
    }
  },[]);
  return (
    <div className='home'>
      <div className={`${isArrowDown ? 'return-top':'return-top  not'}`}><a href='#home'><AiOutlineArrowUp className='arrow-up'/></a></div>
      <div className="slider">
        <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        >
          <SwiperSlide><Organic /></SwiperSlide>
          <SwiperSlide><Groca /></SwiperSlide>
          <SwiperSlide><Grocery /></SwiperSlide>
        </Swiper>
      </div>
      <div className="background-primary">
        <div className="left-primary">
          <img src="https://groca.myshopify.com/cdn/shop/files/img-1.jpg?v=1614917996&width=1500" alt="recover" />
          <div className="left-info">
            <h2 className='main-title'>Veggies</h2>
            <h4 className='sub-title'><span>100%</span> Organic Product</h4>
            <button className='primary-button'>buy now</button>
          </div>
        </div>
        <div className="right-primary">
        <img src="https://groca.myshopify.com/cdn/shop/files/img-2.jpg?v=1614917996&width=1500" alt="recover" />
          <div className="right-info">
            <h2 className='main-title'>Fruits</h2>
            <h4 className='sub-title'><span>100%</span> Fresh Product</h4>
            <button className='primary-button'>buy now</button>
          </div>
        </div>
      </div>
      <HeaderTitle title={'our product'} description={'Mauris vitae ultricies leo integer malesuada nunc vel in arcu cursus'}/>
      <div className="product">
        {
          productCategoriesLink.map(product=>(
            <ProductCategories 
            setCategorie={setCategorie} 
            key={product?.id} 
            name={product?.name} 
            iconUrl={product?.iconUrl} 
            className={product?.calssName}
            />
          ))
        }
      </div>
      <div className="products">
        {
          categorie === '' ? (
            productsCategories.map((product,index)=>(
              <ProductCard 
              key={index}
              name={product?.name} 
              imageUrl={product?.imageUrl}
              price={product?.price}
              />
            ))
          ) :(
            productsCategories.filter(item=>item?.categories.includes(categorie) && item).map((product,index)=>(
              <ProductCard key={index}
              name={product?.name} 
              imageUrl={product?.imageUrl}
              price={product?.price}
              />
            ))
          )
        }
      </div>
      <div className="discount">
        <img src="https://groca.myshopify.com/cdn/shop/files/bg-1.jpg?v=1614918144" alt="name" />
        <div className="discount-info">
          <h1>Special Discount For All Grocery Products</h1>
          <p>Turpis tincidunt id aliquet risus feugiat. Pretium vulputate sapien nec sagittis aliquam. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Amet risus nullam eget felis eget nunc lobortis mattis aliquam.</p>
          <div className="discount-date">
            <div className="discount-day">
              {times?.day}
              <span>Days</span>
            </div>
            <div className="discount-day">
              {times?.hours}
              <span>Hrs</span>
            </div>
            <div className="discount-day">
              {times?.mins}
              <span>Mins</span>
            </div>
            <div className="discount-day">
              {times?.secs}
              <span>Secs</span>
            </div>
          </div>
          <button>Buy Now</button>
        </div>
      </div>
      <HeaderTitle 
      title={'Special Products'} 
      description={'Ut tellus elementum sagittis vitae et leo. Sollicitudin tempor id eu nisl nunc'}
      />
      <div className="products">
        {
          productsCategories.map((product,index)=>(
            <ProductCard key={index}
            name={product?.name} 
            imageUrl={product?.imageUrl}
            price={product?.price}
            className="flex-icon"
            />
          ))
        }
      </div>
      <ClientComponent />
      <HeaderTitle 
      title={'Latest News'}
      description={'Est ante in nibh mauris cursus donec enim diam'}
      />
      <div className="row news">
        {
          latestNews.map(news=>(
            <div key={news?.id} className="col-12 col-md-6 col-lg-4 news-card">
              <div className="news-img">
                <img src={news?.imageUrl} alt={news?.title}/>
              </div>
              <div className="news-info d-flex justify-content-center align-items-center flex-column">
                <div className="news-address d-flex justify-content-center align-items-center gap-5">
                  <div className="address">
                    <BsFillPersonFill aria-label='ad ff' className='address-icon'/>
                    {news?.address}
                  </div>
                  <div className="history">
                    <BsCalendarDateFill aria-label='ad ff'  className='address-icon'/>
                    {news?.Time}
                  </div>
                </div>
                <div className="news-title">
                  <h1>{news?.title}</h1>
                  <p>{news?.description}</p>
                </div>
              </div>
              <button>Read More</button>
            </div>
          ))
        }
      </div>
      <div className="Subscribe">
        <img src="https://groca.myshopify.com/cdn/shop/files/bg-3.jpg?v=1614918264&width=1780" alt="*" />
          <div className="email-info">
            <input type="email" name="email" id='email'/>
            <label className='email-label' htmlFor="email">Email Address</label>
            <button>Subscribe</button>
          </div>
      </div>
      <div className="pagination-swiper">
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={4}
        spaceBetween={5}
        >
          <SwiperSlide>
            <img src="https://groca.myshopify.com/cdn/shop/files/client-4.png?v=1614918398&width=710" alt="swiper" width={200} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://groca.myshopify.com/cdn/shop/files/client-5.png?v=1614918398&width=710" alt="swiper" width={200} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://groca.myshopify.com/cdn/shop/files/client-1.png?v=1614918398&width=710" alt="swiper" width={200} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://groca.myshopify.com/cdn/shop/files/client-3.png?v=1614918398&width=710" alt="swiper" width={200} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://groca.myshopify.com/cdn/shop/files/client-6.png?v=1614918398&width=710" alt="swiper" width={200} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://groca.myshopify.com/cdn/shop/files/client-2.png?v=1614918398&width=710" alt="swiper" width={200} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="support-block">
        <div className="row support-temp">
          <div className="support-info col-12 col-md-6 col-lg-3">
            <div className="support-icon">
              <BiSolidTruck aria-label='Gg' className='icon-temp'/>
            </div>
            <div className="support-details">
              <h2>Free Shipping</h2>
              <p>Worldwide</p>
            </div>
          </div>
          <div className="support-info col-12 col-md-6 col-lg-3">
            <div className="support-icon">
              <BsTelephoneFill aria-label='Gg' className='icon-temp'/>
            </div>
            <div className="support-details">
              <h2>Helpline</h2>
              <p>+(000)123-4567</p>
            </div>
          </div>
          <div className="support-info col-12 col-md-6 col-lg-3">
            <div className="support-icon">
              <SlEarphones aria-label='Gg' className='icon-temp'/>
            </div>
            <div className="support-details">
              <h2>24x7 Support</h2>
              <p>Free For Customers</p>
            </div>
          </div>
          <div className="support-info col-12 col-md-6 col-lg-3">
            <div className="support-icon">
              <BsArrowLeftRight aria-label='Gg' className='icon-temp'/>
            </div>
            <div className="support-details">
              <h2>Returns</h2>
              <p>30 Days Free Exchanges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home