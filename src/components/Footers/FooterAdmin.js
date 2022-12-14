import React from "react";

import { Link } from "react-router-dom";

export default function FooterAdmin() {

  const promptadmin = (e) =>{
    e.preventDefault();
    let pass = window.prompt("Enter admin as Password for Admin site");
    //alert(pass);
    if (pass==="admin"){
      window.location="/admin";
    } else{
      window.alert("Wrong Password");
    }

  }

  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-admin"
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
              <li>
                <button
                onClick= {promptadmin}>
                  <a //to="/admin"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Admin
                  </a>
                </button>
              </li>
              <li>
                  <a
                    href="https://github.com/dsajobs/dsa3101-2210-06-dsajobs/issues"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nr-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
