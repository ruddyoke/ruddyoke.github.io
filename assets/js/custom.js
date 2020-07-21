$(function () {

	// if (window.matchMedia("(max-width: 600px)").matches) {
	// 	/* La largeur minimum de l'affichage est 600 px inclus */
	// }
	// $(document).on("click", ".slicknav_nav a" , function() {
	//
	// });
	var menu = new RokeMenu();
	menu.setClosetClose().bindResize();
})

class RokeMenu {
	constructor() {
		this.menu_resp = $('.mobile_menu');
		this.menu_resp_btn = $('.slicknav_btn');
		this.menu_resp_items = $('.slicknav_nav');
		this.resizeTimer = 0;
	}

	bindResize() {
		$(window).resize(() => {
			clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(() => {
				$(this.setClosetClose())
			}, 250);
		})
		return this;
	}

	setClosetClose() {
		if (window.matchMedia("(max-width: 991px)").matches) {
			$(document).on("click", (e) => {
				if($(e.target).closest(this.menu_resp).length === 0) {
					this.menu_resp_btn.trigger('click');
				}
			});
		}
		return this;
	}
}
