/**
 * @author Aymen ABDALLAH <aymen.abdallah@gmail.com>
 * @docauthor Aymen ABDALLAH
 */
Ext.define('Ext.store.Carousel', {
    extend: 'Ext.data.Store',

    model: 'Carousel',

    data: [{
			imageSrc:"images/avus_gtr.jpg",
			title:"avus",
			alt: "avus"
		},{
			imageSrc:"images/CroixDeFer.jpg",
			title:"CroixDeFer",
			alt: "CroixDeFer"
		},{
			imageSrc:"images/flower.jpg",
			title:"flower",
			alt: "flower"
		},{
			imageSrc:"images/grass.jpg",
			title:"grass",
			alt: "grass"
		},{
			imageSrc:"images/stones.jpg",
			title:"stones",
			alt: "stones"
		}
	]
});