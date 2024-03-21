import MenuItem from "./MenuItem";
import CardPlans from "./CardPlans";
import data from "../mock/mock.json";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <aside className="h-full w-[16%] bg-white rounded-xl">
      <div className="w-full text-end mt-3">
        <i className="fa-solid fa-chevron-left text-lg mr-3 cursor-pointer" />
      </div>
      <div className="w-full flex justify-center mt-5">
        <img
          onClick={handleNavigate}
          className="object-contain w-1/4 h-1/4 cursor-pointer"
          src="https://i.ibb.co/X8b1YwD/image-removebg-preview-1.png"
          alt="logo"
        />
      </div>
      <nav>
        <ul className="w-full mt-8">
          {data.links.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
      <CardPlans
        title={"Mi plan - Plus"}
        description={"El uso se renueva el: 3-may-23"}
      />
    </aside>
  );
};

export default Sidebar;
