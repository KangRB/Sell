/**
 * Localstorage 存取对象
 * saveToLocal(浏览器地址id，键，值)
 * loadFromLocal(浏览器地址id，键，值)
 */
export const store = {
  saveToLocal: (id, key, value) => {
    let seller = window.localStorage.__seller__;
    if (!seller) {
      seller = {};
      seller[id] = {};
    } else {
      seller = JSON.parse(seller); // json字符串解释成json对象
      if (!seller[id]) {
        seller[id] = {};
      }
    }
    seller[id][key] = value;
    window.localStorage.__seller__ = JSON.stringify(seller);
  },
  loadFromLocal: (id, key, def) => {
    let seller = window.localStorage.__seller__;
    if (!seller) {
      return def;
    }
    seller = JSON.parse(seller)[id];
    if (!seller) {
      return def;
    }
    let ret = seller[key];
    return ret || def;
  }
};
