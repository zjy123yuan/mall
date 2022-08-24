import {request } from './request'

export function getCategorytitle(){
  return request({
    url:"/category",
    params:{
      maityKey:'3627'
    }
  })
}
export function getCategorydata(maitKey){
  return request({
    url:"/subcategory",
    params:{
      maitKey,
    }
  })
}
export function getCategoryDetaildata(miniWallkey){
  return request({
    url:"/subcategory/detail",
    params:{
      miniWallkey,
    }
  })
}