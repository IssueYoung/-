// pages/shopIndex/shopIndex.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/3.png',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    category_list:
      [{
        id: 2,
        icon:
          'https://asks.oss-cn-beijing.aliyuncs.com/jielebei/about/about-hk.png',
        name: '女士外套',
        url: 'http://www.baidu.com'
      },
      {
        id: 3,
        icon:
          'https://asks.oss-cn-beijing.aliyuncs.com/jielebei/about/about-jk.png',
        name: '礼品箱包',
        url: 'http://www.baidu.com'
      },
      {
        id: 4,
        icon:
          'https://asks.oss-cn-beijing.aliyuncs.com/jielebei/about/about-rz.png',
        name: '家用电器',
        url: 'http://www.baidu.com'
      },
      {
        id: 5,
        icon:
          'https://asks.oss-cn-beijing.aliyuncs.com/jielebei/about/about-rz.png',
        name: '美妆护理',
        url: 'http://www.baidu.com'
      }],
    special_list: [{
      id: 1,
      t_id: 1,
      name: '手机专区',
      banner_data: {
        "id": 2,
        "name": "aaa",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png"
      },
      thumb_list: [{
        "id": 3,
        "name": "bbb",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/2.png"
      },
      {
        "id": 4,
        "name": "ccc",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/3.png"
      },
      {
        "id": 5,
        "name": "ddd",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/4.png"
      }
      ],
      goods_list: [{
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      {
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      {
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      {
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      ]
    },
    {
      id: 7,
      t_id: 5,
      name: '儿童专区',
      banner_data: {
        "id": 2,
        "name": "aaa",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png"
      },
      thumb_list: [{
        "id": 3,
        "name": "bbb",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/2.png"
      },
      {
        "id": 4,
        "name": "ccc",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/3.png"
      },
      {
        "id": 5,
        "name": "ddd",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/4.png"
      }
      ],
      goods_list: [{
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      {
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      {
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      {
        "id": "1",
        "name": "手机",
        "thumb": "https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/app/1.png",
        "price": "14.21",
        "max_cycle": "12",
        "min_money": "2.3"
      },
      ]
    }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTo(){
      wx.navigateTo({
        url: '../category/category',
      })
    },
    goDetail(e) {
      wx.navigateTo({
        url: '../goodsDetail/goodsDetail?id=' + e.target.dataset.id,
      })
    }
  }
})
