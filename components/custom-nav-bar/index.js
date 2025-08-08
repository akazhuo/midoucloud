const appInstance = getApp();
Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  properties: {
  },
  data: {
    top: 0,
    statusBarHeight: 0, // 状态栏高度
  },
  observers: {
    navigationStyle: function(style) {
      this.setNavigationStyle()
    }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      const res = wx.getWindowInfo()

      this.setData({
        statusBarHeight: res.statusBarHeight,
      }, this.setNavigationStyle)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    /**
     * 设置导航栏样式
     **/
    setNavigationStyle () {
      const res = wx.getWindowInfo()
      let contentStyle = `padding-top: ${(res.safeArea.top < 22 ? 22 : res.safeArea.top) * 2}rpx;`
      // contentStyle += `position: absolute;`

      this.setData({
        contentStyle
      })
    }
  }
});
