/* eslint-disable */
import request from "../utils/request";
export function getNewHouse() {
  return request({
    url: "/newhouse-web/pub/social/card/cardHouseList",
    method: "post"
  });
}

const list = [
  {name:'豪方天际',price:'12万'},
  {name:'大冲商务中心',price:'23万'},
  {name:'科兴科学园',price:'20万'},
  {name:'百度国际大厦',price:'13万'},
  {name:'浩天大厦',price:'21万'},
  {name:'金港华庭',price:'7万'},
  {name:'大松泉小区',price:'3万'}
];
export function fetchHouseList() {
  return new Promise(resolve=>{
      setTimeout(()=>{
          resolve(list);
      },500);
  })
}

export function getHello(){
  return request({
    url: "/api/v1/hello",
    method: "get"
  });
}