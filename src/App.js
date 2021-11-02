import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";

class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      status: "",
      gender: "",
      bId: "",
      dob: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="containerEle">
          <label htmlFor="name">Full Name :&nbsp;</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            id="name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="containerEle">
          <label htmlFor="gender">Gender :&nbsp;</label>
          <input
            type="radio"
            name="gender"
            checked={this.state.gender === "Male"}
            onChange={() => this.setState({ gender: "Male" })}
          />
          <label>&nbsp;Male</label>
          <div className="spacer" />
          <input
            type="radio"
            name="gender"
            checked={this.state.gender === "Female"}
            onChange={() => this.setState({ gender: "Female" })}
          />
          <label>&nbsp;Female</label>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth :&nbsp;</label>
          <input
            type="date"
            namae="dob"
            id="dob"
            value={this.state.dob}
            onChange={(e) => this.setState({ dob: e.target.value })}
          />
        </div>
        <div className="containerAddr">
          <label htmlFor="address">Address :&nbsp;</label>
          <textarea
            style={{ resize: "none" }}
            rows={3}
            id="address"
            name="address"
            value={this.state.address}
            onChange={(e) => this.setState({ address: e.target.value })}
          />
        </div>
        <div className="containerEle">
          <label htmlFor="beneficiaryId">Beneficiary ID :&nbsp;</label>
          <input
            type="text"
            namw="beneficiaryId"
            id="beneficiaryId"
            value={this.state.bId}
            onChange={(e) => this.setState({ bId: e.target.value })}
          />
        </div>
        <div className="containerEle">
          <label htmlFor="status">Status :&nbsp;</label>
          <input
            type="radio"
            name="statusNF"
            checked={this.state.status === "Not Vaccinated"}
            onChange={() => this.setState({ status: "Not Vaccinated" })}
          />
          <label htmlFor="statusNF">&nbsp;Not Vaccinated</label>
          <div className="spacer" />
          <input
            type="radio"
            name="statusV"
            checked={this.state.status === "Vaccinated"}
            onChange={() => this.setState({ status: "Vaccinated" })}
          />
          <label htmlFor="statusV">&nbsp;Vaccinated</label>
        </div>
      </div>
    );
  }
}

export default function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <div>
        <div onClick={handlePrint} id="submitBtn">
          Print this out!
        </div>
      </div>
    </div>
  );
}
