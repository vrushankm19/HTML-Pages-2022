var dteNow = new Date();
var intYear = dteNow.getFullYear();

$('#copyright').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('CurrentCopyrightYear', intYear)); 
});