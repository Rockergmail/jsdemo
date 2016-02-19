      gotoApp: function() {
        var ua = navigator.userAgent.toLowerCase();

        if (/android/.test(ua)) {
          // This is android
          var versionMatch = ua.match(/chrome\/(\d+)/)

          if (ua.match(/MicroMessenger/i) || ua.match(/weibo/i)){
            Maleskine.showWeixinHelp();
          }
          else if (ua.match(/MQQBrowser/i) || ua.match(/QQ/i)) {
            Maleskine.showQQHelp();
          }
          else if (25 <= (versionMatch && versionMatch[1])) {
            // Browser is Chrome, version equal to and greater than 25
            // Set intent
            window.location = "intent://notes/" + Maleskine.note.slug + "/#Intent;scheme=jianshu;package=com.jianshu.haruki;end"
          } else {
            var iframe = document.createElement('iframe');
            iframe.hidden = true;
            iframe.src = "jianshu://notes/" + Maleskine.note.slug;
            document.body.appendChild(iframe);

            var startTime = new Date();
            window.setTimeout(function() {
              600 > new Date() - startTime && (Maleskine.showDownloadHelp())
            }, 400)
          }
        }

        if (/iphone|ipad|ipod/.test(ua)) {
          // in iOS
          if (ua.match(/MicroMessenger/i) || ua.match(/weibo/i)){
            Maleskine.showWeixinHelp();
          }
          else if (ua.match(/MQQBrowser/i) || ua.match(/QQ/i)) {
            Maleskine.showQQHelp();
          } else {
            window.location = "jianshu://p/" + Maleskine.note.slug;
            window.setTimeout(function() {
              window.location = "https://itunes.apple.com/cn/app/jian-shu/id888237539?ls=1&amp;mt=8";
            }, 400);
          }
        }
      }