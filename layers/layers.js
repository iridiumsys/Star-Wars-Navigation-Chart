var wms_layers = [];

var format_Region4_illustrator_0 = new ol.format.GeoJSON();
var features_Region4_illustrator_0 = format_Region4_illustrator_0.readFeatures(json_Region4_illustrator_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region4_illustrator_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region4_illustrator_0.addFeatures(features_Region4_illustrator_0);
var lyr_Region4_illustrator_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region4_illustrator_0, 
                style: style_Region4_illustrator_0,
                popuplayertitle: "Region4_illustrator",
                interactive: false,
    title: 'Region4_illustrator<br />\
    <img src="styles/legend/Region4_illustrator_0_0.png" /> Deep Core<br />\
    <img src="styles/legend/Region4_illustrator_0_1.png" /> Core<br />\
    <img src="styles/legend/Region4_illustrator_0_2.png" /> Colonies<br />\
    <img src="styles/legend/Region4_illustrator_0_3.png" /> Inner Rim<br />\
    <img src="styles/legend/Region4_illustrator_0_4.png" /> Expansion Region<br />\
    <img src="styles/legend/Region4_illustrator_0_5.png" /> Mid Rim<br />\
    <img src="styles/legend/Region4_illustrator_0_6.png" /> Outer Rim<br />\
    <img src="styles/legend/Region4_illustrator_0_7.png" /> <br />'
        });
var format_SW_Grid_1 = new ol.format.GeoJSON();
var features_SW_Grid_1 = format_SW_Grid_1.readFeatures(json_SW_Grid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SW_Grid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SW_Grid_1.addFeatures(features_SW_Grid_1);
var lyr_SW_Grid_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SW_Grid_1, 
                style: style_SW_Grid_1,
                popuplayertitle: "SW_Grid",
                interactive: false,
                title: '<img src="styles/legend/SW_Grid_1.png" /> SW_Grid'
            });
var format_SW_Unplaced_grid_2 = new ol.format.GeoJSON();
var features_SW_Unplaced_grid_2 = format_SW_Unplaced_grid_2.readFeatures(json_SW_Unplaced_grid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SW_Unplaced_grid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SW_Unplaced_grid_2.addFeatures(features_SW_Unplaced_grid_2);
var lyr_SW_Unplaced_grid_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SW_Unplaced_grid_2, 
                style: style_SW_Unplaced_grid_2,
                popuplayertitle: "SW_Unplaced_grid",
                interactive: false,
                title: '<img src="styles/legend/SW_Unplaced_grid_2.png" /> SW_Unplaced_grid'
            });
var format_Triangulation_lines_3 = new ol.format.GeoJSON();
var features_Triangulation_lines_3 = format_Triangulation_lines_3.readFeatures(json_Triangulation_lines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Triangulation_lines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Triangulation_lines_3.addFeatures(features_Triangulation_lines_3);
var lyr_Triangulation_lines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Triangulation_lines_3, 
                style: style_Triangulation_lines_3,
                popuplayertitle: "Triangulation_lines",
                interactive: false,
                title: '<img src="styles/legend/Triangulation_lines_3.png" /> Triangulation_lines'
            });
var format_Pointsalatoires_4 = new ol.format.GeoJSON();
var features_Pointsalatoires_4 = format_Pointsalatoires_4.readFeatures(json_Pointsalatoires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsalatoires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsalatoires_4.addFeatures(features_Pointsalatoires_4);
var lyr_Pointsalatoires_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsalatoires_4, 
                style: style_Pointsalatoires_4,
                popuplayertitle: "Points aléatoires",
                interactive: false,
                title: '<img src="styles/legend/Pointsalatoires_4.png" /> Points aléatoires'
            });
var format_Routescopie_5 = new ol.format.GeoJSON();
var features_Routescopie_5 = format_Routescopie_5.readFeatures(json_Routescopie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routescopie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routescopie_5.addFeatures(features_Routescopie_5);
var lyr_Routescopie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routescopie_5, 
                style: style_Routescopie_5,
                popuplayertitle: "Routes copie",
                interactive: false,
    title: 'Routes copie<br />\
    <img src="styles/legend/Routescopie_5_0.png" /> 1<br />\
    <img src="styles/legend/Routescopie_5_1.png" /> 2<br />\
    <img src="styles/legend/Routescopie_5_2.png" /> 3<br />\
    <img src="styles/legend/Routescopie_5_3.png" /> 4<br />\
    <img src="styles/legend/Routescopie_5_4.png" /> <br />'
        });
var format_SYSTEMScopie_6 = new ol.format.GeoJSON();
var features_SYSTEMScopie_6 = format_SYSTEMScopie_6.readFeatures(json_SYSTEMScopie_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SYSTEMScopie_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SYSTEMScopie_6.addFeatures(features_SYSTEMScopie_6);
var lyr_SYSTEMScopie_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SYSTEMScopie_6, 
                style: style_SYSTEMScopie_6,
                popuplayertitle: "SYSTEMS copie",
                interactive: true,
                title: 'SYSTEMS copie'
            });
