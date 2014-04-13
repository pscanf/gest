Template.insertItem.events({
	"submit form": function (e) {
		e.preventDefault();
		var modal = $("#itemInsertModal");
		var form = modal.find("form");
		var item = {
			name:				form.find("[name=name]").val(),
			pickCode:			form.find("[name=pickCode]").val(),
			stockQuantity:		form.find("[name=stockQuantity]").val() || 0,
			forOffer:			form.find("[name=forOffer]")[0].checked,
			currentlyOffering:	form.find("[name=currentlyOffering]")[0].checked
		};
		modal.modal("hide");
		form[0].reset();
		Items.insert(item);
	}
});
