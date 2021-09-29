export default {
  pages: [
    'pages/Discover/index',
    'pages/Index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#626567',
    selectedColor: '#6190E8',
    backgroundColor: '#FBFBFB',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/Discover/index',
        text: '发现',
      },
      {
        pagePath: 'pages/Index/index',
        text: '我的',
      },
    ],
  },
}
