const appInstance = getApp();
const TabList = [
  {
    name: '精选',
    desc: '商品推荐'
  },
  {
    name: '拉手世界',
    desc: '拉手等配件'
  },
  {
    name: '平开锁',
    desc: '门锁等配件'
  },
  {
    name: '合页',
    desc: '合页等配件'
  },
  {
    name: '角码角片',
    desc: '门锁等配件'
  },{
    name: '滑轨',
    desc: '滑轨等配件'
  }
]
const Products = [
  [
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/mimasuo.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/menbashou.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/quanjingmimasuo.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/liaoxingpeijian2.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/liaoxingpeijian.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/menbashou.png', price: 7200 },
  ],
  [
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/pdmen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/wanmeixitong.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/xuanzhuanmen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/koudaimen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/zhediemen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/menbashou.png', price: 7200 },
  ],
  [
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/menbashou.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/mimasuo.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/liaoxingpeijian2.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/koudaimen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/menbashou.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/quanjingmimasuo.png', price: 7200 },
  ],
  [
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/xuanzhuanmen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/wanmeixitong.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/xuanzhuanmen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/koudaimen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/pdmen.png', price: 7200 },
    { name:'铝范智能密码平开门锁智能新锁302', img: '/images/wanmeixitong.png', price: 7200 },
  ],
]
Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  properties: {
  },
  data: {
    current: 0,
    tabList: TabList,
    productList: Products[0]
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    tapBar(e) {
      this.setData({
        current: e.currentTarget.dataset.index
      })
      this.setProductList(e.currentTarget.dataset.index)
    },
    setProductList (index) {
      this.setData({
        productList: Products[index]
      })
    }
  }
})