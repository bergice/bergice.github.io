$ ->

    loadpage = (name) ->
        $.get(name, (data) ->
            $('#content').html(data)
        )

    $(".pageportal").click((event) ->
        page = $(this).attr("href").substr(1)
        loadpage(page+".html")
    )

    fileexists = (page) ->
        $.get(page)
            .done( ->
                return true
            ).fail( ->
                return false
            )

    page = window.location.hash
    if ((page=page.substr(1))? and fileexists(page))
        if not page is ""
            loadpage(page+".html")
        else
            loadpage("home.html")
    else
        loadpage("404.html")
