import React from "react";
import IconText from "./IconText";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <footer className="mt-24 mb-14 ">
      <div className="container border-t-2 px-8 lg:px-36 md:px-32">
        <div className="grid grid-rows grid-cols-12 gap-4">
          <div className="col-start-1 col-end-5 flex flex-col items-start mt-11">
            <IconText />
            <span href="/" className="text-gray-400 font-thin mt-5">
              We kaboom your beauty holiday instantly and memorable.
            </span>
          </div>
          <div className="col-start-5 col-end-8 mt-12">
            <h3 className="mb-6 text-gray-900 text-lg font-medium">For Beginners</h3>
            <ul className="text-gray-400 font-thin">
              <li className="py-1">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="py-1">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="py-1">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-start-8 col-end-10 mt-12">
            <h3 className="mb-6 text-gray-900 text-lg font-medium">Explore Us</h3>
            <ul className="text-gray-400 font-thin">
              <li className="py-1">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="py-1">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="py-1">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-start-10 col-end-13 mt-12">
            <h3 className="mb-6 text-gray-900 text-lg font-medium">Connect Us</h3>
            <ul className="text-gray-400 font-thin">
              <li className="py-1">
                <Button type="link" href="/mailto:support@staycation.id">
                  support@staycation.id
                </Button>
              </li>
              <li className="py-1">
                <Button type="link" href="/tel:02122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="py-1">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p className="text-center font-thin text-gray-400 my-12">Copyright 2021 • All rights reserved • Staycation</p>
        </div>
      </div>
    </footer>
  );
}
