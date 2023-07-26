import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {ProductCard,Organic,Groca,
        Grocery,HeaderTitle,ProductCategories,
        ClientComponent,} from '../../components';
import {productCategoriesLink,Products,latestNews} from '../../utils/data';
import {AiOutlineArrowUp} from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/navigation';
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
  useEffect(()=>{
    setProductsCategories(Products)
    const myTimes=setInterval(discountTime,1000);
    window.addEventListener('scroll',isArrowDowns);
    return ()=>{
      clearInterval(myTimes);
      window.removeEventListener('scroll',isArrowDowns);
    }
  },[]);
  console.log(categorie,productsCategories,times);
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
          productsCategories.map(product=>(
            <ProductCard key={product?.id}
            name={product?.name} 
            imageUrl={product?.imageUrl}
            price={product?.price}
            />
          ))
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
          productsCategories.map(product=>(
            <ProductCard key={product?.id}
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
      <div className="news">
        {
          latestNews.map(news=>(
            <div key={news?.id} className="news-card">
              <img src={news?.imageUrl} alt={news?.title} />
              <div className="news-info">
                <div className="news-address">
                  <div className="address">
                    {news?.address}
                    </div>
                  <div className="history">
                    {news?.Time}
                    </div>
                </div>
                <div className="news-title">
                  <h1>{news?.title}</h1>
                  <p>{news?.description}</p>
                </div>
                <button>Read More</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home