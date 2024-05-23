import React, { useEffect } from 'react'
import './Features.scss';

const features = [
    {
        title: 'GPS Tracking or anti-theft',
        p: 'Chacking the Proxy fire and configurations running',
        icon: '/location.svg'
    },
    {
        title: 'Super Charging Battery',
        p: 'Chacking the Proxy fire and configurations running',
        icon: '/charging-battery.svg'
    },
    {
        title: 'Monitoring Speed Trip Status',
        p: 'Chacking the Proxy fire and configurations running',
        icon: '/speed-icon.svg'
    },
    {
        title: 'Power Your Ride Conditions',
        p: 'Chacking the Proxy fire and configurations running',
        icon: '/energy.svg'
    }
]

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
        <div className='features-section mt-20 bg-green min-h-48'>
            <div className="max-w-7xl grid gap-y-3 text-center mx-auto mb-20">
                <p className='text-primary md:hidden block'>
                    YOUR RIDE START HERE.
                </p>
                <h2 className=' lg:text-4xl font-bold text-2xl'>
                    OUR FEATURES & FACILITIES
                </h2>
            </div>

            <div className="max-w-7xl overflow-x-auto mx-auto features-wrapper">
                {features.map((item, index) => (
                    <div key={index} className="card lg:min-w-[23.8%]  md:min-w-[31.8%]  sm:min-w-[48.8%] min-w-[85%]">
                        <div className='card-wrapper'>
                            <div className='card-img'>
                                <div className='card-img-wrapper'>
                                    <img src={item.icon} alt="" />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-heading'>
                                    {item.title}
                                </div>
                                <p className='card-p'>{item.p}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
