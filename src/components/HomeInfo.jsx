import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, we are
        <span className='font-semibold mx-2 text-white'>CsapatNev_Xd</span>
        👋
        <br />
        A team of 2 webdevelopers and 3D designers
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked on many projects, mainly in Blender and Unity, <br/> But actually this is the first time we try to mix modelling with a webpage
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          More About Us
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          We made a story for our island! <br/> Want to read it?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Click here
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <p className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        We hope you enjoy our creation here <br/> Have Fun! <br/> (No bees were harmed during the creation of this webpage)
      </p>
    );
  }

  return null;
};

export default HomeInfo;