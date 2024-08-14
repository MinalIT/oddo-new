import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'; // Import the Dropdown component
import img1 from '../src/image/fontbgg.png';
import img2 from '../src/image/flag.jpg';
import img3 from '../src/image/accountingicon.jpg';
import img4 from '../src/image/knowledgeicon.jpg';
import img5 from '../src/image/signicon.jpg';
import img6 from '../src/image/crmicon.jpg';
import img7 from '../src/image/studioicon.jpg';
import img8 from '../src/image/subcriptionicon.jpg';
import img9 from '../src/image/rentalicon.jpg';
import img10 from '../src/image/Pointofsaleicon.jpg';
import img11 from '../src/image/Discussicon.jpg';
import img12 from '../src/image/Documenticon.jpg';
import img13 from '../src/image/Projecticon.jpg';
import img14 from '../src/image/Timesheetsicon.jpg';
import img15 from '../src/image/fieldserviceicon.jpg';
import img16 from '../src/image/Planningicon.jpg';
import img17 from '../src/image/Helpdeskicon.jpg';
import img18 from '../src/image/Websiteicon.jpg';
import img19 from '../src/image/Socialmarketingicon.jpg';
import img20 from '../src/image/Emailmarketingicon.jpg';
import img21 from '../src/image/speed_1.jpg';
import img22 from '../src/image/speed_2.jpg';
import img23 from '../src/image/speed_3.jpg';
import React from 'react';

//import NotificationBox from './NotificationBox';

export default function Home() {

  const appsLinks = [
    {
      title: 'FINANCE',
      items: [{ label: 'Accounting', link: '/Accounting' },
      { label: 'Documents', link: '/Documents' },
      { label: 'Sign', link: '/Sign' },],
    },
    {
      title: 'SALES',
      items: [{ label: 'CRM', link: '/CRM' },
        { label: 'Sales', link: '/Sale' },
        { label: 'Point of Sale - Shop', link: '/Point' },
        { label: 'Subscriptions', link: '/Subscriptions' },
       
      ],
      },
    
    {
      title: 'WEBSITES',
      items: [{ label: 'Website Marketing', link: '/Website' },
        { label: 'Social Marketing', link: '/SocialMarketing' },
        { label: 'Email Marketing', link: '/EmailMarketing' },] 
    },
    {
      title: 'SUPPLY CHAIN',
      items: [{ label: 'Helpdesk', link: '/Helpdesk' },
        { label: 'Planning', link: '/Planning' }, 
        { label: 'Rental', link: '/Rental' },
      ],
    },
  ];

  const communityLinks = [
    {
      title: 'FORUMS',
      items: [{ label: 'Helpdesk', link: '/Helpdesk' },
        { label: 'Planning', link: '/Planning' }, 
        { label: 'Rental', link: '/Rental' },

      ],
    },
    {
      title: 'GROUPS',
      items: [{ label: 'Discuss', link: '/Discuss' },
      { label: 'Field Service', link: '/FieldService' }, 
      { label: 'Subscriptions', link: '/Subscriptions' },],
    },
    {
      title: 'ACTIVITIES',
      items: [{ label: 'Point Of Sale', link: '/Point' },
        { label: 'Project', link: '/Project' }, 
        { label: 'Email Marketing', link: '/EmailMarketing' },] 
    },
    {
      title: 'SUPPLY CHAIN',
      items: [{ label: 'Sign', link: '/Sign' },
        { label: 'Time Sheets', link: '/Timesheets' }, 
        { label: 'Sale', link: '/Sale' },],
    },
  ];


  return (

    <div>
      <nav className="navbar flex justify-between items-center bg-white p-4 ">
      <Link
  to="/Home"
  onClick={(e) => {
    if (window.location.pathname === '/') {
      e.preventDefault(); // Prevent the default behavior
      window.location.reload(); // Reload the page
    }
  }}
  className="nav-link text-gray-400 text-2xl px-4 font-bold transform transition-transform duration-500 hover:scale-150 hover:rotate-10"
>
  <b className="flip-flop text-blue-600/100">O</b>doo
</Link>



        
     <div className="flex space-x-8 text-gray-500 text-2xl font-bold ">
          <Dropdown title="Apps" links={appsLinks} color="text-teal-600 " hover="text-blue-600"  />
          <Dropdown title="Community" links={communityLinks} color="text-purple-600 " hover="text-blue-600"  />
          <Link to="/pricing" className="nav-link text-gray-700 text-xl font-bold hover:text-blue-600 hover:scale-110">
            Pricing
          </Link>
          <Link to="/Contact" className="nav-link text-gray-700 text-xl font-bold hover:text-blue-600 hover:scale-110">
            Contact
          </Link>
      
     </div>

    
     <div className="flex items-center space-x-4">
  <Link
    to="/Signin"
    className="nav-link text-gray-500 text-xl font-bold transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105"
  >
    Sign In
  </Link>
  <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
    Try It Free
  </button>
</div>

      </nav>
      <div>

        {/*image*/}

        <div className="relative text-center py-8 ">
      <h1 className="font-abc text-8xl text-black-1000 font-bold">
        All your business on{' '}
        <span className="relative inline-block">
          <span
            className="absolute inset-0 transform -skew-x-6 -skew-y-3"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'contain',
              backgroundPosition: 'absolute',
              backgroundRepeat: 'no-repeat',
              zIndex: -1,
              width: '10%',
              height: '5%',
              opacity: 1,
              display: 'block',
              padding: '2em 3.5em', 
            }}
          ></span>
          <span className="relative text-black-1000">one platform.</span>
        </span>
      </h1>
      <p className="mt-4 font-abc text-7xl text-black-600 font-bold">
        Simple, efficient, yet{' '}
        <span className="underline decoration-sky-500">affordable</span>!
      </p>
    </div> </div>



      {/*Button*/}
      <div className="mt-16">
  <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    <b>Start Now, It's Free</b>
  </button>
  <button className="bg-gray-200 text-blue-600 font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-4">
    <b>Schedule a demo</b>
  </button>
