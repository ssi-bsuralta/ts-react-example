export function MyFetchJSON(uri: string, options: any = {}, cache = false) {
  if (cache) {
    const tmp1 = getItem(JSON.stringify([uri, options]));

    if (tmp1 != undefined) {
      return JSON.parse(tmp1);
    }
  }

  return new Promise((resolve, reject) => {
    fetch(uri, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw null;
        }
      })
      .then(data => {
        setItem(JSON.stringify([uri, options]), JSON.stringify(data));
        resolve(data);
      })
      .catch(() => reject(null));
  });
}

export function MyFetch(uri: string, options: any = {}, cache = false) {
  if (cache) {
    const tmp1 = getItem(JSON.stringify([uri, options]));

    if (tmp1 != undefined) {
      return JSON.parse(tmp1);
    }
  }

  return new Promise((resolve, reject) => {
    fetch(uri, options)
      .then(res => {
        if (res.ok) {
          return res.text();
        } else {
          throw null;
        }
      })
      .then(data => {
        setItem(JSON.stringify([uri, options]), JSON.stringify(data));
        resolve(data);
      })
      .catch(() => reject(null));
  });
}

const data: any = {};
function setItem(key: string, value: string) {
  data[key] = value;
}

function getItem(key: string) {
  return data[key];
}
