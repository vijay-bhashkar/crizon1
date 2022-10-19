import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { BiRefresh } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
export const ListView = () => {
  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="viewadduser">
                <ul>
                  <li>
                    <BiUserPlus className="icon" /> <span>Add User</span>
                  </li>
                  <li>
                    <AiOutlineUnorderedList className="icon" />{" "}
                    <span>Add User</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
      <div className="table_view_list">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                S.NO
              </th>
              <th scope="col">Name of Patient</th>
              <th scope="col">Company</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Status</th>
              <th scope="col">Edit & Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-center">
                1
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                2
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                3
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                4
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                5
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                6
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                7
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                8
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                9
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                10
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                11
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                12
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                13
              </th>
              <th scope="row">Abhishek Malik</th>
              <td>absolute123</td>
              <td>ajitsood@celiacdiseaseindia.com</td>
              <td>9856423185</td>
              <td>
                <span className="active"> Active </span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
