import { Link } from "react-router-dom";
const MenuItem = ({ item }) => {
  return (
    <li className="mb-2 text-xl hover:bg-primary py-3 hover:text-white px-7 mx-4 rounded-lg cursor-pointer">
      <Link to="/" className="flex items-center w-full text-left">
        <i className={`${item.icon} mr-4`} />
        <span>{item.title}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
