// pages/category/category.js
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
    activity:11,
    children_list: [{
      "id": 12,
      "name": "男装",
      "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
    }, {
        "id": 12,
        "name": "男装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      }, {
        "id": 12,
        "name": "男装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      }, {
        "id": 12,
        "name": "男装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      }, {
        "id": 12,
        "name": "男装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      }, {
        "id": 12,
        "name": "男装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      }],
    category_list: [{
      "id": 11,
      "name": "服装",
      "child": [{
        "id": 12,
        "name": "男装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      },
      {
        "id": 14,
        "name": "童装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      },
      {
        "id": 13,
        "name": "女装",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      },
      {
        "id": 15,
        "name": "袜子",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      },
      {
        "id": 16,
        "name": "鞋",
        "thumb": 'https://asks.oss-cn-beijing.aliyuncs.com/ydzbapp/yonghudengji/v1bg.png',
      }
      ]
    },
    {
      "id": 1,
      "name": "家用电器"
    },
    {
      "id": 6,
      "name": "办公用品"
    },
    {
      "id": 7,
      "name": "居家用品"
    },
    {
      "id": 8,
      "name": "生活用品"
    }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      var that = this;
      that.setData({
        "activity": e.target.dataset.id
      });
      

    },
  }
})
