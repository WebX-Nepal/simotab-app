import  { useState, useRef } from "react";
import "./index.css";
import { updateDataWithHeader } from "../../services/axios.service";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../pages/signin/auth.Slice";
import PropTypes from "prop-types";
import { successToast } from "../../services/toast.service";
function CoverImageUpload(props) {
    const {token , current_user_info}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const [loading, setloading] = useState(true)

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick =async() => {
    var formdata = new FormData();
    if(image){
        setloading(false)
        formdata.append("image", image);
        console.log(image)
        console.log(formdata)
        const response=await updateDataWithHeader('update-user-cover-image',formdata,token)
        console.log(response)
        if(response.success){
            successToast(response.message?response.message:"Cover picture updated successfully")
            dispatch(loadUser(response.updatedUser))
            props.handleCloseCoverPictureModel()
            setloading(true)
        }
    }
}


  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
            Select Cover image
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
            <img src={  current_user_info?.coverImageUrl?.url
                ? current_user_info.coverImageUrl.url
                : "#"} alt="click here to upload an image" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="btn1"
          onClick={handleUploadButtonClick}
        >
            {loading?
                "Upload":"Uploading......"
            }
        </button>
      </div>
    </div>
  );

}
export default CoverImageUpload

CoverImageUpload.propTypes={
    handleCloseCoverPictureModel:PropTypes.func
  
}