$ ->

    # Loads the page described in name into #content.
    loadpage = (name) ->
        $.get(name, (data) ->

            $('#content').html(data)

            $(".pageportal").unbind("click")
            # put inside loadpage after applying new html content to update listeners.
            $(".pageportal").click((event) ->
                page = $(this).attr("href").substr(1)
                loadpage(page+".html")
            )

        ).fail( ->

            loadpage("404.html")

        )


    # Figure out if we have a hash tag, and load it if possible.
    page = window.location.hash

    if page

        page = page.substr(1) + ".html";
        loadpage(page)

    else

        loadpage("home.html")
