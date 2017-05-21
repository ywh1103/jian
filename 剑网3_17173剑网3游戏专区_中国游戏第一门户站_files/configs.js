/** mingjihuang@cyou-inc 2014-06-03 11:06:53
  * don't use chinese,use unicode instead
  **/
window.topbarDefaultConfig = {
  //style of topbar(current 1 or 2)
  style: 1,
  //if true,topbar will set the body's padding-top with topbar's height
  autoSetBodyPadding: true,
  //auto switch the topbar's style when page scroll
  autoToggleStyle: true,
  //When  height of the scroll bar over this,topbar's style will switch to 2
  scrollTopForStyleToggle: 150,
  homeLogCode: '0141a8aedb1b53970fac7c81dac79fbe',
  //The site navigation list
  siteNavs: {
    "\u627e\u6e38\u620f": {
      link: 'http://newgame.17173.com/game-list.html',
      logCode: '9a85c12a21b76392747906fc7b2aff92,0ffaca95e3e5242ba1097ad8a9a6e95d',
      child: [{
        link: 'http://newgame.17173.com/index.shtml#hot',
        logCode: '9a85c12a21b76392747906fc7b2aff92,5fef3eff51dc719c4a9f565a742d78f2',
        text: '\u8fd1\u671f\u70ed\u95e8'
      }, {
        logCode: '9a85c12a21b76392747906fc7b2aff92,b5b0db7f3a77ca4fcf9eca57aa7181ca',
        link: 'http://newgame.17173.com/game-list-0-0-0-0-0-0-0-0-0-0-1-2.html',
        text: '\u6700\u65b0\u5165\u5e93'
      }, {
        logCode: '9a85c12a21b76392747906fc7b2aff92,1fd7b875d3473501d1b771ebe934ca59',
        link: 'http://newgame.17173.com/testing-list.html',
        text: '\u6700\u65b0\u6d4b\u8bd5'
      }]
    },
    "\u770b\u65b0\u95fb": {
      logCode: '9a85c12a21b76392747906fc7b2aff92,98afdcc1ebd85daa0f1749c5e56b9d8c',
      link: 'http://news.17173.com/',
      child: []
    },
    "\u770b\u89c6\u9891": {
      logCode: '9a85c12a21b76392747906fc7b2aff92,939314105ce8701e67489642ef4d49e8',
      link: 'http://v.17173.com/',
      child: [{
        link: 'http://v.17173.com/live/',
        text: '\u6e38\u620f\u76f4\u64ad',
    logCode: '9a85c12a21b76392747906fc7b2aff92,da9e6a4a4aeca98588e4dd77ceb37695'
      }]
    },
    "\u62a2\u53f7": {
      logCode: '9a85c12a21b76392747906fc7b2aff92,b87470782489389f344c4fa4ceb5260c',
      link: 'http://hao.17173.com/',
      child: []
    },
    "\u9886\u798f\u5229": {
      logCode: '9a85c12a21b76392747906fc7b2aff92,9bdb8b1faffa4b3d41779bb495d79fb9',
      link: 'http://shop.17173.com/',
      child: []
    },
    "\u901b\u8bba\u575b": {
      logCode: '9a85c12a21b76392747906fc7b2aff92,e52ad5c9f751f599492b4f087ed7ecfc',
      link: 'http://bbs.17173.com/',
      child: []
    },
    "\u770b\u56e7\u56fe": {
      logCode: '9a85c12a21b76392747906fc7b2aff92,7da18d0326a9f46a4817e19c805819ae',
      link: 'http://orz.17173.com/',
      child: []
    }
  },
  //ad
  market: {
    logCode: '5a9d8bf5b7a4b35f3110dde8673bdda2',
    link: '',
    img: '',
    title: ''
  },
  //Core Products
  coreProducts: [{
    logCode: 'b99d193b66a6542917d2b7bee52c2574,416849da96fb73bee793e2bf65ae43ac',
    link: 'http://newgame.17173.com/',
    text: '\u65b0\u7f51\u6e38',
    hot: false
  }, {
    logCode: 'b99d193b66a6542917d2b7bee52c2574,142c65e00f4f7cf2e6c4c996e34005df',
    link: 'http://hao.17173.com/',
    text: '\u6fc0\u6d3b\u7801/\u793c\u5305',
    hot: false
  }, {
    logCode: 'b99d193b66a6542917d2b7bee52c2574,c5f5c23be1b71adb51ea9dc8e9d444a8',
    link: 'http://a.17173.com/',
    text: '\u624b\u673a\u5ba2\u6237\u7aef',
    hot: true
  }, {
    logCode: 'b99d193b66a6542917d2b7bee52c2574,d04d42cdf14579cd294e5079e0745411',
    link: 'http://v.17173.com/live/',
    text: '\u6e38\u620f\u76f4\u64ad',
    hot: false
  }, {
    logCode: 'b99d193b66a6542917d2b7bee52c2574,9eac167ec1efbe078138397fabba902e',
    link: 'http://Cvda.17173.com/click?media_code=17173&ad_code=171737233&resource_code=11110&order_code=1012510',
    text: '\u70ed\u95e8\u9875\u6e38',
    hot: false
  }],
  //The game list;
  games: {
    logCode: '196f5641aa9dc87067da4ff90fd81e7b',
    link: '',
    text: '\u70ed\u95e8\u6e38\u620f',
    data: [{
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,06ee4c5c93a9957c9b1bb3bd89e800c8',
      link: 'http://lol.17173.com/',
      text: '\u82f1\u96c4\u8054\u76df',
      img: 'http://ue1.17173cdn.com/a/hotgame/2014/img/lol.jpg'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,e6ba70fc093b4ce912d769ede1ceeba8',
      link: 'http://dnf.17173.com/',
      text: 'DNF',
      img: 'http://ue2.17173cdn.com/a/hotgame/2014/img/dnf.jpg'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,db98dc0dbafde48e8f74c0de001d35e4',
      link: 'http://cf.17173.com/',
      text: '\u7a7f\u8d8a\u706b\u7ebf',
      img: 'http://ue3.17173cdn.com/a/hotgame/2014/img/cf.jpg'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,abdeb6f575ac5c6676b747bca8d09cc2',
      link: 'http://hs.17173.com/',
      text: '\u7089\u77f3\u4f20\u8bf4',
      img: 'http://ue1.17173cdn.com/a/hotgame/2014/img/hs.jpg'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,e250c59336b505ed411d455abaa30b4d',
      link: 'http://xyq.17173.com/',
      text: '\u68a6\u5e7b\u897f\u6e38',
      img: 'http://ue2.17173cdn.com/a/hotgame/2014/img/xyq.jpg'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,22b1cd168ec628442b3d4dc00fca434b',
      link: 'http://bns.17173.com/',
      text: '\u5251\u7075',
      img: 'http://ue1.17173cdn.com/a/hotgame/2014/img/bns.jpg'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,51da85a3c3dfa1f360b48852b64218b2',
      link: 'http://tl.17173.com/',
      text: '\u5929\u9f99\u516b\u90e8',
      img: 'http://i2.17173.itc.cn/2016/www/2016/zq/03/22/tl.png'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,f11bec1411101c743f64df596773d0b2',
      link: 'http://jx3.17173.com/',
      text: '\u5251\u7f513',
      img: 'http://i3.17173.itc.cn/2015/www/2015/zq/11/30/av2.png'
    }, {
      logCode: '196f5641aa9dc87067da4ff90fd81e7b,414a7497190eaef6b5d75d5a6a11afcf',
      link: 'http://wows.17173.com/',
      text: '\u6218\u8230\u4e16\u754c',
      img: 'http://i3.17173.itc.cn/2015/www/2015/zq/11/30/av3.png'
    }]
    },
 quickGuide: [
  {
    img: 'http://ue1.17173cdn.com/a/lib/topbar/v2/img/channel-1.jpg',
    link: 'http://passport.17173.com',
    text: '\u7528\u6237\u4e2d\u5fc3'
  },
  {
    img: 'http://ue1.17173cdn.com/a/lib/topbar/v2/img/channel-2.jpg',
    link: 'http://v.17173.com/',
    text: '\u89c6\u9891\u4e2d\u5fc3'
  },
  {
    img: 'http://ue1.17173cdn.com/a/lib/topbar/v2/img/channel-3.jpg',
    link: 'http://hao.17173.com',
    text: '\u53d1\u53f7\u4e2d\u5fc3'
  },
  {
    img: 'http://ue1.17173cdn.com/a/lib/topbar/v2/img/channel-4.jpg',
    link: 'http://bbs.17173.com/',
    text: '\u73a9\u5bb6\u8bba\u575b'
  }]  
};