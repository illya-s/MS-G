$(document).ready(function() {
	var data = {
		"ru": {
			"header": {
				".home_link": "Главная",
				".portfolio_link": "Портфолио",
				".info_logo": "Меланин Илья",
				".info_text": "WEB-РАЗРАБОТЧИК / HTML-ВЕРСТАЛЬЩИК / JAVASCRIPT / Python Django"
			},
			".diagrams": {
				".prof_skills_tit": "Профессиональные навыки"
			},
			".contacts": {
				".contacts_tit": "Контакты"
			},
			"footer": {
				".copyright": "© Меланин Илья 2024. Профессиональное создание сайтов"
			}
		},
		"ua": {
			"header": {
				".home_link": "Головна",
				".portfolio_link": "Портфоліо",
				".info_logo": "Меланін Ілля",
				".info_text": "WEB-РОЗРОБНИК / HTML-ВЕРСТАЛЬНИК / JAVASCRIPT / Python Django"
			},
			".diagrams": {
				".prof_skills_tit": "Професійні навички"
			},
			".contacts": {
				".contacts_tit": "Контакти"
			},
			"footer": {
				".copyright": "© Меланін Ілля 2024. Професійне створення сайтів"
			}
		},
		"en": {
			"header": {
				".home_link": "Home",
				".portfolio_link": "Portfolio",
				".info_logo": "Melanin Ilya",
				".info_text": "WEB DEVELOPER / HTML DESIGNER / JAVASCRIPT / Python Django"
			},
			".diagrams": {
				".prof_skills_tit": "Professional skills"
			},
			".contacts": {
				".contacts_tit": "Contacts"
			},
			"footer": {
				".copyright": "© Melanin Ilya 2024. Professional website creation"
			}
		},
	};
	if (!localStorage.getItem("lang")) {
		localStorage.setItem("lang", "ua");
	}
	change_lang(localStorage.getItem("lang"))
	$(".change_lang p").text(localStorage.getItem("lang"))


	function change_lang(lang) {
		$.each(data[lang], function (index, element) {
			$.each(element, function (i, value) {
				$(i).text(value)
			});
		});
		return true
	}



	function langs_collect() {
		$.each(data, function (index, element) {
			$(".custom_select").append(`<button class="custom_select_btn" data-val="${index}">${index}</button>`);
		});
	}
	langs_collect()
	$(".custom_select_btn").each(function (index, element) { 
		$(element).click(function (e) { 
			e.preventDefault();
			var l = change_lang($(element).data("val"))
			if (l) {
				localStorage.setItem("lang", $(element).data("val"))
				$(".change_lang p").text(localStorage.getItem("lang"))
			}
		});
	});
});