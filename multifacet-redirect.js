
$(document).ready(function() {
    $('.s-lg-link-list').each(function () {
        var href = $(this).attr('href');
        if (href.contains("multifacet/record") > -1) {
            var accessionNumber = href.slice(href.length - 8);
            console.log(accessionNumber);
        }
})});


$(document).ready(function() {

    $('a[href*="multifacet/record"]').each(function() 
        {alert('Contains multifacet')};


})});







replaceWith("https://proxy.lib.miamioh.edu/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat00344a&site=eds-live&scope=site&AN=mucat."+accessionNumber);






$(document).ready(function () {
    $(".s-lib-box-content a").text(function (index, text) {
    return text.replace("Example", "jQuery Tutorial");
    });
});



location.assign("https://www.w3schools.com"+edsLocation);

https://proxy.lib.miamioh.edu/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat00344a&site=eds-live&scope=site&AN=mucat."+acc



$(".s-lib-box-content").children().each(function () {
    $(this).html( $(this).html().replace(/@/g,"$") );
});


let str = "Visit Microsoft!";
str.replace("Microsoft", "W3Schools");

$(  ":contains( 'search text' )" );

document.body.innerHTML = document.body.innerHTML.replace('hello', 'hi');


<script type="text/javascript">
$(function() {
    var foundin = $('*:contains("/multifacet/record/")');
});
</script>