var group_Habillage = new ol.layer.Group({
                                layers: [lyr_Region4_illustrator_0,lyr_SW_Grid_1,lyr_SW_Unplaced_grid_2,lyr_Triangulation_lines_3,lyr_Pointsalatoires_4,],
                                fold: "open",
                                title: "Habillage"});

lyr_Region4_illustrator_0.setVisible(true);lyr_SW_Grid_1.setVisible(true);lyr_SW_Unplaced_grid_2.setVisible(true);lyr_Triangulation_lines_3.setVisible(true);lyr_Pointsalatoires_4.setVisible(true);lyr_Routescopie_5.setVisible(true);lyr_SYSTEMScopie_6.setVisible(true);
var layersList = [group_Habillage,lyr_Routescopie_5,lyr_SYSTEMScopie_6];
lyr_Region4_illustrator_0.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE': 'TYPE', 'COMM': 'COMM', });
lyr_SW_Grid_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NAME': 'NAME', });
lyr_SW_Unplaced_grid_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NAME': 'NAME', });
lyr_Triangulation_lines_3.set('fieldAliases', {'fid': 'fid', 'POINTA': 'POINTA', 'POINTB': 'POINTB', 'POINTC': 'POINTC', });
lyr_Pointsalatoires_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Routescopie_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NAME': 'NAME', 'importance': 'importance', 'comm': 'comm', });
lyr_SYSTEMScopie_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NAME': 'NAME', 'region_1': 'region_1', 'POIMILyn': 'POIMILyn', 'POIMILdesc': 'POIMILdesc', 'POIECOyn': 'POIECOyn', 'POIECOdesc': 'POIECOdesc', 'confl_side': 'confl_side', 'complete': 'complete', 'commentair': 'commentair', 'POIFORyn': 'POIFORyn', 'POIFORdesc': 'POIFORdesc', 'region_2': 'region_2', 'loc_prec': 'loc_prec', 'url_wookie': 'url_wookie', 'date_mod': 'date_mod', 'picture': 'picture', 'illegal': 'Illegal activities', 'scale': 'scale', 'Source_1': 'Source_1', 'Source_2': 'Source_2', 'ALT_NAME': 'ALT_NAME', 'Type1': 'Type1', 'Type2': 'Type2', });
lyr_Region4_illustrator_0.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'COMM': 'TextEdit', });
lyr_SW_Grid_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NAME': 'TextEdit', });
lyr_SW_Unplaced_grid_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Triangulation_lines_3.set('fieldImages', {'fid': 'TextEdit', 'POINTA': 'TextEdit', 'POINTB': 'TextEdit', 'POINTC': 'TextEdit', });
lyr_Pointsalatoires_4.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_Routescopie_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'NAME': 'TextEdit', 'importance': 'ValueMap', 'comm': 'TextEdit', });
lyr_SYSTEMScopie_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'NAME': 'TextEdit', 'region_1': 'ValueMap', 'POIMILyn': 'CheckBox', 'POIMILdesc': 'TextEdit', 'POIECOyn': 'CheckBox', 'POIECOdesc': 'TextEdit', 'confl_side': 'ValueMap', 'complete': 'CheckBox', 'commentair': 'TextEdit', 'POIFORyn': 'CheckBox', 'POIFORdesc': 'TextEdit', 'region_2': 'TextEdit', 'loc_prec': 'ValueMap', 'url_wookie': 'TextEdit', 'date_mod': 'DateTime', 'picture': 'ExternalResource', 'illegal': 'TextEdit', 'scale': 'ValueMap', 'Source_1': 'ValueMap', 'Source_2': 'TextEdit', 'ALT_NAME': 'TextEdit', 'Type1': 'ValueMap', 'Type2': 'ValueMap', });
lyr_Region4_illustrator_0.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE': 'no label', 'COMM': 'no label', });
lyr_SW_Grid_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'NAME': 'no label', });
lyr_SW_Unplaced_grid_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NAME': 'no label', });
lyr_Triangulation_lines_3.set('fieldLabels', {'fid': 'no label', 'POINTA': 'no label', 'POINTB': 'no label', 'POINTC': 'no label', });
lyr_Pointsalatoires_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Routescopie_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NAME': 'no label', 'importance': 'no label', 'comm': 'no label', });
lyr_SYSTEMScopie_6.set('fieldLabels', {'fid': 'hidden field', 'NAME': 'inline label - always visible', 'region_1': 'inline label - always visible', 'POIMILyn': 'hidden field', 'POIMILdesc': 'hidden field', 'POIECOyn': 'hidden field', 'POIECOdesc': 'hidden field', 'confl_side': 'hidden field', 'complete': 'hidden field', 'commentair': 'hidden field', 'POIFORyn': 'hidden field', 'POIFORdesc': 'hidden field', 'region_2': 'hidden field', 'loc_prec': 'hidden field', 'url_wookie': 'inline label - always visible', 'date_mod': 'inline label - always visible', 'picture': 'no label', 'illegal': 'hidden field', 'scale': 'hidden field', 'Source_1': 'hidden field', 'Source_2': 'hidden field', 'ALT_NAME': 'hidden field', 'Type1': 'hidden field', 'Type2': 'hidden field', });
lyr_SYSTEMScopie_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});