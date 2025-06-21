// 获取url参数
export const getUrlParams = (url) => {
  const params = {};
  const urlParams = new URLSearchParams(new URL((url || window.location.href)).search).entries();
  for (const [key, value] of urlParams) {
    params[key] = value;
  }
  return params;
};

// 获取无参url
export const getPureUrl = (url) => {
  let _url = url || window.location.href;
  const index = _url.indexOf('?');
  if(index !== -1) _url = _url.substring(0, index);
  return _url;
};