// components/banner.js
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
    current: 0,
    imgHeight: 0,
    banners: [
      {
        id: 0, url: '/images/swiper.png',
      },
      {
        id: 1, url: '/images/swiper.png',
      },
      {
        id: 2, url: '/images/swiper.png',
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadImg(res) {
      const _this = this
      const query = wx.createSelectorQuery().in(this)
      query.select('#first-img').boundingClientRect()
      query.exec(function (res) {
        _this.setData({
          imgHeight: res[0].height
        })
      })
    },
    swiperChange (e) {
      this.setData({
        current: e.detail.current
      })
    }
  }
})