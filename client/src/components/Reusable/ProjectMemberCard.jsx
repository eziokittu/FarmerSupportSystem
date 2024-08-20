import React from 'react';

const ProjectMemberCard = ({ member, isGuide }) => {

  const redirectToGmail = () => {
    const email = member.email;
    const subject = '[Redirected from Farmer-Support-System-Major-Project]';
    const body = 'Hi '+member.firstname+'\n';
		const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className='w-52 flex flex-col group relative ' >

      {/* Image Wrapper */}
      <div className={`${isGuide ? 'h-52' : 'h-36'} w-fit mx-auto relative border-4 border-slate-700 group-hover:border-black`}>

        {/* Image */}
        <img
          src={member.image}
          alt={member.name}
          className={`${isGuide ? 'h-52' : 'h-36'} pb-2 w-fit mx-auto`}
        />

        {/* Black Screen Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          {/* Contact Icons (Centered) */}
          <div className='flex flex-row gap-1'>

            {/* Linkedin Button */}
            {(member.links.link_linkedin!=='-') && (<button
              onClick={() => { window.open(`${member.links.link_linkedin}`, '_blank'); }}
            >
              <div className="bg-slate-100 w-8 h-8 rounded-full p-1 hover:p-0 transition-all duration-300">
                <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin">
                  <g fill="none" fillRule="evenodd">
                    <g>
                      <rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                      <path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </button>)}

            {/* Github Button */}
            {isGuide===false && (member.links.link_github!=='-') && (<button
              onClick={() => { window.open(`${member.links.link_github}`, '_blank'); }}
            >
              <div className="bg-slate-100 w-8 h-8 rounded-full p-1 hover:p-0 transition-all duration-300">
                <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
                  <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                </svg>
              </div>
            </button>)}

            {/* Website Button */}
            {(member.links.link_website!=='-') && (<button
              onClick={() => { window.open(`${member.links.link_website}`, '_blank'); }}
            >
              <div className="bg-slate-100 w-8 h-8 rounded-full p-1 hover:p-0 transition-all duration-300">
                {/* <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin">
                  <g fill="none" fillRule="evenodd">
                    <g>
                      <rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                      <path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path>
                    </g>
                  </g>
                </svg> */}
                <svg className='rounded-full' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 205.229 205.229" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <g> <path d="M102.618,205.229c-56.585,0-102.616-46.031-102.616-102.616C0.002,46.031,46.033,0,102.618,0 C159.2,0,205.227,46.031,205.227,102.613C205.227,159.198,159.2,205.229,102.618,205.229z M102.618,8.618 c-51.829,0-94.002,42.166-94.002,93.995s42.17,93.995,94.002,93.995c51.825,0,93.988-42.162,93.988-93.995 C196.606,50.784,154.444,8.618,102.618,8.618z"></path> </g> </g> <g> <g> <rect x="5.746" y="98.304" width="193.734" height="8.618"></rect> </g> </g> <g> <g> <path  d="M104.941,62.111c-48.644,0-84.94-10.704-87.199-11.388l2.494-8.253 c0.816,0.247,82.657,24.336,164.38-0.004l2.452,8.26C158.405,59.266,130.021,62.111,104.941,62.111z"></path> </g> </g> <g> <g> <path  d="M20.416,160.572l-2.459-8.26c84.271-25.081,165.898-1.027,169.333,0l-2.494,8.256 C183.976,160.318,102.142,136.24,20.416,160.572z"></path> </g> </g> <g> <g> <path  d="M69.399,196.168C26.933,96.747,63.584,8.604,63.959,7.727l7.927,3.378 c-0.365,0.845-35.534,85.756,5.44,181.677L69.399,196.168z"></path> </g> </g> <g> <g> <path  d="M135.168,196.168l-7.927-3.382c40.971-95.92,5.801-180.832,5.436-181.677l7.927-3.378 C140.973,8.604,177.627,96.747,135.168,196.168z"></path> </g> </g> <g> <g> <rect x="98.306" y="5.744" width="8.614" height="197.302"></rect> </g> </g> </g> </g> </g></svg>
              </div>
            </button>)}

            {/* Instagram Button */}
            {isGuide===false && (member.links.link_instagram!=='-') && (<button
              onClick={() => { window.open(`${member.links.link_instagram}`, '_blank'); }}
            >
              <div className="bg-slate-100 w-8 h-8 rounded-full p-1 hover:p-0 transition-all duration-300">
                <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fd5"></stop>
                    <stop offset=".328" stopColor="#ff543f"></stop>
                    <stop offset=".348" stopColor="#fc5245"></stop>
                    <stop offset=".504" stopColor="#e64771"></stop>
                    <stop offset=".643" stopColor="#d53e91"></stop>
                    <stop offset=".761" stopColor="#cc39a4"></stop>
                    <stop offset=".841" stopColor="#c837ab"></stop>
                  </radialGradient>
                  <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                  <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                </svg>
              </div>
            </button>)}

          </div>
        </div>
      </div>

      {/* Name and Role */}
      <div className='mt-1 text-center flex flex-col text-gray-700'>
        <p className="text-2xl font-bold">{member.firstname}</p>
        <p className="text-lg">{member.lastname}</p>
        {/* <p className="text-center">{member.role}</p> */}
        <p className="group-hover:opacity-100 opacity-0 text-center cursor-pointer underline underline-offset-2 hover:text-blue-600" onClick={redirectToGmail}>{member.email}</p>
      </div>
    </div>
  );
};

export default ProjectMemberCard;