</div>


      {/*roundede box*/}

    <div className="w-full container mx-auto rounded-t-[20rem] bg-blue-100 relative h-fit"  >

        <div className="flex flex-col items-center mt-16 hover:translate-y-1">
          <button
            className="relative rounded-full p-2 bg-white shadow-lg flex items-center max-w-lg w-full border border-gray-300"
            onClick={() => window.open('https://odoo.com/event/hr-innovation-day-2024-india-5300/register', '_blank')}
          >
            <img
              className="rounded-full mr-4"
              style={{ height: '20px', width: '20px' }}
              src={img2}
              alt="India"
              loading="lazy"
            />
            <div className="flex-grow flex items-center">
              <span className="font-bold text-md whitespace-nowrap mr-2">
                Digital Accounting Forum 2024
              </span>
              <span className="whitespace-nowrap text-md text-gray-500">
                Aug 24, 2024
              </span>
            </div>
            <span className="text-blue-600 hover:underline ml-4 whitespace-nowrap">
              Register ⟶
            </span>
          </button>
        </div>

        {/*Thumbnail*/}

        <div className="w-full flex justify-center">

          <div className="grid grid-cols-6 gap-10 p-10">
            <figure className="text-center">
            <Link to="/Accounting">
              <img src={img3} alt="Icon 1" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000  ">Accounting</figcaption></Link>

            </figure>
            <figure className="text-center">
            <Link to="/Knowledge">
              <img src={img4} alt="Icon 2" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Knowledge</figcaption></Link>

            </figure>
            <figure className="text-center">
            <Link to="/Sign">
              <img src={img5} alt="Icon 3" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Sign</figcaption></Link>

            </figure>
            <figure className="text-center">
            <Link to="/CRM">
              <img src={img6} alt="Icon 4" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">CRM</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Studio">
              <img src={img7} alt="Icon 5" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Studio</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Subscriptions">
              <img src={img8} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Subscriptions</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Rental">
              <img src={img9} alt="Icon 7" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Rental</figcaption> </Link>
            </figure>
            <figure className="text-center">
            <Link to="/Point">
              <img src={img10} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Point Of Sale</figcaption></Link>
            </figure>

            <figure className="text-center">
            <Link to="/Discuss">
              <img src={img11} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Discuss</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Documents">
              <img src={img12} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Documents</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Project">
              <img src={img13} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Project</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Timesheets">
              <img src={img14} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Timesheets</figcaption></Link>
            </figure>

            <figure className="text-center">
            <Link to="/FieldService">
              <img src={img15} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Field Service</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Planning">
              <img src={img16} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Planning</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Helpdesk">
              <img src={img17} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Helpdesk</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/Website">
              <img src={img18} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Website</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/SocialMarketing">
              <img src={img19} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Social Marketing</figcaption></Link>
            </figure>
            <figure className="text-center">
            <Link to="/EmailMarketing">
              <img src={img20} alt="Icon 6" className="rounded-lg shadow-lg object-cover w-20 h-20 mx-auto hover:translate-y-1.5" />
              <figcaption className="mt-1 text-md text-gray-1000">Email Marketing</figcaption></Link>
            </figure>

          </div>

        </div>



        <div className="align-center text-black-600 text-2xl">
          <p><b>Imagine a vast collection of business apps at your disposal.</b><br></br>
            Got something to improve? There is an app for that.<br></br>
            No complexity, no cost, just a one-click install.</p><br></br>

          <p>Each app simplifies a process and empowers more people.<br></br>
            Imagine the impact when everyone gets the right tool for the job, with perfect integration.</p><br></br>
        </div>


        <div className="container mx-auto rounded-l-[200rem] bg-gray-100 relative p-4">
          <h1 className="text-2xl font-abc text-8xl text-blue-500 mb-4">Level up your quality of {' '}
          <span className="underline decoration-sky-500">work</span></h1> <br></br>
          <video className="mx-auto shadow-lg border-4 border-gray-300 w-3/4 h-3/4" controls loop muted><br></br>
          <source src="/video_homepage.mp4" type="video/mp4" />
           Your browser does not support the video tag.
          </video>

        </div>
        <h1 className="text-2xl font-abc text-8xl text-blue-500 mb-4">Optimized for productivity</h1>
        

        {/*Image overlapping and gif*/ }

        <div className=" bg-blue-100 relative w-full h-full flex justify-center items-center"><br></br>
       
          {       /* Image 1 */}
            <img
                 src={img21}
                 alt="First speed visual"
                   className="absolute top-1/2 left-50 w-2/3 h-auto z-40 transform -translate-x-2 translate-y translate-x-16 translate-y-16 border-8 border-white-1000"
                    /><br></br>
                    {/* Image 2 */}
            <img
        src={img22}
        alt="Second speed visual"
       className="absolute top-0 left-3/4 bottom-8rem w-72 z-40 rounded transform translate-x translate-y-80 border-8 border-white-100 "
           style={{ transform: 'translateY(32rem) ' }}
        /><br></br>

        {/* Image 3 */}
        <img
        src={img23}
        alt="Third speed visual"
        className="absolute top-10 left-0 w-72 h-auto z-40  rounded transform translate-x-16 -translate-y-8 border-8 border-white-100"
    
         /><br></br>

        <img
         src="./homegif.gif"
       alt="GIF visual"
        className="absolute top-10 left-10 bottom-3/4 w-1/2 h-auto z-40 transform translate-x-16 border-8 rounded border-white-100"
        style={{ transform: 'translateY(32rem) ' }}
        />
       </div> 

  

       <div className=" text-center text-abc text-black-600 text-3xl">
  <p className=" w-full container font-abc mx-auto bg-blue-100 mt-8" style={{ transform: 'translateY(60rem)' }}>
    <b>Experience true speed</b>, reduced data <br />
    entry, smart AI, and a fast UI. All<br />
    operations are done in less than 90ms -<br />
    faster than a blink. - By Minal Suryavanshi
  </p>
</div>





      </div> {/*main closing*/}
    </div>
  );
}
