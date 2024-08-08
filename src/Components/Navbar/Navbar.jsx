import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Favorites",
      path: "/favorites",
    },
    {
      id: 3,
      name: "Login",
      path: "/login",
    },
  ];
  return (
    <div className="md:flex justify-between items-center py-3 px-8 shadow-lg">
        <div>
            <h1 className="text-3xl font-bold">Phone-Shop</h1>
        </div>
      <nav>
        <ul>
          <li className="flex gap-8 text-[20px]">
           {
            links.map(({id, name, path})=>{
                return(
                    <NavLink
                    key={id}
                    to={path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "bg-green-400 rounded-sm px-2" : ""
                    }
                  >
                    {name}
                  </NavLink>
                )
            })
           }
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
