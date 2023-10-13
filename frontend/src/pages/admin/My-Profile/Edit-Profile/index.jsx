import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteData,
  getData,
} from "../../../../services/axios.service";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { errorToast, successToast } from "../../../../services/toast.service";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate=useNavigate()
  const [Links, setLinks] = useState([]);
  const { token, current_user_info } = useSelector((state) => {
    return state.auth;
  });
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

  //  update link handler
  const handleLinkUpdateHandler = (id) => {
    navigate(`/admin/edit-profile/${id}`)
  };
  return (
    <div className="max-w-lg mx-auto mb-2 mt-1 bg-white shadow-lg p-4 rounded-md">
      {current_user_info && (
        <>
          <div className="add-profile">
            <h1 className="text-gray-500 text-xl my-3">Add Profile Image</h1>
          
            <img
              src={current_user_info?.profileImageUrl?.url ? current_user_info.profileImageUrl.url : "#"}
              alt="Loading-image"
              className="h-[130px] w-[130px] rounded-full"
            />
          </div>
          <div className="add-cover-photo mt-[30px]">
            <h1 className="text-gray-500 text-xl my-3">Add Cover Image</h1>
            <img
              src={current_user_info?.coverImageUrl?.url ? current_user_info.coverImageUrl.url : ""}
              className="h-[130px] w-[130px] rounded-full"
              alt="Loading-image"
            />
          </div>

          <div className="social-media-links"></div>
        </>
      )}

      <div className="other-media-links">
        <button className=" my-[20px]  flex justify-center items-center bg-gradient-to-r from-[#2D2F84] to-[#662E91] h-[50px] md:w-[450px] w-[300px] text-[#FFFFFF] rounded-full ml-[10px]" onClick={()=>navigate('/admin/create-link')}>
          <AddIcon /> Add Links
        </button>
        {Links &&
          Links.map((link) => {
            return (
              <div
                key={link._id}
                className="flex  justify-between gap-5 bg-[#ededed] p-4 m-2 rounded-lg mx-[20px]"
              >
                <div className="">
                  <h5 className="text-xl">{link.title}</h5>
                  <h5 className="text-gray-500 cursor-pointer">{link.url}</h5>
                </div>
                <div className="buttons flex gap-5">
                  <button onClick={() => handleLinkDelete(link._id)}>
                    <DeleteIcon />
                  </button>
                  <button onClick={() => handleLinkUpdateHandler(link._id)}>
                    <EditIcon />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EditProfile;
