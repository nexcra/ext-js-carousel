Ext.require([
    '*'
]);

Ext.onReady(function() {

    Ext.createWidget('carousel',{
		id: 'carousel-id',
		xPos: 280,
		yPos: 80,
		FPS: 30,
		reflHeight: 56,
		reflGap:2,
		buttonLeft: 'left-but',
		buttonRight: 'right-but',
		altBox: 'alt-text',
		titleBox: 'title-text',	
		autoRotate: 'no',	
		renderTo: 'carousel-div'
    });

});
