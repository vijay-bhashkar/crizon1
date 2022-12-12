import React from "react";
import { Modal, Box } from "@mui/material";
import AddCategory from "../Products/Category/AddCategory";
import AddBrandForm from "../Products/Brand/AddBrandForm";
import AddAttribute from "../Products/Attribute/AddAttribute";
import CustomButton from "./Button";
import ShowCategory from "../Products/Category/ShowCategory";
import ShowAttribute from "../Products/Attribute/ShowAttribute";
import ShowProduct from "../Products/ShowProduct";
import ProductDetail, { UserDetailModal } from "../Customer/CustomerDetail";
import UserDetail from "../Users/UserDetail";

export const AddModal = ({ ModalBox, setModalBox, name, ModalType, width, data }) => {
  return (
    <Modal open={ModalBox} onClose={() => setModalBox(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className="modal-box">
        <div className="modal-container" style={{ maxWidth: width ? width : "1000px" }}>
          <div className="modal-header">
            <h5>{name}</h5>
            <CustomButton
              isBtn
              btntype="button"
              iconName="ion-close-circled text-white"
              changeClass="border-0 bg-transparent rounded-circle modal-close"
              ClickEvent={(e) => {
                e.preventDefault();
                setModalBox(false);
              }}
            />
          </div>
          <div className="modal-body">
            {ModalType === "addCategoryModal" && <AddCategory makeChange={true} />}
            {ModalType === "addBrandModal" && <AddBrandForm makeChange={true} />}
            {ModalType === "addAttributeModal" && <AddAttribute />}
            {ModalType === "show-category" && <ShowCategory data={data} />}
            {ModalType === "show-attribute" && <ShowAttribute data={data} />}
            {ModalType === "show-product" && <ShowProduct data={data} />}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export const EditModal = ({ ModalBox, setModalBox, name, ModalType, width, data }) => {
  console.log(data, "data")
  return (
    <Modal open={ModalBox} onClose={() => setModalBox(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className="modal-box">
        <div className="modal-container" style={{ maxWidth: width ? width : "1000px" }}>
          <div className="modal-header">
            <h5>{name}</h5>
            <CustomButton
              isBtn
              btntype="button"
              iconName="ion-close-circled text-white"
              changeClass="border-0 bg-transparent rounded-circle modal-close"
              ClickEvent={(e) => {
                e.preventDefault();
                setModalBox(false);
              }}
            />
          </div>
          <div className="modal-body">{ModalType === "product-detail" && <ProductDetail customerData={data} />}</div>
          <div className="modal-body">{ModalType === "customer-detail" && <UserDetailModal customerData={data} />}</div>
        </div>
      </Box>
    </Modal>
  );
};
