Template.itemCard.rendered = function () {
	$(this.find(".panel")).css({
		"border-color": this.data.card.headingBgColor
	});
	$(this.find(".panel-heading")).css({
		"background-color": this.data.card.headingBgColor,
		"color": this.data.card.headingFgColor,
		"border-color": this.data.card.headingBgColor
	});
	$(this.find(".panel-body")).css({
		"color": this.data.card.bodyFgColor,
		"background": this.data.card.bodyBgColor
	});
	$(this.find(".btn")).css({
		"color": this.data.card.buttonFgColor,
		"background": this.data.card.buttonBgColor,
		"border-color": this.data.card.buttonBdColor
	});
};
