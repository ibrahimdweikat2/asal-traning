import React from 'react'
import './ClientComponent.css';
import {HeaderTitle} from '../../components';
import {ClientSay} from '../../utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const ClientComponent = () => {
  return (
    <div className='client-component'>
        {/* <img src="" alt="client" /> */}
        <div className="clients-info">
            <HeaderTitle 
            title={'Our Client Say'} 
            description={'Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras'}
            />
            <div className="swiper-slider">
                <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
                >
                    {
                        ClientSay.map(client=>(
                            <div key={client?.id}>
                                <SwiperSlide key={client?.id}>
                                    <div className='swiperSlide-client'>
                                        <div className="client-info">
                                            <img className='swiper-cover' src={client?.imageUrl} alt={client?.name} />
                                            <div className="info-right">
                                                <h6>{client?.name}</h6>
                                                <p>{client?.subName}</p>
                                            </div>
                                        </div>
                                        <p className='desc'>{client?.describe}</p>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default ClientComponent