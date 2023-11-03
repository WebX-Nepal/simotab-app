import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsSnapchat,
  BsTiktok,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { getData } from "../../services/axios.service";
import DrawerAdmin from "../../components/Drawer";

const UserProfile = () => {
  const { id } = useParams();
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [user, setuser] = useState({});
  const [links, setlinks] = useState([]);
  const { token } = useSelector((state) => {
    return state.auth;
  });

  const getUser = async () => {
    const response = await getData(`users/${id}`, token);
    if (response.success) {
      setuser(response.user);
    }
    const linksApi = await getData(`other-links/user/me`, token);
    if (linksApi.success) {
      setlinks(linksApi.otherLinks);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const elements = [
    {
      name: "Facebook",
      id: 1,
      component: <BsFacebook />,
    },
    {
      name: "Instagram",
      id: 2,
      component: <BsInstagram />,
    },
    {
      name: "tiktok",
      id: 3,
      component: <BsTiktok />,
    },
    {
      name: "Twitter",
      id: 4,
      component: <BsTwitter />,
    },
    {
      name: "Linkedin",
      id: 5,
      component: <BsLinkedin />,
    },
    {
      name: "Gmail",
      id: 6,
      component: <BiLogoGmail />,
    },
    {
      name: "Github",
      id: 7,
      component: <BsGithub />,
    },
    {
      name: "Snapchat",
      id: 8,
      component: <BsSnapchat />,
    },
    {
      name: "Whatsapp",
      id: 9,
      component: <BsWhatsapp />,
    },
    {
      name: "Youtube",
      id: 10,
      component: <BsYoutube />,
    },
  ];

  return (
    <>
      {
        <div>
          <div className="top-nav">
            <div className="top-nav-item">
              <button
                className="text-2xl"
                onClick={() => setisDrawerOpen(true)}
              >
                <CgMenuLeft />
              </button>
              <DrawerAdmin
                isDrawerOpen={isDrawerOpen}
                setisDrawerOpen={setisDrawerOpen}
              />
              <img
                src="../../../../assets/logo.png"
                className="nav-logo"
                alt="loading"
              />
              <div className="qr-scan">
                <svg
                  className=" cursor-pointer text-xl"
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
            </div>
          </div>

          {user && (
            <div className="profile-wrapper">
              <div className="second-wrapper">
                <div className="profile-cover-image">
                  <img
                    src={
                      user?.coverImageUrl?.url
                        ? user.coverImageUrl.url
                        : "../../../../profile-cover-default-image/cover.image.png"
                    }
                    alt=""
                    className="profile-cover-image h-[164.588px] w-[420px] "
                  />

                  <img
                    src={
                      user?.profileImageUrl?.url
                        ? user.profileImageUrl.url
                        : "../../../../profile-cover-default-image/profile.image.avif"
                    }
                    alt="loading image"
                    className="profile-profile-image rounded-full w-[156.264px] h-[156.264px]"
                  />
                  <div className="">
                    <h1 className="profile-name text-2xl relative text-white">
                      {user.name}
                    </h1>
                    <h1 className="profile-bio">
                      Business is all about knowing more opportunities.
                    </h1>
                  </div>
                </div>
                <div className="social-media-links">
                  {user.socialMediaLinks &&
                    user.socialMediaLinks.map((socialMediaLink) => {
                      return (
                        <div key={socialMediaLink._id} className="">
                          {elements.map((element) => {
                            return (
                              <Link
                                key={element.id}
                                to={socialMediaLink.url}
                                target="_blank"
                              >
                                <span className="text-7xl">
                                  {element.name === socialMediaLink.name
                                    ? element.component
                                    : ""}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                </div>

                <div className="other-links">
                  {links &&
                    links.map((link) => {
                      return (
                        <div key={link._id} className="link-container">
                          <Link to={link.url} className="link-url">
                            {link.url}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default UserProfile;
