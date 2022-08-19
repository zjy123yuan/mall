import {request } from './request'

export function getDetail(iid){
  return request({
    url:"/detail",
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    //商品标题
    this.title=itemInfo.title
    //商品描述
    this.desc = itemInfo.desc
    //商品现价格，字符串，可以是一个范围
    this.newPrice = itemInfo.price
    //商品旧价格，字符串
    this.oldPrice = itemInfo.oldPrice
    //价格描述
    this.discount = itemInfo.discountDesc
    //收藏，销量，快递
    this.columns = columns
    //商家特点，发货快，无理由退换等
    this.services= services
    //价格数字
    this.realPrice = itemInfo.lowNowPrice
  }
}


export class Shop {
  constructor(shopInfo) {
    //商家logo
    this.logo = shopInfo.shopLogo;
    //商家名称
    this.name = shopInfo.name;
    //商家粉丝
    this.fans = shopInfo.cFans;
    //销售量
    this.sells = shopInfo.cSells;
    //最多评价
    this.score = shopInfo.score;
    //商品种类
    this.goodsCount = shopInfo.cGoods
    //商家店铺位置
    this.url = shopInfo.shopUrl
  }
}



export function getRecommend(iid){
  return request({
    url:"/recommend",
    params:{
      iid
    }
  })
}