import React from "react";
import Layout from '../Component/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact to Online dairy"}>
      <div className="row contactus">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="/images/new.avif"
            alt="contactus"
            style={{
              width: "80%",
              maxWidth: "400px",
              height: "auto",
              margin: "auto",
              display: "block"
            }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about products, feel free to call anytime. We are available 24x7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
