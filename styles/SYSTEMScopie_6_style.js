var size = 0;
var placement = 'point';

var style_SYSTEMScopie_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText_up = "";
    var labelText_dw = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Franklin Gothic Medium\', sans-serif";
    var labelFill = "#484848";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAME") !== null) {
        labelText_up = String(feature.get("NAME")).toUpperCase();
    }
    if (feature.get("NAME") !== null) {
        labelText_dw = String(feature.get("NAME"));
    }
    
        function rules_SYSTEMScopie_6(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_SYSTEMScopie_6rule0_eval_expression(context) && resolution < 18) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(209,10,13,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_up, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
            }
                    if (exp_SYSTEMScopie_6rule0_eval_expression(context) && resolution >= 18) {
                      return [new ol.style.Style({
        image: new ol.style.Circle({
                        radius: 10.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52 }), fill: new ol.style.Fill({ color: 'rgba(209,10,13,1.0)' })
                    }),
        text: createTextStyle(feature, resolution, labelText_up, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
                    else if (exp_SYSTEMScopie_6rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(36,36,36,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(236,228,155,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.05517241379310345,
                  anchor: [16, 16],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 1.047198,
                  src: "styles/amenity_firestation.svg"
            }),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(24,24,24,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(237,237,237,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(90,90,90,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,255,255,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule5_eval_expression(context) ) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.4 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(119,119,119,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.4 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(119,119,119,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(119,119,119,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(119,119,119,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule9_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(218,211,197,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(34,34,34,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule10_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(241,241,241,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(241,241,241,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(241,241,241,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule11_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(53,38,60,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(98,78,115,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SYSTEMScopie_6rule12_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.2 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(247,247,247,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText_dw, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_SYSTEMScopie_6(feature, value);
        ;

    return style;
};
