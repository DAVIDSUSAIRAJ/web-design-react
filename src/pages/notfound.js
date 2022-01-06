import { useParams } from "react-router-dom";

function NotFound(params) {
  const notFoundMsg = useParams();

  return (
    <div>
      <p style={{ textAlign: "center", color: "red", marginTopp: "100px" }}>
        {notFoundMsg.notf} 404 found!!
      </p>
      <h1>go to home page!</h1>
    </div>
  );
}
export default NotFound;
