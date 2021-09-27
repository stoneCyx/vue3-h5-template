import { MockMethod } from "vite-plugin-mock";


export default [
  {
    url: "/api/v1/hello",
    method: "get",
    response: () => {
      return {
        code: 0,
        info: 'Hello World!!!'
      };
    }
  }
] as MockMethod[];