$ ->

    # Loads the page described in name into #content.
    loadpage = (name) ->
        $("#spinner").fadeIn("55")
        $("#content").load(name, (response, status, xhr) ->
            if status is "error"
                loadpage("404.html")
            else
                $("#spinner").fadeOut("55", ->
                    $(".pageportal").unbind("click")
                    $(".pageportal").click((event) ->
                        page = $(this).attr("href").substr(1)
                        loadpage(page+".html")
                    )
                )
        )

    # Figure out if we have a hash tag, and load it if possible.
    page = window.location.hash

    if page
        page = page.substr(1) + ".html"
        loadpage(page)

    else
        loadpage("home.html")


    # Scale sidebar accordingly to #content left margin.
#    updateSideBar = ->
#        side = $("#sidebar")
#        content = $("#content")
#        width = parseFloat(content.css("marginLeft")) - parseFloat(side.css("marginLeft")) - parseFloat(side.css("marginRight"))
#        side.width(width)
#
#    $(window).resize( ->
#        updateSideBar()
#    )
#    updateSideBar()
