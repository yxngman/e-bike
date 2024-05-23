import React, { useEffect } from 'react'
import Bike from '../../assets/best-seller.png';
import './BestSeller.scss';


export default function FeaturesSection() {

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
        <div className='best-seller-section mt-16'>
            <div className="max-w-lg grid gap-y-3 text-center mx-auto mb-20">
                <h2 className=' lg:text-4xl font-semibold text-2xl'>
                    Best Sellers Products This Weeks
                </h2>
            </div>

            <div className="max-w-7xl mx-auto best-seller-wrapper">
                <div className='grid-layout'>
                    <div className='card' >
                        <div className='card-wrapper'>
                            <div className='card-top'>
                                <div className="card-top-wrapper" >
                                    <div className='title'>
                                        Most Popular Bike Of The Season
                                    </div>
                                    <a href=''>
                                        Show More
                                    </a>
                                </div>
                            </div>
                            <div className='card-body'>
                                <span>
                                    The Most Popular
                                </span>
                                <div className='title'>
                                    Want To Take Cycling To The Next Level
                                </div>
                                <p>
                                    Be creative and organized to find more time to ride.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-xl bg-gray-90'>
                        <div className='card-wrapper gap-6 grid'>
                            <div className='card-top'>
                                <div className='card-top-content lg:max-w-[200px]'>
                                    <div className='title'>
                                        Super Deluxe Tandem 7i
                                    </div>
                                    <p>Lightweight 16-inch steel frame is the perfect bike for rides around your neighborhood or trails.</p>
                                </div>
                                <div className='card-top-img lg:max-w-full max-w-sm flex-1'>
                                    <img src={Bike} alt="" />
                                </div>
                            </div>
                            <div className='card-bottom  '>
                                <div className='card-bottom-link '>
                                    <a className='min-w-fit lg:px-14 flex justify-center items-center p-4' href=''>
                                        Show More
                                    </a>
                                </div>
                                <div className='card-bottom-content'>
                                    <ul className='flex gap-6'>
                                        <li className='grid'>
                                            <span>Fork Travel</span>
                                            <div>205MM</div>
                                        </li>

                                        <li className='grid'>
                                            <span>Material</span>
                                            <div>Carbon</div>
                                        </li>

                                        <li className='grid'>
                                            <span>Weight</span>
                                            <div>55.5Kg</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
