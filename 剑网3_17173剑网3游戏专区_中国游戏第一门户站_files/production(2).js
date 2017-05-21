'use strict';

(function() {

  adv.AdBase.extend('AdZqIndexCover', {
    init: function(options) {
      this.base(options);

      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
      var me = this;
      me.data = data;

      me.css = '<style>.adzqcover-con{position: fixed;  _position:absolute; left:50%; margin-left: -500px; top: 50%; margin-top: -265px; z-index: 100; }\
      .adzqcover-close{position: absolute; right: 0; top: -18px; cursor: pointer; width:67px; height: 18px;  background:url(http://ue.17173cdn.com/a/lib/vda/img/close_ad.png) no-repeat}\
      .adzqcover-close:hover{ background:url(http://ue.17173cdn.com/a/lib/vda/img/close_ad_hover.png) no-repeat}\
      .adzqcover-hsw{position: fixed; _position:absolute; display:none; left: 50%; margin-left:-600px; top:486px; width: 100px; height: 100px; }\
      .adzqcover-show{position: absolute; bottom: -20px; right: 0; width:46px; height:20px; background:url(http://ue.17173cdn.com/a/lib/vda/img/replay.png) no-repeat;  }\
      .adzqcover-show:hover{background:url(http://ue.17173cdn.com/a/lib/vda/img/replay_hover.png) }\
       </style>'
      var tmplFn = function() {
        /*@preserve

                  <div class="adzqzmqsyindexcover" >
                    <div class="adzqcover-con" >
                      <a class="adzqcover-close" href="javascript:;" > </a>
                      <a href="@link" target="_blank">
                        <img src="@source" width="1000" height="530">
                      </a> 
                    </div>
                    <div class="adzqcover-hsw" style="background:url(@hsw)">
                      <a href="javascript:;" class="adzqcover-show" ></a>
                    </div>
                  </div>

                 
              */
      }
      this.html = $(adv.razor(tmplFn, {
        link: data.link,
        source: data.source,
        hsw: data.hsw
      }));



      this.emit(adv.ENUM.EVENTS.setuped);

    },

    bindEvent: function() {
      var self = this;


      $('head').append(self.css)
      $('.adzqzmqsyindexcover').on('click', '.adzqcover-close', function() {
        $('.adzqcover-con').hide();
        $('.adzqcover-hsw').show();
        clearTimeout(self.t)
      })

      $('.adzqzmqsyindexcover').on('click', '.adzqcover-show', function() {
        $('.adzqcover-con').show();
        $('.adzqcover-hsw').hide();
        self.t = setTimeout(function() {
          $('.adzqcover-con').hide();
          $('.adzqcover-hsw').show();

        }, 5000)

      })

    },

    play: function() {
      var self = this;

      if (location.href == self.data.zqurl) {

        $('body').append(this.html);
        this.t = setTimeout(function() {
          $('.adzqcover-con').hide();
          $('.adzqcover-hsw').show();

        }, 5000)

        // $(window).resize(function() {
        //   var width = $(this).width(),
        //   height = $(this).height();
        //   $('.adzqcover-con').css({left:'50%','margin-left': -500  })

        // })

        this.bindEvent()



        this.emit(adv.ENUM.EVENTS.played);
      }


    }
  });

})();