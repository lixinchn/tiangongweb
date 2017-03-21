let conf = {
  'host': 'http://tiangong.sogou.com',
}

conf.userInfo = conf.host + '/user/info'
conf.datasetApply = conf.host + '/dataset/apply'
conf.dataset = conf.host + '/dataset/page'
conf.latestNews = conf.host + '/news/latest'
conf.login = conf.host + '/user/login'
conf.news = conf.host + '/news/item'
conf.randCode = conf.host + '/user/randcode'
conf.register = conf.host + '/user/register'
conf.datasetList = conf.host + '/dataset/list'
conf.userInfoEdit = conf.host + '/user/edit'

export {conf}
