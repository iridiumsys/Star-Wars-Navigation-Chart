var size = 0;
var placement = 'point';

var style_SYSTEMScopie_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    size = 0;
    var labelFont = "11.700000000000001px \'Franklin Gothic Medium\', sans-serif";
    var labelFont2 = "9px \'Franklin Gothic \', italic sans-serif";
    var labelFont3 = "10px \'Franklin Gothic Medium\', sans-serif";
    var labelOverflow = "true"
    var labelFill = "#484848";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAME") !== null) {
       labelText = String(feature.get("NAME"));
    }
      
        function rules_SYSTEMScopie_6(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Style by logic
            //CAPITAL SYSTEM (Coruscant)
            if (exp_SYSTEMScopie_6rule0_eval_expression(context)) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 10.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52 }), fill: new ol.style.Fill({ color: 'rgba(209,10,13,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText.toUpperCase(), labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }

            else if (exp_SYSTEMScopie_6rule1_eval_expression(context)) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 8.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(36,36,36,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52 }), fill: new ol.style.Fill({ color: 'rgba(236,228,155,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText.toUpperCase(), labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //NEBULAE
            else if (exp_SYSTEMScopie_6rule2_eval_expression(context) && resolution >= 0.085) {
                return [new ol.style.Style({
                    image: new ol.style.Icon({
                        imgSize: [580, 580],
                        scale: 0.05517241379310345,
                        anchor: [0, 0],
                        anchorXUnits: "pixels",
                        anchorYUnits: "pixels",
                        rotation: 0,
                        src: "styles/amenity_firestation.svg"
                    })
                })];
            }

            else if (exp_SYSTEMScopie_6rule2_eval_expression(context) && resolution < 0.085) {
                return [new ol.style.Style({
                    image: new ol.style.Icon({
                        imgSize: [580, 580],
                        scale: 0.05517241379310345,
                        anchor: [0, 0],
                        anchorXUnits: "pixels",
                        anchorYUnits: "pixels",
                        rotation: 0,
                        src: "styles/amenity_firestation.svg"
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont2,labelOverflow,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //MINOR SYSTEMS
            else if (exp_SYSTEMScopie_6rule3_eval_expression(context) && resolution >= 0.3) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 5.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(70,70,70,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.7 }),
                        fill: new ol.style.Fill({ color: 'rgba(249,249,249,1.0)' })
                    })
                })];
            }

            else if (exp_SYSTEMScopie_6rule3_eval_expression(context) && resolution < 0.3) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 5.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(70,70,70,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.7 }),
                        fill: new ol.style.Fill({ color: 'rgba(249,249,249,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, labelOverflow, placement, bufferColor, bufferWidth)
                })];
            }
            //ASTEROID FIELDS
            else if (exp_SYSTEMScopie_6rule4_eval_expression(context)) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 9.6 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(90,90,90,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52 }),
                        fill: new ol.style.Fill({ color: 'rgba(255,255,255,0.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont3,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //'Space station' AND scale < 4
            else if (exp_SYSTEMScopie_6rule5_eval_expression(context)) {
                return [new ol.style.Style({
                    image: new ol.style.RegularShape({
                        radius: 2.4 + size, points: 4,
                        angle: Math.PI / 4, stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(119,119,119,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont2,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //'Space station' AND scale = 4
            else if (exp_SYSTEMScopie_6rule6_eval_expression(context) && resolution < 0.085) {
                return [new ol.style.Style({
                    image: new ol.style.RegularShape({
                        radius: 2.4 + size, points: 4,
                        angle: Math.PI / 4, stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(119,119,119,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //'Wreck' AND scale < 4
            else if (exp_SYSTEMScopie_6rule7_eval_expression(context) && resolution < 0.085) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 2.4 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(119,119,119,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //'Wreck' AND scale = 4
            else if (exp_SYSTEMScopie_6rule8_eval_expression(context) && resolution < 0.085) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 2.4 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(119,119,119,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //Black Hole
            else if (exp_SYSTEMScopie_6rule9_eval_expression(context)) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 6.8 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(218,211,197,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04 }), fill: new ol.style.Fill({ color: 'rgba(34,34,34,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //Star Cluster
            else if (exp_SYSTEMScopie_6rule10_eval_expression(context)) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 4.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(241,241,241,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                }), new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 4.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(241,241,241,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                }), new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 4.0 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(241,241,241,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //Anomaly
            else if (exp_SYSTEMScopie_6rule11_eval_expression(context) && resolution < 0.085) {
                return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 5 + size,
                        stroke: new ol.style.Stroke({ color: 'rgba(53,38,60,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }), fill: new ol.style.Fill({ color: 'rgba(98,78,115,1.0)' })
                    }),
                    text: createTextStyle(feature, resolution, labelText, labelFont,
                        labelFill, placement, bufferColor,
                        bufferWidth)
                })];
            }
            //Hyperspace Relay
            else if (exp_SYSTEMScopie_6rule12_eval_expression(context) && resolution < 0.085) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.2 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(247,247,247,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
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