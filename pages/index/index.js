// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dayList:["周一(05.09)","周二(05.10)","周三(05.11)","周四(05.12)","周五(05.13)","周六(05.14)","周日(05.15)"],
      list:[
        {num:['10:00-12:00',2,3,4,5,6,7]},
        {num:[1,2,3,4,5,6,7] },
        {num:[1,2,3,4,5,6,7]},
        {num:[1,2,3,4,5,6,7]},
        {num:[1,2,3,4,5,6,7]},
      ]
  },
  selectedAction(ev){
    console.log(ev);
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})