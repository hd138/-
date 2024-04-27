import request from '@/utils/request'

// 订单结算
// mode: care => obj cartIds
// mode : buyNow => obj {goods.....}
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // cart buyNow
      delivery: 10, // 10快递配送 20门店自提
      couponId: 0, // 优惠券Id 传0 不使用优惠券
      isUsePoints: 0, // 积分 传0 不使用积分
      ...obj // 将传递过来的传输对象 动态展开
    }
  })
}

// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    payType: 10, // 余额支付
    ...obj
  })
}

// 获取我的订单
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
