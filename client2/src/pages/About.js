import React from "react";
import Layout from '../Component/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us -Online Dairy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.avif"
            alt="aboutus"
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
          <h1 className="bg-dark p-2 text-white text-center" style={{ borderRadius: "8px" }}>About Us</h1>
          <p className="text-justify mt-2">
            Welcome to our online dairy, the best in town! Here’s why you should choose us:
          </p>
          <ul className="mt-3" style={{ lineHeight: "1.6" }}>
            <li>
              <strong>Quick Delivery:</strong> We ensure that our dairy products reach you as quickly as possible, maintaining their freshness and quality.
            </li>
            <li>
              <strong>Affordable Prices:</strong> Our products are priced competitively to offer you the best value for your money without compromising on quality.
            </li>
            <li>
              <strong>High-Quality Products:</strong> We source our dairy products from trusted farms, ensuring that you receive fresh, nutritious, and delicious products every time.
            </li>
            <li>
              <strong>Clean and Hygienic:</strong> Our dairy operates under strict hygiene protocols to ensure that all products are clean and safe for consumption.
            </li>
            <li>
              <strong>The Best in Town:</strong> Our commitment to quality, customer satisfaction, and exceptional service makes us the best dairy in town.
            </li>
          </ul>
          <p className="text-justify mt-2">
            Thank you for choosing our online dairy. We are dedicated to making your life easier and healthier with our top-notch products and services.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
