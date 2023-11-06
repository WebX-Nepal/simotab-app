import AddFaqSection from "../AddfaqSection";

const SideBarSuperAdmin = () => {
  return (
    <div>
      <div className="wrapper flex gap-4">
        <div className="sidebar-items bg-black text-white p-3 w-[25vw] flex justify-center rounded-xl">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>FAQ</li>
            <li>Testinomial</li>
            <li>Products</li>
            <li>Users</li>
          </ul>
        </div>
        <div className="item">
          <AddFaqSection />
        </div>
      </div>
    </div>
  );
};

export default SideBarSuperAdmin;
