const devMode = process.env.NODE_ENV === 'development'

const config = {
  PORT: 6060, // 启动端口
  ADMIN_GITHUB_LOGIN_NAME: 'victorwong', // 博主的 github 登录的账户名 user
  GITHUB: {
    client_id: '1b7df78e0673abf33b6c',
    client_secret: '816c28bd53e033acc5ba246bf9e0639d2b3ae31a',
    access_token_url: 'https://github.com/login/oauth/access_token',
    fetch_user_url: 'https://api.github.com/user', // 用于 oauth2
    fetch_user: 'https://api.github.com/users/' // fetch user url https://api.github.com/users/gershonv
  },
  EMAIL_NOTICE: {
    // 邮件通知服务
    // detail: https://nodemailer.com/
    enable: true, // 开关
    transporterConfig: {
      host: 'smtp.163.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'victor318x@gmail.com', // generated ethereal user
        pass: '123456' // generated ethereal password 授权码 而非 密码
      }
    },
    subject: 'V先生的博客 - 您的评论获得新的回复！', // 主题
    text: '您的评论获得新的回复！',
    WEB_HOST: 'http://127.0.0.1:3000' // email callback url
  },
  TOKEN: {
    secret: 'guo-test', // secret is very important!
    expiresIn: '720h' // token 有效期
  },
  DATABASE: {
    database: 'blog_sql',
    user: 'root',
    password: '',
    options: {
      host: 'localhost', // 连接的 host 地址
      dialect: 'mysql', // 连接到 mysql
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define: {
        timestamps: false, // 默认不加时间戳
        freezeTableName: true // 表名默认不加 s
      },
      timezone: '+08:00'
    }
  }
}

// 部署的环境变量设置
if (!devMode) {
  console.log('env production....')

  // ==== 配置数据库
  config.DATABASE = {
    ...config.DATABASE,
    database: 'blog_sql', // 数据库名
    user: 'root', // 账号
    password: '' // 密码
  }

  // 配置 github 授权
  config.GITHUB.client_id = '1b7df78e0673abf33b6c'
  config.GITHUB.client_secret = '816c28bd53e033acc5ba246bf9e0639d2b3ae31a'

  // ==== 配置 token 密钥
  config.TOKEN.secret = '123'

  // ==== 配置邮箱

  // config.EMAIL_NOTICE.enable = true
  config.EMAIL_NOTICE.transporterConfig.auth = {
    user: 'victor318x@gmail.com', // generated ethereal user
    pass: 'qwert666' // generated ethereal password 授权码 而非 密码
  }
  // config.EMAIL_NOTICE.WEB_HOST = 'https://guodada.fun'
}

module.exports = config
