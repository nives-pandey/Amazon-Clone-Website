import React from 'react'
import './Home.css'
import Product from './Product'

function home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />
                
                <div className='home__row'>
                    < Product id='12345678' title='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games' price={19.99} image='https://images-na.ssl-images-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg' rating={3}/>
                    < Product id='12345679' title='PlayStation DualSense Wireless Controller – Midnight Black' price={60.19} image='https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UY327_FMwebp_QL65_.jpg' rating={4}/>
                </div>
                
                <div className='home__row'>
                    < Product id='12345689' title='Xbox Series X' price={799.99} image='https://m.media-amazon.com/images/I/41OH7dLwaJL._AC_UY327_FMwebp_QL65_.jpg' rating={5}/>
                    < Product id='12345778' title='Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac' price={42.75} image='https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY327_FMwebp_QL65_.jpg' rating={5}/>
                    < Product id='12346678' title='Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black' price={129.99} image='https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL.jpg' rating={4}/>
                </div>
                
                <div className='home__row'>
                    < Product id='12355678' title='Roku Ultra 2020 | Streaming Device HD/4K/HDR/Dolby Vision with Dolby Atmos, Bluetooth Streaming, and Roku Voice Remote with Headphone Jack and Personal Shortcuts, includes Premium HDMI Cable' price={92.68} image='https://m.media-amazon.com/images/I/81Jc5Hf41JL._AC_UL480_FMwebp_QL65_.jpg' rating={5}/>
                </div>
            
            </div>  
            
        </div>
    )
}

export default home
