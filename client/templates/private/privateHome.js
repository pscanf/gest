Template.privateHome.rendered = function () {
	var cp = $("#cp");
	cp.colorpicker().on("changeColor", function (e) {
		$(".input-group-addon i").css("color", e.color.toHex());
	}).colorpicker("setValue", "#ff0000");
};
