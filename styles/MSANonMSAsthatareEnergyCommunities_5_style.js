var size = 0;
var placement = 'point';
function categories_MSANonMSAsthatareEnergyCommunities_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'is an energy community, as it meets both the Fossil Fuel Employment (FFE) threshold and the unemployment rate requirement':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,153,153,0.25098039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.8499999999999996}),fill: new ol.style.Fill({color: 'rgba(179,178,235,0.6941176470588235)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_MSANonMSAsthatareEnergyCommunities_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("label_ec");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_MSANonMSAsthatareEnergyCommunities_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
