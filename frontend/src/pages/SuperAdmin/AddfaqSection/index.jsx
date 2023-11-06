import { useEffect, useState } from "react";
import { getDataWithoutHeader } from "../../../services/axios.service";

import { MuiTable } from "./Table";
import SuperAdminBreadcrumb from "../../../components/BreadCrums/SuperAdminBreadcruns";
const AddFaqSection = () => {
  const [rows, setrows] = useState([]);
  const getAllFaqs = async () => {
    const response = await getDataWithoutHeader("faqs");
    setrows(response.faqs);
  };

  useEffect(() => {
    getAllFaqs();
    console.log(rows, "useeffect");
  }, []);
  return (
    <>
      <SuperAdminBreadcrumb title="faq" />
      <div className="add-new-button">
        <button>Add New</button>
      </div>
      <div className="mt-5">{rows && <MuiTable tableData={rows} />}</div>
    </>
  );
};

export default AddFaqSection;
