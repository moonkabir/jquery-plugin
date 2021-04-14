      $(function () {
            var self = $("#masonry");

            self.imagesLoaded(function () {
                self.masonry({
                    gutterWidth: 15,
                    isAnimated: true,
                    itemSelector: ".card-container"
                });
            });

            $(".filters .btn").click(function(e) {
                e.preventDefault();

                var filter = $(this).attr("data-filter");

                self.masonryFilter({
                    filter: function () {
                        if (!filter) return true;
                        return $(this).attr("data-filter") == filter;
                    }
                });
            });
        });