import React from "react";
import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";

function GrievanceCell() {
  return (
    <>
    <SearchMenu/>
    <MenuBar/>
    
      <section className="container-wrapper mx-auto py-12">

      <div>
            <h1 className=" text-2xl font-bold pb-2"> Grievance Cell</h1>
          </div>
        <p>
          <strong>1. </strong>Customer / Distributor can make Grievances in
          either of the mentioned modes – Calls / Written Application / Email /
          Walk-in / Online Grievance Cell, etc. <br /> <br />
          <strong>2. </strong> Grievances received will be feeded into the
          internal Grievance software. A unique track Id will be generated
          against all the Grievances and is intimated to the customer /
          distributor on his / her registered Email Id and Mobile Number. <br />{" "}
          <br />
          <strong>3.</strong> Customers / distributors need to keep the unique
          track Id secure with them in order to take follow-up against the
          Grievance. <br /> <br />
          <strong>4.</strong> At first instance Grievance is handled by the
          executive of the customer care team. The executive has a period of 7
          working days to resolve the issue. In case executive is unable to
          handle the problem / grievance up to full satisfaction, the software
          escalates the issue to the next level of Grievance redressal
          committee.
          <br /> <br />
          <strong>5.</strong> The committee will meet on a 15 day period (On
          15th and 30th Calendar day of every month). All pending grievances
          will be disposed off by the committee in these meetings. If the
          grievance is not resolved within these 15 days, the grievance will be
          forwarded to next 15 day period and same will be intimated to the
          customer / distributor.
          <br /> <br />
          <strong>6.</strong> If the Grievance Committee is not able to resolve
          the issue in this time frame, the grievance is escalated to the Nodal
          Officer. Details of Nodal Officer are mentioned below:
          <br />
        </p>

        <p>Name:- Mr. Noor alam</p>
        <p>Mobile Number:+91 8851924626 </p>
        <p>Email ID: director@unifywellness.com</p>
        <p>
          Address: 55,2nd floor, Lane 2 , westend marg ,saidullajab, near saket
          metro station,new delhi ,110030
        </p>
        {/* <p style={{ paddingTop: "10px" }}>
          <strong>Nodal Officer - 1</strong>
          <br />
          Name: Mr. ShashiKant
          <br />
          Designation : Managing Director
          <br />
          Mobile Number: 7905694302
          <br />
          Email ID: info@rootvedawellness.com
        </p>

        <p style={{ paddingTop: "10px" }}>
          <strong>Nodal Officer - 2</strong>
          <br />
          Name: Mr. Lavkush Vishwakarma
          <br />
          Designation : Founder of Rootveda
          <br />
          Mobile Number: 8318121767
          <br />
          Email ID: info@rootvedawellness.com
        </p> */}
      </section>
      <Footer/>
    </>
  );
}

export default GrievanceCell;
