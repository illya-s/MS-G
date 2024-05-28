$(document).ready(function() {
	var emeil = "illya.melanin@51.ks.ua"
	var tel = "+000000000000"
	var data = {
		"ru": {
			"header": {
				".home_link": "Главная",
				".portfolio_link": "Портфолио",
				".resume_link": "Резюме",
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
			},

			"contact_information": {
				".contact_information_text": "Контактная информация:",
				".block_tel": `Телефон: ${tel}`,
				".block_email": `Электронная почта: ${emeil}`
			},
			"professional_profile": {
				".professional_profile_text": "Профессиональный профиль:",
				".block_ptext": "Молодой и амбициозный программист с более чем 6 годами опыта в разработке программного обеспечения. Начал свой путь в мире программирования в возрасте 14 лет и с тех пор успешно завершил 4 значительных проекта (<a href='/portfolio.html'>портфолио</a>). Специализируюсь в веб- и backend-разработке, однако также имею интерес и опыт в desktop и Android разработке как хобби."
			},
			"skills": {
				".skills_text": "Навыки:",
				".programming_languages": "Языки программирования: JavaScript, Python, kotlin",
				".web_development": "Веб-разработка: HTML, CSS, jQuery",
				".backend": "Backend: Django",
				".database": "Базы данных: MySQL",
				".android": "Android: Kotlin, Android Studio"
			},
			"professional_experience": {
				".professional_experience_text": "Профессиональный опыт:",
				".professional_experience_item": "Отсутствует"
			},
			"education": {
				".education_text": "Образование:",
				".school": "Школа: №51 Херсон"
			},
			"additional_information": {
				".additional_information_text": "Дополнительная информация:",
				".hobbies": "Увлечения: чтение, изучение новых технологий, музыка, электроника",
				".hobbies2": "Готовность к обучению и стремление к постоянному развитию",
				".hobbies3": "Готов к работе в команде и самостоятельной работе"
			},
			"recommendations": {
				".recommendations_text": "Рекомендации:",
				".recommendations_item": "Отсутствует"
			}
		},
		"ua": {
			"header": {
				".home_link": "Головна",
				".portfolio_link": "Портфоліо",
				".resume_link": "Резюме",
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
			},

			"contact_information": {
				".contact_information_text": "Контактна інформація:",
				".block_tel": `Телефон: ${tel}`,
				".block_email": `Електронна пошта: ${emeil}`
			},
			"professional_profile": {
				".professional_profile_text": "Професійний профіль:",
				".block_ptext": "Молодий та амбітний програміст з більш ніж 6 роками досвіду у розробці програмного забезпечення. Почав свій шлях у світі програмування у віці 14 років і з того часу успішно завершив 4 значні проекти (<a href='/portfolio.html'>портфоліо</a>). Спеціалізуюсь у веб- та backend-розробці, однак також маю інтерес та досвід у desktop та Android розробці як хобі."
			},
			"skills": {
				".skills_text": "Навички:",
				".programming_languages": "Мови програмування: JavaScript, Python, kotlin",
				".web_development": "Веб-разработка: HTML, CSS, jQuery",
				".backend": "Backend: Django",
				".database": "Бази даних: MySQL",
				".android": "Android: Kotlin, Android Studio"
			},
			"professional_experience": {
				".professional_experience_text": "Професійний досвід:",
				".professional_experience_item": "Відсутній"
			},
			"education": {
				".education_text": "Освіта:",
				".school": "Школа: №51 Херсон"
			},
			"additional_information": {
				".additional_information_text": "Додаткова інформація:",
				".hobbies": "Захоплення: музика, читання, вивчення нових технологій, електроніка",
				".hobbies2": "Готовність до навчання та прагнення до постійного розвитку",
				".hobbies3": "Готовий до роботи в команді та самостійної роботи"
			},
			"recommendations": {
				".recommendations_text": "Рекомендації:",
				".recommendations_item": "Відсутній"
			}
		},
		"en": {
			"header": {
				".home_link": "Home",
				".portfolio_link": "Portfolio",
				".resume_link": "Resume",
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
			},

			"contact_information": {
				".contact_information_text": "Contact Information:",
				".block_tel": `Phone number: ${tel}`,
				".block_email": `Email: ${emeil}`
			},
			"professional_profile": {
				".professional_profile_text": "Professional profile:",
				".block_ptext": "Young and ambitious programmer with more than 6 years of experience in software development. He began his journey in the world of programming at the age of 14 and has since successfully completed 4 significant projects (<a href='/portfolio.html'>portfolio</a>). I specialize in web and backend development, but I also have interest and experience in desktop and Android development as a hobby."
			},
			"skills": {
				".skills_text": "Skills:",
				".programming_languages": "Programming languages: JavaScript, Python, kotlin",
				".web_development": "Web development: HTML, CSS, jQuery",
				".backend": "Backend: Django",
				".database": "Databases: MySQL",
				".android": "Android: Kotlin, Android Studio"
			},
			"professional_experience": {
				".professional_experience_text": "Professional experience:",
				".professional_experience_item": "Absent"
			},
			"education": {
				".education_text": "Education:",
				".school": "School: №51 Kherson"
			},
			"additional_information": {
				".additional_information_text": "Additional Information:",
				".hobbies": "Hobbies: music, reading, adoption of new technologies, electronics",
				".hobbies2": "Readiness to begin and practice to steady development",
				".hobbies3": "Ready to work in a team or work independently"
			},
			"recommendations": {
				".recommendations_text": "Recommendations:",
				".recommendations_item": "Absent"
			}
		},
	};

	if (!localStorage.getItem("lang")) {
		var userLang = navigator.language || navigator.userLanguage;
		if (userLang == "ru-RU" || userLang == "ru") { localStorage.setItem("lang", "ru") }
		if (userLang == "ua-UA" || userLang == "ua") { localStorage.setItem("lang", "ua") }
		else { localStorage.setItem("lang", "en") }
	}
	change_lang(localStorage.getItem("lang"))
	$(".change_lang p").text(localStorage.getItem("lang"))


	function change_lang(lang) {
		$.each(data[lang], function (index, element) {
			$.each(element, function (i, value) {
				$(i).html(value)
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