function getBarProperty(propertyType, barIndex) {
    // following logic decide each progress bar's property value
    // eg. bar 1 color's property value is color1
    return propertyType + barIndex;
}

$(function () {
    var defaultBgColor = '#73CFE6';
    var errorBgcolor = 'red';
    var ractive = new Ractive({
        el: '#app',
        template: "#template",
        data: { width1: '50', width2: '30', width3: '10', color1: defaultBgColor, color2: defaultBgColor, color3: defaultBgColor }
    });

    $(".control").click(function (e) {
        var $currentTarget = $(e.currentTarget);
        var increament = parseInt($currentTarget.data("value"), 10);
        var barIndex = $('#progressSelector').val();
        var existingWidth = parseInt(ractive.get(getBarProperty("width", barIndex)), 10);
        var newWidth = existingWidth + increament;
        if (newWidth < 0) {
            newWidth = 0;
        }

        if (newWidth > 100) {
            ractive.set(getBarProperty("color", barIndex), errorBgcolor);
        }
        else {
            ractive.set(getBarProperty("color", barIndex), defaultBgColor);
        }

        ractive.set(getBarProperty("width", barIndex), newWidth);
    });
});