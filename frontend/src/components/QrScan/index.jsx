import { useSelector } from "react-redux";
import { postDataWithHeader } from "../../services/axios.service";
import { useEffect, useState } from "react";

const QrScanCode = () => {
  const [QrCode, setQrCode] = useState("");
  const { userId, token } = useSelector((state) => state.auth);

  const generateQrCode = async () => {
    const url = `http://localhost:5173/user-profile/${userId}`;
    const response = await postDataWithHeader("generate-qr", { url }, token);
    if (response.success) {
      setQrCode(response.qr_code);
    }
  };

  useEffect(() => {
    generateQrCode();
  });

  return <div>{QrCode && <img src={QrCode} alt="" />}</div>;
};

export default QrScanCode;
