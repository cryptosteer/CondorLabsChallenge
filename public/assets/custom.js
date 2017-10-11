var pageIndex = 1;

$(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.cebroker.com/v2/featuredCoursesProfession?profession=36",
        data: "DATA",
        success: function (response) {
            $.each(response, function(index, item){
                var name = item.coursePublication.course.name;
                var featuredBanner = item.coursePublication.course.featuredBanner;
                var provider = item.coursePublication.course.provider.name;
                var hours = item.coursePublication.totalHours;
                var price = "No information";
                if(item.coursePublication.price){
                    price = item.coursePublication.price;
                }
                var deliveryMethod = "No information";
                if(item.coursePublication.course.deliveryMethod){
                    deliveryMethod = item.coursePublication.course.deliveryMethod.description;
                }
                var result = `
                <div class="col-md-4 featured-image">
                    <img src=https://storage.cebroker.com/CEBroker/${featuredBanner}>
                </div>
                <div class="col-md-8 featured-content">
                    <div class="thumbnail thumbnail-course">
                        <a href="#" class="thumbnail-link"></a>
                        <span></span>
                        <div class="thumbnail-wrapper ">
                            <div class="thumbnail-body anytime ">
                                <span></span>
                                <div class="thumbnail-title "><span style="white-space: nowrap;">
                                    <span>${name}</span>
                                </span></div>
                                <div class="avatar ">
                                    <a class="ellipsis" href="#"><span>${provider}, INC.</span></a>
                                </div>
                                <span class="thumbnail-body-contrast" style="white-space: nowrap;">
                                    <span>${hours} Hrs • ${deliveryMethod} </span>
                                    </span>
                                </span>
                            </div>
                            <hr>
                            <div class="thumbnail-footer ">
                                <p class="label price-success label-success price-info">$ ${price}</p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>`;
                $('#featured-results').append(result);
            });
        },
        error: function (response) {
            alert('failure: ' + response.responseText);
        }
    });

    searchCourses();

    $("#term-button").on("click", function() {
        searchCourses();
    });

    $("#term-input").on('change', function() {
        searchCourses();
    });

    $("#prev-pag").on("click", function() {
        if(pageIndex>1){
            pageIndex -= 1;
            searchCourses();
        }
    });

    $("#next-pag").on("click", function() {
        pageIndex += 1;
        searchCourses();
    });
});

function searchCourses(){
    $("#pagination").hide();
    $('#courses-results').html("Searching...");
    $('#totalItems').html("?");
    termInput = $("#term-input").val();
    var url = "https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=" + pageIndex + "&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27";
    termInput = termInput.trim();
    if(termInput != ""){
        url = url.replace(/ /g, '%20');
        url = url+"&courseName="+termInput
    }
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        data: "DATA",
        success: function (response) {
            $("#pagination").show();
            $("#totalItems").html(response.totalItems);
            $('#courses-results').html("");
            $.each(response.items, function(index, item){
                var name = item.course.name;
                var provider = item.course.provider.name;
                var hours = item.totalHours;
                var price = "No information";
                if(item.price){
                    price = item.price;
                }
                var deliveryMethod = "No information";
                if(item.course.deliveryMethod.description){
                    deliveryMethod = item.course.deliveryMethod.description;
                }
                var result = `
                <div class="col-md-4 featured-content">
                    <div class="thumbnail thumbnail-course">
                        <a href="#" class="thumbnail-link"></a>
                        <span></span>
                        <div class="thumbnail-wrapper ">
                            <div class="thumbnail-body anytime ">
                                <span></span>
                                <div class="thumbnail-title "><span style="white-space: nowrap;">
                                    <span>${name}</span>
                                </span></div>
                                <div class="avatar ">
                                    <a class="ellipsis" href="#"><span>${provider}, INC.</span></a>
                                </div>
                                <span class="thumbnail-body-contrast" style="white-space: nowrap;">
                                    <span>${hours} Hrs • ${deliveryMethod} </span>
                                    </span>
                                </span>
                            </div>
                            <hr>
                            <div class="thumbnail-footer ">
                                <p class="label price-success label-success price-info">$ ${price}</p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>`;
                $('#courses-results').append(result);
            });
        },
        error: function (response) {
            alert('failure: ' + response.responseText);
        }
    });
}
