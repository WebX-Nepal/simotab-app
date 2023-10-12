import "./index.css";

const Contact = () => {
  return (
    <>
      <div className="container bg-white max-w-[500px] m-auto">
        <div className=" first mt-5 flex justify-center items-center gap-[50px] md:gap-[60px]">
          <svg
            className="mt-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="25"
            viewBox="0 0 16 25"
            fill="none"
          >
            <path
              d="M14 2L3 12.5L14 23"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="mt-4 text-[24px] font-[400]">CONTACT</h1>
          <svg
            className="mt-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M20.7143 10.7143L15.0314 5L9.28571 10.7143M15.0314 5.03V22.1429M10.7143 15H7.85714C7.09938 15 6.37266 15.301 5.83684 15.8368C5.30102 16.3727 5 17.0994 5 17.8571V23.5714C5 24.3292 5.30102 25.0559 5.83684 25.5917C6.37266 26.1276 7.09938 26.4286 7.85714 26.4286H22.1429C22.9006 26.4286 23.6273 26.1276 24.1632 25.5917C24.699 25.0559 25 24.3292 25 23.5714V17.8571C25 17.0994 24.699 16.3727 24.1632 15.8368C23.6273 15.301 22.9006 15 22.1429 15H19.2857"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="second border rounded-full bg-[#EEE] h-10 w-[70%]  m-auto flex items-center justify-start mt-7">
          <svg
            className="ml-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.7099 20.29L17.9999 16.61C19.44 14.8144 20.1374 12.5353 19.9487 10.2413C19.76 7.94733 18.6996 5.81281 16.9854 4.27667C15.2713 2.74053 13.0337 1.91954 10.7328 1.9825C8.43194 2.04546 6.24263 2.98759 4.61505 4.61517C2.98747 6.24275 2.04534 8.43207 1.98237 10.7329C1.91941 13.0338 2.74041 15.2714 4.27655 16.9855C5.81269 18.6997 7.94721 19.7601 10.2412 19.9488C12.5352 20.1375 14.8143 19.4401 16.6099 18L20.2899 21.68C20.3829 21.7738 20.4935 21.8482 20.6153 21.8989C20.7372 21.9497 20.8679 21.9758 20.9999 21.9758C21.1319 21.9758 21.2626 21.9497 21.3845 21.8989C21.5063 21.8482 21.6169 21.7738 21.7099 21.68C21.8901 21.4936 21.9909 21.2444 21.9909 20.985C21.9909 20.7257 21.8901 20.4765 21.7099 20.29ZM10.9999 18C9.61544 18 8.26206 17.5895 7.11091 16.8203C5.95977 16.0511 5.06256 14.9579 4.53275 13.6788C4.00293 12.3997 3.86431 10.9923 4.13441 9.63439C4.4045 8.27653 5.07119 7.02925 6.05016 6.05028C7.02912 5.07131 8.27641 4.40463 9.63427 4.13453C10.9921 3.86443 12.3996 4.00306 13.6787 4.53287C14.9578 5.06268 16.051 5.95989 16.8202 7.11103C17.5894 8.26218 17.9999 9.61556 17.9999 11C17.9999 12.8565 17.2624 14.637 15.9497 15.9498C14.6369 17.2625 12.8564 18 10.9999 18Z"
              fill="#666666"
            />
          </svg>
          <input
            className="bg-[#EEE] ml-2 max-w-[70%] border-none"
            type="search"
            placeholder="Search for Contact..."
          />
        </div>
        <div className="users">
          <div className="user mt-5 flex justify-center w-[80%] md:w-[70%] items-center gap-3">
            <svg
              className="p-[5px] border rounded-full bg-[#EEE] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_701_523)">
                <g filter="url(#filter0_d_701_523)">
                  <path
                    d="M15 15C16.7405 15 18.4097 14.3086 19.6404 13.0779C20.8711 11.8472 21.5625 10.178 21.5625 8.4375C21.5625 6.69702 20.8711 5.02782 19.6404 3.79711C18.4097 2.5664 16.7405 1.875 15 1.875C13.2595 1.875 11.5903 2.5664 10.3596 3.79711C9.1289 5.02782 8.4375 6.69702 8.4375 8.4375C8.4375 10.178 9.1289 11.8472 10.3596 13.0779C11.5903 14.3086 13.2595 15 15 15ZM7.03125 16.875C6.16101 16.875 5.32641 17.2207 4.71106 17.8361C4.0957 18.4514 3.75 19.286 3.75 20.1562V20.625C3.75 22.8684 5.17781 24.7659 7.20469 26.0559C9.24281 27.3534 12.0019 28.125 15 28.125C17.9981 28.125 20.7563 27.3534 22.7953 26.0559C24.8222 24.7659 26.25 22.8684 26.25 20.625V20.1562C26.25 19.286 25.9043 18.4514 25.2889 17.8361C24.6736 17.2207 23.839 16.875 22.9688 16.875H7.03125Z"
                    fill="#666666"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_701_523"
                  x="2.75"
                  y="1.875"
                  width="24.5"
                  height="28.25"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_701_523"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_701_523"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_701_523">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="details flex flex-col">
              <h1 type="name" className="name text-[16px] font-[400]">
                Roshan
              </h1>
              <p type="email" className="text-[13px]">
                roshankc@gmail.com
              </p>
              <p type="date" className="text-[10px]">
                10 Oct 2023
              </p>
            </div>
            <svg
              className="relative left-[90px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="13"
              viewBox="0 0 3 13"
              fill="none"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#666666" />
              <circle cx="1.5" cy="6.5" r="1.5" fill="#666666" />
              <circle cx="1.5" cy="11.5" r="1.5" fill="#666666" />
            </svg>
          </div>
          <div className="user mt-5 flex justify-center w-[80%] md:w-[70%] items-center gap-3">
            <svg
              className="border rounded-full bg-[#EEE] p-[5px]"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_701_523)">
                <g filter="url(#filter0_d_701_523)">
                  <path
                    d="M15 15C16.7405 15 18.4097 14.3086 19.6404 13.0779C20.8711 11.8472 21.5625 10.178 21.5625 8.4375C21.5625 6.69702 20.8711 5.02782 19.6404 3.79711C18.4097 2.5664 16.7405 1.875 15 1.875C13.2595 1.875 11.5903 2.5664 10.3596 3.79711C9.1289 5.02782 8.4375 6.69702 8.4375 8.4375C8.4375 10.178 9.1289 11.8472 10.3596 13.0779C11.5903 14.3086 13.2595 15 15 15ZM7.03125 16.875C6.16101 16.875 5.32641 17.2207 4.71106 17.8361C4.0957 18.4514 3.75 19.286 3.75 20.1562V20.625C3.75 22.8684 5.17781 24.7659 7.20469 26.0559C9.24281 27.3534 12.0019 28.125 15 28.125C17.9981 28.125 20.7563 27.3534 22.7953 26.0559C24.8222 24.7659 26.25 22.8684 26.25 20.625V20.1562C26.25 19.286 25.9043 18.4514 25.2889 17.8361C24.6736 17.2207 23.839 16.875 22.9688 16.875H7.03125Z"
                    fill="#666666"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_701_523"
                  x="2.75"
                  y="1.875"
                  width="24.5"
                  height="28.25"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_701_523"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_701_523"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_701_523">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="details">
              <h1 type="name" className="name text-[16px] font-[400]">
                Roshan
              </h1>
              <p type="email" className="text-[13px]">
                roshankc@gmail.com
              </p>
              <p type="date" className="text-[10px]">
                10 Oct 2023
              </p>
            </div>
            <svg
              className="relative left-[90px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="13"
              viewBox="0 0 3 13"
              fill="none"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#666666" />
              <circle cx="1.5" cy="6.5" r="1.5" fill="#666666" />
              <circle cx="1.5" cy="11.5" r="1.5" fill="#666666" />
            </svg>
          </div>
          <div className="user mt-5 flex justify-center w-[80%] md:w-[70%] items-center gap-3">
            <svg
              className="p-[5px] border rounded-full bg-[#EEE]"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_701_523)">
                <g filter="url(#filter0_d_701_523)">
                  <path
                    d="M15 15C16.7405 15 18.4097 14.3086 19.6404 13.0779C20.8711 11.8472 21.5625 10.178 21.5625 8.4375C21.5625 6.69702 20.8711 5.02782 19.6404 3.79711C18.4097 2.5664 16.7405 1.875 15 1.875C13.2595 1.875 11.5903 2.5664 10.3596 3.79711C9.1289 5.02782 8.4375 6.69702 8.4375 8.4375C8.4375 10.178 9.1289 11.8472 10.3596 13.0779C11.5903 14.3086 13.2595 15 15 15ZM7.03125 16.875C6.16101 16.875 5.32641 17.2207 4.71106 17.8361C4.0957 18.4514 3.75 19.286 3.75 20.1562V20.625C3.75 22.8684 5.17781 24.7659 7.20469 26.0559C9.24281 27.3534 12.0019 28.125 15 28.125C17.9981 28.125 20.7563 27.3534 22.7953 26.0559C24.8222 24.7659 26.25 22.8684 26.25 20.625V20.1562C26.25 19.286 25.9043 18.4514 25.2889 17.8361C24.6736 17.2207 23.839 16.875 22.9688 16.875H7.03125Z"
                    fill="#666666"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_701_523"
                  x="2.75"
                  y="1.875"
                  width="24.5"
                  height="28.25"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_701_523"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_701_523"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_701_523">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="details">
              <h1 type="name" className="name text-[16px] font-[400]">
                Roshan
              </h1>
              <p type="email" className="text-[13px]">
                roshankc@gmail.com
              </p>
              <p type="date" className="text-[10px]">
                10 Oct 2023
              </p>
            </div>
            <svg
              className="relative left-[90px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="13"
              viewBox="0 0 3 13"
              fill="none"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#666666" />
              <circle cx="1.5" cy="6.5" r="1.5" fill="#666666" />
              <circle cx="1.5" cy="11.5" r="1.5" fill="#666666" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
