/* eslint-disable */
import request from "../utils/request";

export function getHello(){
  return request({
    url: "/api/v1/hello",
    method: "get"
  });
}