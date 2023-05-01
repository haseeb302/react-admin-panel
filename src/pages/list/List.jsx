import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../layout/Navbar/Navbar";
import Sidebar from "../../layout/Sidebar/Sidebar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
