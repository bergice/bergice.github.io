(function() {
  $(function() {
    var loadpage, page;
    loadpage = function(name) {
      return $.get(name, function(data) {
        $('#content').html(data);
        $(".pageportal").unbind("click");
        return $(".pageportal").click(function(event) {
          var page;
          page = $(this).attr("href").substr(1);
          return loadpage(page + ".html");
        });
      }).fail(function() {
        return loadpage("404.html");
      });
    };
    page = window.location.hash;
    if (page) {
      page = page.substr(1) + ".html";
      return loadpage(page);
    } else {
      return loadpage("home.html");
    }
  });

}).call(this);
