import { useParams } from "react-router-dom";

function NotFound(params) {
  const notFoundMsg = useParams();

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red", margin: "50px" }}>
        {notFoundMsg.notf} 404 found!!
      </h1>
    </div>
  );
}
export default NotFound;
