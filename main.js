(function() {
  $(function() {
    var loadpage, page;
    loadpage = function(name) {
      $("#spinner").fadeIn("55");
      return $("#content").load(name, function(response, status, xhr) {
        if (status === "error") {
          return loadpage("404.html");
        } else {
          return $("#spinner").fadeOut("55", function() {
            $(".pageportal").unbind("click");
            return $(".pageportal").click(function(event) {
              var page;
              page = $(this).attr("href").substr(1);
              return loadpage(page + ".html");
            });
          });
        }
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
