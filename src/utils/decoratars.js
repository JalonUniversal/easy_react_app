import axios from 'axios';

/**
 * http 请求方法
 * @param {object} options 
 */
export async function request(options) {
  if(!options) {
    console.log('[WARN]: Missing Request Options');
  }
  try {
    return await axios(options);
  } catch(error) {
    console.log('[ERROR]: ', error);
  }
}

request.get = axios.get;
request.post = axios.post;
request.put = axios.put;
request.delete = axios.delete;

/**
 * enhance 装饰器允许增强目标类
 * @param {Class Component} target 
 */
export function enhance(target) {
  target.prototype.log = console.log;
  target.prototype.info = console.info;
  target.prototype.warn = console.warn;
  target.prototype.fetch = request;
  target.prototype.axios = axios;
}

