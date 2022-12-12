const tabClick = (i,tabList,settabList) => {
  let temp = tabList.map((item, index) => {
    if (i === index) {
      item.active = true;
    } else {
      item.active = false;
    }
    return item;
  });
  settabList([...temp]);
};

export default tabClick;
