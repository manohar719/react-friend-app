const Utility = {
  //sort object name
  compareNameAsc: (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  },

  compareNameDesc: (a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  },

  compareFavourateAsc : (a,b) => {
    if (!a['is_favourate'] && b['is_favourate'])
      return 1;
    if (a['is_favourate'] && !b['is_favourate'])
      return -1;
    return a- b
  },

  compareFavourateDesc : (a,b) => {
    if (!a['is_favourate'] && b['is_favourate'])
      return -1;
    if (a['is_favourate'] && !b['is_favourate'])
      return 1;
    return a- b
  }

};

export default Utility;
