//scoll down for prop info
import React from "react";
import { Link } from "react-router-dom";

function CustomButton({
  innerRef,
  parentProps,
  iconName,
  btnName,
  isLinkImg,
  ImgSrc,
  imgClass = "img-fluid",
  btntype = "submit",
  roundedPill,
  isBtn,
  isLink,
  path = "/Dashboard",
  ClickEvent,
  isDownloadableLink,
  downloadAbleLink,
  small,
  downloadAble,
  noIcon,
  noIconMargin,
  greenBtn,
  navPills,
  pillActive,
  navDataType = "",
  redBtn,
  extraClass,
  changeClass,
  noClass,
}) {
  // console.log(isLink, path, "link check");
  const LinkClass = (roundedPill, small) => {
    let classes = "btn btn-1 bg-black text-white";
    if (roundedPill) {
      classes += " rounded-pill";
    }
    if (small) {
      classes += " btn-sm";
    }
    if (extraClass) {
      classes += ` ${extraClass}`;
    }
    if (changeClass) {
      classes = changeClass;
    }
    if (noClass) {
      classes = "";
    }
    return classes;
  };
  const PillClass = () => {
    let classes = "nav-link";
    if (extraClass) {
      classes += ` ${extraClass}`;
    }
    if (changeClass) {
      classes = changeClass;
    }
    if (noClass) {
      classes = "";
    }
    if (pillActive) {
      classes += " active";
    }
    return classes;
  };

  return (
    <>
      {isBtn && (
        <button {...parentProps} ref={innerRef} type={btntype} className={LinkClass(roundedPill, small)} onClick={ClickEvent}>
          {!noIcon && <i className={`${iconName} me-2`}></i>}
          {btnName}
        </button>
      )}
      {isLink && (
        <Link {...parentProps} ref={innerRef} className={LinkClass(roundedPill, small)} to={path} onClick={ClickEvent} download={downloadAble ? true : false}>
          {!noIcon && <i className={noIconMargin ? `${iconName}` : `${iconName} me-2`}></i>}
          {!isLinkImg && btnName}

          {isLinkImg && <img src={ImgSrc} alt="" className={imgClass} />}
        </Link>
      )}
      {!isLink && !path && (
        <Link {...parentProps} ref={innerRef} className={LinkClass(roundedPill, small)} to={!path ? "/" : path} onClick={ClickEvent} download={downloadAble ? true : false}>
          {!noIcon && <i className={noIconMargin ? `${iconName}` : `${iconName} me-2`}></i>}
          {!isLinkImg && btnName}

          {isLinkImg && <img src={ImgSrc} alt="" className={imgClass} />}
        </Link>
      )}
      {greenBtn && (
        <Link {...parentProps} ref={innerRef} to={path} className="btn btn-green" onClick={ClickEvent}>
          {btnName}
        </Link>
      )}
      {redBtn && (
        <button {...parentProps} ref={innerRef} className="btn btn-red">
          {btnName}
        </button>
      )}
      {navPills && (
        <button {...parentProps} ref={innerRef} type="button" role="tab" className={PillClass()} onClick={ClickEvent} aria-selected={pillActive ? true : false} data-type={navDataType}>
          {btnName}
        </button>
      )}
      {
        isDownloadableLink &&
        <a className={LinkClass(roundedPill, small)} href={downloadAbleLink} target="_blank" download>
          {!noIcon && <i className={noIconMargin ? `${iconName}` : `${iconName} me-2`}></i>}
          {btnName}
        </a>
      }
    </>
  );
}

export default CustomButton;
//Enable button = isbtn
//Enable Link = isLink
//Enable green button = green btn
//Enable red button = redBtn
//Enable Link with image button = isLinkImg
//ImgSrc = URL of image
//imgClass = image class, default = img-fluid
//nav-pills = navPills,pillActive
//pillActive = adds active class on pill tab
//navDataType = nav-pill data type
//noIcon = used when no icon is needed with button
//noIconMargin = used to remove margin right given by icon
//iconName = name of icon
//btnName = button name
//Styles = roundedPill,small
//path = button path, default = /
//ClickEvent = adds a onclick event
//downloadAble = to download document from button
//extraClass = to add extra classes
//changeClass = is to default classes
//noClass = adds no class
//btntype = type of button, default = submit
