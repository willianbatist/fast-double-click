export function sortDatetimeAsc(array) {
  array.sort(function (a, b) {

    let undefinedDateB = b.datetime || '';
    let dateA = new Date(undefinedDateA.replace(/(\d{2})\/(\d{2})\/(\d{4}),/, "$2/$1/$3"));
    let dateB = new Date(undefinedDateB.replace(/(\d{2})\/(\d{2})\/(\d{4}),/, "$2/$1/$3"));

    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    } else {
      let timeA = new Date(a.datetime);
      let timeB = new Date(b.datetime);

      if (timeA < timeB) {
        return -1;
      } else if (timeA > timeB) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return array;
}


export function sortDatetimeDesc(array) {
  array.sort(function (a, b) {
    let undefinedDateA = a.datetime || '';
    let undefinedDateB = b.datetime || '';
    let dateA = new Date(undefinedDateA.replace(/(\d{2})\/(\d{2})\/(\d{4}),/, "$2/$1/$3"));
    let dateB = new Date(undefinedDateB.replace(/(\d{2})\/(\d{2})\/(\d{4}),/, "$2/$1/$3"));

    if (dateA > dateB) {
      return -1;
    } else if (dateA < dateB) {
      return 1;
    } else {
      let timeA = new Date(a.datetime);
      let timeB = new Date(b.datetime);

      if (timeA > timeB) {
        return -1;
      } else if (timeA < timeB) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return array;
}
