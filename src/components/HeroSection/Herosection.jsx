import React, { useEffect } from 'react'
import './Hero.scss';
import HeroImg from '../../assets/hero-img.png';

export default function Herosection() {

    const [screenSize, setScreenSize] = React.useState('unknown');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= 640) {
                setScreenSize('large');
            } else {
                setScreenSize('small');
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='hero-section'>
            <div className="max-w-7xl mx-auto hero-wrapper">
                <div className='flex-1 flex flex-col gap-6'>
                    <div className='p-4 grid gap-y-6'>
                        <div className='w-fit'>
                            <span className='hero-span-tag'>Road Rage 2024</span>
                        </div>
                        <div className='grid md:gap-5 gap-4 lg:pr-9'>
                            <h1 className=''>
                                The bicycle Revolution
                            </h1>
                            <p>
                                From sleek road bikes built for speed to rugged mountain bikes designed for off-road adventures, our slider celebrates the diversity of cycling disciplines.
                            </p>
                        </div>
                        <div className='sm:grid hidden sm:grid-cols-2 gap-[24px]'>
                            <button className='btn-primary p-4'>Shop Now</button>
                            <button className='btn-white p-4'>Explore Products</button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-6'>
                    <div>
                        <img src={HeroImg} alt="" />
                    </div>
                    {screenSize === 'small' && (<div className='grid sm:grid-cols-2 gap-[24px]'>
                        <button className='btn-primary p-4'>Shop Now</button>
                        <button className='btn-primary-border-2 p-4'>Explore Products</button>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
