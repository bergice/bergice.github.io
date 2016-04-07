(function() {
  $(function() {
    var fileexists, loadpage, page;
    loadpage = function(name) {
      return $.get(name, function(data) {
        return $('#content').html(data);
      });
    };
    $(".pageportal").click(function(event) {
      var page;
      page = $(this).attr("href").substr(1);
      return loadpage(page + ".html");
    });
    fileexists = function(page) {
      return $.get(page).done(function() {
        return true;
      }).fail(function() {
        return false;
      });
    };
    page = window.location.hash;
    if (((page = page.substr(1)) != null) && fileexists(page)) {
      if (!page === "") {
        return loadpage(page + ".html");
      } else {
        return loadpage("home.html");
      }
    } else {
      return loadpage("404.html");
    }
  });

}).call(this);
