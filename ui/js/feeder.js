(function ($) {
    $.fn.ada_feeder = function (opt) {
        var def = $.extend({
            MaxCount: 1,
            ShowDesc: true,
            ShowPubDate: false,
            DescCharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang:"en"
        }, opt);
        
        var id = $(this).attr("id");

        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20description%20from%20rss%20\
            where%20url%3D%22http%3A%2F%2Ffeeds.feedburner.com%2Fbrainyquote%2FQUOTEBR%22%20LIMIT%20\
            1%3B&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
            dataType: "json",
            success: function (data) {
                $("#" + id).html(data.query.results.item.description.replace(/"/g, '')+'..');
            }
        });
    };
})(jQuery);