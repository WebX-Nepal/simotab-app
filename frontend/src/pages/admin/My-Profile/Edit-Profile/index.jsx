import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./editProfile.css";
import {
  deleteData,
  getData,
  postDataWithHeader,
  updateDataWithHeader,
} from "../../../../services/axios.service";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { errorToast, successToast } from "../../../../services/toast.service";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
  BsTiktok,
  BsSnapchat,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import CreateLink from "../../../../components/forms/Link/createLink";
import { loadUser } from "../../../signin/auth.Slice";
import { Link } from "react-router-dom";

import ProfileImageUpload from "../../../../components/image.uploader.profile";
import CoverImageUpload from "../../../../components/image.uploader.cover";

const EditProfile = () => {
  const dispatch = useDispatch();
  // for model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // for social-media-link
  const [SocialMedia, setSocialMedia] = useState({
    name: "",
    url: "",
  });
  const [showFormOrSocialMediaKits, setshowFormOrSocialMediaKits] =
    useState(false);

  // modal for updating the profile picture
  const [openProfilePictuteModel, setopenProfilePictuteModel] = useState(false);
  const handleOpenProfilePictureModel = () => setopenProfilePictuteModel(true);
  const handleCloseProfilePictureModel = () =>
    setopenProfilePictuteModel(false);

  // modal for updating the cover picture
  const [openCoverPictuteModel, setopenCoverPictuteModel] = useState(false);
  const handleOpenCoverPictureModel = () => setopenCoverPictuteModel(true);
  const handleCloseCoverPictureModel = () => setopenCoverPictuteModel(false);

  // modal for creating the other-links
  const [openOtherLink, setopenOtherLink] = useState(false);
  const handleOpenLink = () => setopenOtherLink(true);
  const handleCloseLink = () => setopenOtherLink(false);

  // modal for editing the other-links
  const [updOtherLink, setupdOtherLink] = useState({
    title: "",
    url: "",
  });
  const [openUpdOtherLinkModel, setopenUpdOtherLinkModel] = useState(false);
  const handleOpenUpdLink = () => setopenUpdOtherLinkModel(true);
  const handleCloseUpdLink = () => setopenUpdOtherLinkModel(false);

  // links
  const [Links, setLinks] = useState([]);
  const { token, current_user_info } = useSelector((state) => {
    return state.auth;
  });
  // to as props for the createLink which in another page
  const getLinks = (data) => {
    setLinks([...Links, data]);
  };

  // to get the user link in useEffect
  const getUser = async () => {
    const otherLinkResponse = await getData(`other-links/user/me`, token);

    if (otherLinkResponse.success) {
      setLinks(otherLinkResponse.otherLinks);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  //   delete link handler
  const handleLinkDelete = async (id) => {
    const deleteme = await deleteData(`other-links/${id}`);
    if (deleteme.success) {
      successToast(
        deleteme.message ? deleteme.message : "Link deleted sucessfully"
      );
      const newLinks = Links.filter((link) => link._id != id);
      setLinks(newLinks);
    } else {
      errorToast(
        deleteme.message ? deleteme.message : "Unable to delete the link"
      );
    }
  };

  // update other-link-handler(form fill up)
  const handleUpdateLinkhandler = async (id) => {
    localStorage.setItem("updated_item", id);

    const data = await getData(`other-links/${id}`);
    if (data.success) {
      setupdOtherLink({
        title: data.otherLink.title,
        url: data.otherLink.url,
      });
    }
  };
  // update other-link-handler(form submit with user interaction)
  const handleUpdateOtherLinkFormSubmit = async () => {
    const id = localStorage.getItem("updated_item");
    const response = await updateDataWithHeader(
      `other-links/${id}`,
      updOtherLink,
      token
    );
    if (response.success) {
      successToast(
        response.message ? response.message : "Other-links updated successfully"
      );
      let newUpdatedData = [];
      Links.map((link) => {
        if (link._id === id) {
          newUpdatedData.push(response.otherLink);
        } else {
          newUpdatedData.push(link);
        }
      });
      setLinks(newUpdatedData);
      setupdOtherLink({ title: "", url: "" });
      localStorage.removeItem("updated_item");
    }
  };

  // available social media kits

  const elements = [
    {
      name: "Facebook",
      id: 1,
      component: <BsFacebook className="text-blue-700" />,
    },
    {
      name: "Instagram",
      id: 2,
      component: <BsInstagram className="text-[#ee0c11]" />,
    },
    {
      name: "tiktok",
      id: 3,
      component: <BsTiktok className="text-black" />,
    },
    {
      name: "Twitter",
      id: 4,
      component: <BsTwitter className="text-blue-600" />,
    },
    {
      name: "Linkedin",
      id: 5,
      component: <BsLinkedin className="text-blue-800" />,
    },
    {
      name: "Gmail",
      id: 6,
      component: <BiLogoGmail className="text-re" />,
    },
    {
      name: "Github",
      id: 7,
      component: <BsGithub className="text-slate-800" />,
    },
    {
      name: "Snapchat",
      id: 8,
      component: <BsSnapchat />,
    },
    {
      name: "Whatsapp",
      id: 9,
      component: <BsWhatsapp className="text-green-600" />,
    },
    {
      name: "Youtube",
      id: 10,
      component: <BsYoutube className="text-red-700" />,
    },
  ];

  // handle the socialLinkFormSubmit
  const handleSocialLinkSubmit = async () => {
    console.log(SocialMedia);
    const response = await postDataWithHeader(
      "users/insert-social-media",
      SocialMedia,
      token
    );
    if (response.success) {
      dispatch(loadUser(response.user));
      successToast(
        response.message
          ? response.message
          : "Social-Media link added successfully"
      );
      handleClose();
    }
  };

  return (
    <>
      <div className="flex  gap-[300px] mt-[-90px]">
        <div className="ms-[30%]   mb-2 mt-1  bg-[#FFF] shadow-lg p-[20px] rounded-md">
          {current_user_info && (
            <>
              <div className="add-profile">
                <h1 className="text-gray-500 text-xl my-3">
                  Add Profile Image
                </h1>
                <div className="profile-image-wrapper">
                  <div className="change-profile-container shadow-lg rounded-full flex justify-center items-center">
                    <button onClick={() => handleOpenProfilePictureModel()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <path
                          d="M7.0835 17H17.0002M17.0002 17H26.9168M17.0002 17V7.08334M17.0002 17V26.9167"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    {/* profile modal */}
                    <Modal
                      open={openProfilePictuteModel}
                      onClose={handleCloseProfilePictureModel}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className="bg-white w-[500px] h-[50vh] update-profile-image rounded-md">
                        <button
                          className="text-2xl absolute right-0  mx-3"
                          onClick={() => handleCloseProfilePictureModel()}
                        >
                          <MdOutlineCancelPresentation />
                        </button>
                        <ProfileImageUpload
                          handleCloseProfilePictureModel={
                            handleCloseProfilePictureModel
                          }
                        />
                      </Box>
                    </Modal>

                    {/* profile modal */}
                  </div>

                  <img
                    src={
                      current_user_info?.profileImageUrl?.url
                        ? current_user_info.profileImageUrl.url
                        : "#"
                    }
                    alt="Loading-image"
                    className="h-[74px] w-[74px] rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="add-cover-photo mt-[30px]">
                <h1 className="text-gray-500 text-xl my-3">Add Cover Image</h1>
                <div className="cover-image-wrapper">
                  <div className="change-cover-container shadow-lg rounded-full flex justify-center items-center h-[74px] w-[74px]">
                    <button onClick={() => handleOpenCoverPictureModel()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <path
                          d="M7.0835 17H17.0002M17.0002 17H26.9168M17.0002 17V7.08334M17.0002 17V26.9167"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div>
                    <Modal
                      open={openCoverPictuteModel}
                      onClose={handleCloseCoverPictureModel}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className="bg-white w-[500px] h-[50vh] update-profile-image rounded-md">
                        <button
                          className="text-2xl absolute right-0  mx-3"
                          onClick={() => handleCloseCoverPictureModel()}
                        >
                          <MdOutlineCancelPresentation />
                        </button>
                        <CoverImageUpload
                          handleCloseCoverPictureModel={
                            handleCloseCoverPictureModel
                          }
                        />
                      </Box>
                    </Modal>
                  </div>

                  <img
                    src={
                      current_user_info?.coverImageUrl?.url
                        ? current_user_info.coverImageUrl.url
                        : ""
                    }
                    className="h-[78px] w-[201px]  rounded-sm object-cover"
                    alt="Loading-image"
                  />
                </div>
              </div>

              {/* border line  */}
              <div className="border-line shadow-lg text-white"></div>

              {/* bio section */}

              <div className="bio">
                <p className="bio-text">
                  Business is all about knowing more opportunities.
                </p>
              </div>

              <h1 className="text-gray-500 text-[20px] my-2">Link lists</h1>
              <div className="social-media-links">
                {current_user_info.socialMediaLinks.map((socialMediaLink) => {
                  return (
                    <div key={socialMediaLink._id} className="mt-2">
                      {elements.map((element) => {
                        return (
                          <Link
                            key={element.id}
                            to={socialMediaLink.url}
                            target="_blank"
                            className="social-media-item object-contain"
                          >
                            <span className="text-7xl ">
                              {element.name === socialMediaLink.name ? (
                                <SocialIcon url={socialMediaLink.url} />
                              ) : (
                                ""
                              )}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}

                <div className="social-media-item w-[80.497px] h-[80.497px] mt-[10px]">
                  <button
                    onClick={() => {
                      handleOpen();
                      setshowFormOrSocialMediaKits(false);
                      setSocialMedia({ name: "", url: "" });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="87"
                      viewBox="0 0 89 87"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_646_465)">
                        <rect
                          x="2.50342"
                          y="1"
                          width="84.497"
                          height="82.2734"
                          rx="9"
                          fill="#EBEBEB"
                        />
                      </g>
                      <path
                        d="M28.8418 42.1367H44.7515M44.7515 42.1367H60.6611M44.7515 42.1367V26.227M44.7515 42.1367V58.0464"
                        stroke="#9A9A9A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <filter
                          id="filter0_d_646_465"
                          x="0.503418"
                          y="0"
                          width="88.4971"
                          height="86.2734"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_646_465"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_646_465"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="model-popup">
                <button
                  className="text-2xl absolute right-0  mx-3"
                  onClick={handleClose}
                >
                  <MdOutlineCancelPresentation />
                </button>
                {!showFormOrSocialMediaKits ? (
                  <h1 className="text-center text-2xl mt-4 p-2 mb-4">
                    Select the Social-Media Icons
                  </h1>
                ) : (
                  <h1 className="text-center text-2xl mt-4 p-2 mb-4">
                    Enter the {SocialMedia.name} Link
                  </h1>
                )}
                <ul>
                  {!showFormOrSocialMediaKits &&
                    elements.map((element) => {
                      return (
                        <button
                          key={element.id}
                          onClick={(e) => {
                            e.preventDefault();
                            setSocialMedia({
                              ...SocialMedia,
                              name: element.name,
                            });
                            setshowFormOrSocialMediaKits(true);
                          }}
                          className="block"
                        >
                          <li className="flex items-center gap-3 p-3">
                            <h1 className="text-2xl">{element.component}</h1>
                            <h1 className="text-2xl">{element.name}</h1>
                          </li>
                        </button>
                      );
                    })}
                </ul>
                {showFormOrSocialMediaKits && (
                  <Box>
                    <input
                      type="text"
                      className="model-input mb-3"
                      value={SocialMedia.url}
                      onChange={(e) => {
                        e.preventDefault();
                        setSocialMedia({ ...SocialMedia, url: e.target.value });
                      }}
                      placeholder="Enter the Url"
                    />
                    <button
                      className="relative left-[60%]  btn1  "
                      onClick={() => handleSocialLinkSubmit()}
                    >
                      Submit{" "}
                    </button>
                  </Box>
                )}
              </Box>
            </Modal>
          </div>
          <div className="other-media-links">
            <h1 className="text-gray-500 text-[20px] my-3">Link lists</h1>
            <button className="add-links" onClick={() => handleOpenLink()}>
              <AddIcon /> Add Links
            </button>
            <div>
              <Modal
                open={openOtherLink}
                onClose={handleCloseLink}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modal-other-link ">
                  <button
                    onClick={() => handleCloseLink()}
                    className="text-2xl absolute right-0  mx-3"
                  >
                    {" "}
                    <MdOutlineCancelPresentation />{" "}
                  </button>
                  <CreateLink
                    handleCloseLink={handleCloseLink}
                    getLinks={getLinks}
                  />
                </Box>
              </Modal>
            </div>
            {Links &&
              Links.map((link) => {
                return (
                  <div
                    key={link._id}
                    className="flex  justify-between gap-5 bg-[#EDEDED] p-4 m-2 rounded-lg"
                  >
                    <div className="">
                      <h5 className="text-xl">{link.title}</h5>
                      <h5 className="text-gray-500 cursor-pointer">
                        {link.url}
                      </h5>
                    </div>
                    <div className="buttons flex gap-5">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleUpdateLinkhandler(link._id);
                          handleOpenUpdLink();
                        }}
                      >
                        <EditIcon />
                      </button>
                      <div>
                        <Modal
                          open={openUpdOtherLinkModel}
                          onClose={handleCloseUpdLink}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          {
                            <Box className="modal-other-link">
                              <button
                                onClick={() => handleCloseUpdLink()}
                                className="text-2xl absolute right-0  mx-3"
                              >
                                {" "}
                                <MdOutlineCancelPresentation />{" "}
                              </button>
                              <div className="mb-4 mt-2 p-2">
                                <label htmlFor="title">Title</label>
                                <input
                                  type="text"
                                  className="mb-2 p-2 w-full border"
                                  value={updOtherLink.title}
                                  onChange={(e) =>
                                    setupdOtherLink({
                                      ...updOtherLink,
                                      title: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="mb-4 mt-2 p-2">
                                <label htmlFor="url">Url</label>
                                <input
                                  type="text"
                                  className="mb-2 p-2 w-full border"
                                  value={updOtherLink.url}
                                  onChange={(e) =>
                                    setupdOtherLink({
                                      ...updOtherLink,
                                      url: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="mb-4 p-2">
                                <button
                                  className="btn2"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleUpdateOtherLinkFormSubmit();
                                    handleCloseUpdLink();
                                  }}
                                >
                                  {" "}
                                  submit{" "}
                                </button>
                              </div>
                            </Box>
                          }
                        </Modal>
                      </div>
                      <button onClick={() => handleLinkDelete(link._id)}>
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* mobile_view of image */}
        <div className="view-profile-wrapper">
          <div className="view-profile">
            <img
              src={
                current_user_info?.coverImageUrl?.url
                  ? current_user_info.coverImageUrl.url
                  : ""
              }
              alt=""
              className="h-[78px] w-[201px]  rounded-sm object-cover flex justify-center ml-[-15%]"
            />
            <img
              src={
                current_user_info?.profileImageUrl?.url
                  ? current_user_info.profileImageUrl.url
                  : "#"
              }
              alt=""
              className="h-[74px] w-[74px] rounded-full object-cover mt-[-40px] mx-9"
            />
            <div className="view-profile-bio">
              <h1 className="shadow-lg p-2">
                Business is all about knowing more opportunities.
              </h1>
            </div>
            <button className="view-profile-phoneBtn">Add To Your Phone</button>
            <div className="view-profile-social-media-links">
              {current_user_info.socialMediaLinks.map((socialMediaLink) => {
                return (
                  <div key={socialMediaLink._id} className="">
                    {elements.map((element) => {
                      return (
                        <Link
                          key={element.id}
                          to={socialMediaLink.url}
                          target="_blank"
                        >
                          <span className="text-3xl">
                            {element.name === socialMediaLink.name ? (
                              <SocialIcon url={socialMediaLink.url} />
                            ) : (
                              ""
                            )}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="view-profile-other-links">
              {Links &&
                Links.map((link) => {
                  return (
                    <div
                      key={link._id}
                      className="view-profile-link-container shadow-lg mt-2"
                    >
                      <Link to={link.url} className="view-profile-link-url">
                        {link.url}
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
