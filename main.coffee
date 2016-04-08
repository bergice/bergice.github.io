$ ->

    loadpage = (name) ->
        $.get(name, (data) ->
            $('#content').html(data)

            $(".pageportal").unbind("click")
            # put inside loadpage after applying new html content to update listeners.
            $(".pageportal").click((event) ->
                page = $(this).attr("href").substr(1)
                loadpage(page+".html")
            )

        )

    # or put here to reduce load

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
