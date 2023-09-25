import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  // export class Spinner extends Component {
  // render() {
  return (
    <div className="d-flex justify-content-center m-5 p-5">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
