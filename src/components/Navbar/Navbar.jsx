import React, { useEffect, useRef, useState } from 'react'
import './Navbar.scss';
import BrandLogo from '../../assets/BrandLogo.svg';
import MenuHamburger from '../../assets/menu_hamburger.svg'
import Search from '../../assets/BrandLogo.svg';
import Close from '../../assets/close-icon.svg';
import { Drawer } from '@mui/material';

const MenuList = [
    {
        id: 1,
        title: 'Home',
        img: '',
        link: '',
    },
    {
        id: 2,
        title: 'Shop',
        img: '',
        link: '',
    },
    {
        id: 3,
        title: 'About',
        img: '',
        link: '',
    },
    {
        id: 4,
        title: 'Contact',
        img: '',
        link: '',
    },
    {
        id: 5,
        title: 'Blog',
        img: '',
        link: '',
    }
]

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const [searchInput, setSearchInput] = React.useState('');


    const clearSearchInput = () => {
        setSearchInput('');
    }

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const toggleDrawer = (anchor, newOpen) => () => {
        setOpen(newOpen);
    };


    const toggleSearchBox = () => {
        setIsVisible(!isVisible);
    };


    const [screenSize, setScreenSize] = useState('unknown');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= 640) {
                setScreenSize('large');
                setIsVisible(false); //
            } else {
                setScreenSize('small');
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (

        <>

            <Drawer open={open} anchor="left" onClose={toggleDrawer('right', false)}  >
                <div className='side-menu no-scrollbar' style={{ width: 260, padding: '30px', backgroundColor: '#000' }}>
                    <div className='mb-4 w-fit '>
                        <button style={{ backgroundColor: '#1F1F1F' }} onClick={toggleDrawer('left', false)} className='h-10 w-10 rounded-full flex justify-center items-center'>
                            <svg width={14} className='fill-gray-300' fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" /></svg>
                        </button>
                    </div>
                    <div>
                        <ul className='side-menu-nav'>
                            {MenuList.map((item) => (
                                <li key={item.id}>
                                    <a className='flex items-center gap-2' href="" target="_blank">
                                        {item.title} {item.img !== '' && <img width={22} src={item.img} alt="" />}
                                    </a>
                                </li>))}
                        </ul>
                    </div>
                </div>
            </Drawer>

            <div className='navbar'>
                {isVisible && <button onClick={toggleSearchBox} className='absolute z-10 left-4 top-4'>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z" fill="#fff" />
                    </svg>
                </button>}
                <div className='max-w-7xl nav-wrapper'>

                    <div className={`sm-searchbox  ${isVisible ? 'visible' : ''}`}>
                        <div className={`searchbox-wrapper ${isVisible ? 'visible' : ''}`}>
                            <div className="searchbox-input ">
                                <input type="text" id='search' autoComplete='off' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder="Search..." />
                                {searchInput !== '' && (<button type='button' className='p-0 m-0 mr-1' onClick={clearSearchInput}>
                                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z" fill="#fff" />
                                    </svg>
                                </button>)}
                            </div>
                            <span type='button' className="searchbox-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7148 16.5L13.0898 12.875M15.0482 8.16667C15.0482 11.8486 12.0634 14.8333 8.38151 14.8333C4.69961 14.8333 1.71484 11.8486 1.71484 8.16667C1.71484 4.48477 4.69961 1.5 8.38151 1.5C12.0634 1.5 15.0482 4.48477 15.0482 8.16667Z" stroke="#E7E7E7" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className='md:hidden mr-2'>
                        <button className='nav-toggler' onClick={toggleDrawer('right', true)}>
                            <img className='min-w-6 max-w-6' src={MenuHamburger} alt="" />
                        </button>
                    </div>

                    <div className="nav-left lg:mr-0 mr-auto">
                        <div className="nav-brand">
                            <a href="">
                                <img className='md:min-w-[100px] min-w-[70px] max-w-[70px]' src={BrandLogo} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="searchbox  sm:max-w-[431px] sm:w-[431px]">
                        <button onClick={toggleSearchBox} type='button' className="search-toggler ml-auto">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7148 16.5L13.0898 12.875M15.0482 8.16667C15.0482 11.8486 12.0634 14.8333 8.38151 14.8333C4.69961 14.8333 1.71484 11.8486 1.71484 8.16667C1.71484 4.48477 4.69961 1.5 8.38151 1.5C12.0634 1.5 15.0482 4.48477 15.0482 8.16667Z" stroke="#E7E7E7" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <div className="searchbox-wrapper">
                            <div className="searchbox-input ">
                                <input id='search' autoComplete='off' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="text" placeholder="Search" />
                            </div>
                            <span type='button' className="searchbox-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7148 16.5L13.0898 12.875M15.0482 8.16667C15.0482 11.8486 12.0634 14.8333 8.38151 14.8333C4.69961 14.8333 1.71484 11.8486 1.71484 8.16667C1.71484 4.48477 4.69961 1.5 8.38151 1.5C12.0634 1.5 15.0482 4.48477 15.0482 8.16667Z" stroke="#E7E7E7" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>


                    <div className="nav-links min-w-fit lg:block hidden">
                        <ul className='nav-link-wrapper'>
                            <li>
                                <a href="">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-right">
                        <ul className='nav-right-wrapper'>
                            <li>
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2.5H15.5C18.8137 2.5 21.5 5.18629 21.5 8.5V15.5C21.5 18.8137 18.8137 21.5 15.5 21.5H8.5C5.18629 21.5 2.5 18.8137 2.5 15.5V8.5C2.5 5.18629 5.18629 2.5 8.5 2.5ZM15.5 20C17.983 19.9945 19.9945 17.983 20 15.5V8.5C19.9945 6.017 17.983 4.0055 15.5 4H8.5C6.017 4.0055 4.0055 6.017 4 8.5V15.5C4.0055 17.983 6.017 19.9945 8.5 20H15.5Z" fill="white" />
                                        <path d="M15.18 7C14.768 7.00539 14.4354 7.33804 14.43 7.75C14.4196 8.38126 14.1567 8.98203 13.7 9.41801C13.2434 9.85398 12.6311 10.0888 12 10.07C10.7002 10.1093 9.61349 9.0897 9.57 7.79C9.57 7.37579 9.23421 7.04 8.82 7.04C8.40579 7.04 8.07 7.37579 8.07 7.79C8.11376 9.91804 9.87187 11.609 12 11.57C14.1281 11.609 15.8862 9.91804 15.93 7.79C15.941 7.58425 15.8668 7.38304 15.725 7.23362C15.5831 7.08419 15.386 6.99971 15.18 7Z" fill="white" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1 20.8C11.6 20.8 11 20.6 10.6 20.2C4.1 14.5 4 14.4 4 14.3L3.9 14.2C2.7 13 2 11.3 2 9.6V9.4C2.1 5.8 5 3 8.6 3C9.7 3 11.2 3.6 12.1 4.8C13 3.6 14.6 3 15.7 3C19.3 3 22.1 5.8 22.3 9.4V9.6C22.3 11.4 21.6 13 20.4 14.3L20.3 14.4C20.2 14.5 19.4 15.2 13.7 20.3C13.2 20.6 12.7 20.8 12.1 20.8ZM5.5 14C5.9 14.4 7.9 15.8 11.6 19C11.9 19.3 12.3 19.3 12.6 19C16.4 15.6 18.6 13.7 19.1 13.3L19.2 13.2C20.2 12.2 20.7 10.9 20.7 9.6V9.4C20.6 6.6 18.4 4.5 15.6 4.5C14.9 4.5 13.5 5 13 6.1C12.8 6.5 12.4 6.7 12 6.7C11.6 6.7 11.2 6.5 11 6.1C10.5 5.1 9.2 4.5 8.4 4.5C5.7 4.5 3.4 6.7 3.3 9.4V9.7C3.3 11 3.9 12.3 4.8 13.2L5.5 14Z" fill="white" />
                                    </svg>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4868 14.71L15.7268 15.85C15.9543 16.8356 15.7297 17.8713 15.1145 18.6742C14.4993 19.4771 13.5577 19.9633 12.5468 20H3.26683C2.25601 19.9633 1.3144 19.4771 0.699179 18.6742C0.0839581 17.8713 -0.140601 16.8356 0.0868326 15.85L0.326833 14.71C0.602868 13.1668 1.92945 12.0327 3.49683 12H12.3168C13.8842 12.0327 15.2108 13.1668 15.4868 14.71ZM12.5468 18.49C13.0546 18.4841 13.5325 18.2489 13.8468 17.85V17.86C14.2325 17.3762 14.3828 16.7458 14.2568 16.14L14.0168 15C13.8837 14.1552 13.1715 13.5226 12.3168 13.49H3.49684C2.6422 13.5226 1.93 14.1552 1.79684 15L1.55684 16.14C1.43399 16.7426 1.5841 17.3687 1.96684 17.85C2.28117 18.2489 2.75905 18.4841 3.26684 18.49H12.5468Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40682 10H7.40682C5.19768 10 3.40682 8.20915 3.40682 6.00001V3.36001C3.40415 2.46807 3.75729 1.61189 4.388 0.981192C5.0187 0.350491 5.87488 -0.00265152 6.76682 1.49917e-05H9.04682C9.93876 -0.00265152 10.7949 0.350491 11.4256 0.981192C12.0563 1.61189 12.4095 2.46807 12.4068 3.36001V6.00001C12.4068 8.20915 10.616 10 8.40682 10ZM6.76682 1.50002C5.73957 1.50002 4.90682 2.33277 4.90682 3.36001V6.00001C4.90682 7.38073 6.02611 8.50001 7.40682 8.50001H8.40682C9.78753 8.50001 10.9068 7.38073 10.9068 6.00001V3.36001C10.9068 2.86671 10.7109 2.39361 10.362 2.0448C10.0132 1.69598 9.54012 1.50002 9.04682 1.50002H6.76682Z" fill="white" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>

    )
}
