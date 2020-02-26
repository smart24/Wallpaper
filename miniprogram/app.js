//app.js
App({
  
  onLaunch(options) {
    // Do something initial when launch.
  },

  onShow(options) {
    // Do something when show.
  },
  
  onHide() {
    // Do something when hide.
  },
  
  onError(msg) {
    // Do something when error.
  },
  
  globalData: {
    COMMON_SEPARATOR : "/",
    URL_BASE : "https://service.picasso.adesk.com/v1/vertical/category",
    URL_CATEGORY_ROOT : "https://service.picasso.adesk.com/v1/vertical/category?adult=false&first=1",
    URL_CATEGORY_DETAIL : "/vertical?limit=30&adult=false&first=1&order=new",
  }

})