import Env from './env';

export default {

  apiUrl: Env.url,
  apiKey: Env.key,

  get(key) {
    return this[key];
  }

}
