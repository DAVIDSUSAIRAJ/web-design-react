// import { useParams } from "react-router-dom";

function NotFound(params) {
  // const notFoundMsg = useParams();

  return (
    <div>
      <p style={{ textAlign: "center", color: "red", marginTopp: "150px" }}>
        {/* {notFoundMsg.notf} 404 found!! */}
        Error 404 found!!
      </p>
      <h1>go to home page!!</h1>
    </div>
  );
}
export default NotFound;
