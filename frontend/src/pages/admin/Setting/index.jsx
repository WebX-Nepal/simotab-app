import { useSelector } from "react-redux";
import "./index.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import ChangeName from "../../../components/forms/ChangeName";
import ChangeEmail from "../../../components/forms/ChangeEmail";
import ChangePassword from "../../../components/forms/ChangePassword";

const Setting = () => {
  const { current_user_info } = useSelector((state) => state.auth);
  const [openName, setopenName] = useState(false);
  const handleOpenName = () => setopenName(true);
  const handleCloseName = () => setopenName(false);

  const [openEmail, setopenEmail] = useState(false);
  const handleopenEmail = () => setopenEmail(true);
  const handleCloseEmail = () => setopenEmail(false);

  const [openPassword, setopenPassword] = useState(false);
  const handleopenPassword = () => setopenPassword(true);
  const handleClosePassword = () => setopenPassword(false);

  return (
    <>
      <div className="ml-[20vw] mx-auto mb-2 mt-10 p-10  ">
        <div className="setting-change-name shadow-lg mt-3 p-10 w-[60vw] bg-white">
          <h1 className="setting-change-name-title text-xl font-bold">
            Change Name
          </h1>
          <h1 className="setting-change-old-email">{current_user_info.name}</h1>
          <button className="edit-email-btn" onClick={() => handleOpenName()}>
            Edit
          </button>
          <div>
            <Modal
              open={openName}
              onClose={handleCloseName}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="name-model">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Change Name
                </Typography>
                <ChangeName handleCloseName={handleCloseName} />
              </Box>
            </Modal>
          </div>
        </div>
        <div className="setting-change-email shadow-lg mt-3 p-10 w-[60vw] bg-white">
          <h1 className="setting-change-email-title text-xl font-bold">
            Change Email
          </h1>
          <h1 className="setting-change-old-email">
            {current_user_info.email}
          </h1>
          <button className="edit-email-btn" onClick={() => handleopenEmail()}>
            Edit
          </button>
          <div>
            <Modal
              open={openEmail}
              onClose={handleCloseEmail}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="name-model">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Change Email
                </Typography>
                <ChangeEmail />
              </Box>
            </Modal>
          </div>
        </div>
        <div className="setting-change-password bg-white shadow-lg p-10 w-[60vw] mt-3">
          <h1 className="setting-change-password-title text-xl font-bold">
            Change Password
          </h1>
          <input
            type="password"
            value="default me"
            className="change-old-password"
            disabled
          />
          <button
            className="edit-email-btn"
            onClick={() => handleopenPassword()}
          >
            Edit
          </button>
          <div>
            <Modal
              open={openPassword}
              onClose={handleClosePassword}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="name-model">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Change Password
                </Typography>
                <ChangePassword />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
