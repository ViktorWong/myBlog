import React from 'react'
import MyInfo from '@/views/web/about/MyInfo'

// API_BASE_URL
export const API_BASE_URL = 'http://127.0.0.1:6060'

// project config
export const HEADER_BLOG_NAME = '嘭然欣动' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/avatar.svg'), // 侧边栏头像
  title: 'Viktor', // 标题
  subTitle: '前端打杂人员，略微代码洁癖', // 子标题
  // 个人主页
  homepages: {
    github: 'https://github.com/ViktorWong',
    juejin: 'https://juejin.im/user/5a0eb547f265da432717cd6b'
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: '1b7df78e0673abf33b6c', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}
