import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

CookieConsent.run({
	cookie: {
		domain: window.location.hostname.split('.').slice(-2).join('.'),
	},
	onConsent: ({cookie}) => {
		const consentMode = {
			'functionality_storage': cookie.categories.includes('necessary') ? 'granted' : 'denied',
			'security_storage': cookie.categories.includes('necessary') ? 'granted' : 'denied',
			'ad_storage': cookie.categories.includes('marketing') ? 'granted' : 'denied',
			'analytics_storage': cookie.categories.includes('analytics') ? 'granted' : 'denied',
			'personalization': cookie.categories.includes('preferences') ? 'granted' : 'denied',
		};
		gtag('consent', 'update', consentMode);
	},
	guiOptions: {
		consentModal: {
			layout: "box",
			position: "bottom left",
			equalWeightButtons: false,
			flipButtons: false
		},
		preferencesModal: {
			layout: "box",
			position: "right",
			equalWeightButtons: true,
			flipButtons: false
		}
	},
	categories: {
		necessary: {
			readOnly: true
		},
		analytics: {}
	},
	language: {
		default: "fr",
		translations: {
			fr: {
				consentModal: {
					title: "Cookies",
					description: "Nous utilisons des cookies d’origine et des cookies tiers. Ces cookies sont destinés à vous offrir une navigation optimisée sur ce site web et de nous donner un aperçu de son utilisation, en vue de l’amélioration des services que nous offrons. En poursuivant votre navigation, nous considérons que vous acceptez l’usage des cookies.",
					acceptAllBtn: "Accepter tout",
					acceptNecessaryBtn: "Tout rejeter",
					showPreferencesBtn: "Gérer les préférences",
					footer: null,
					closeIconLabel: "Tout rejeter et fermer"
				},
				preferencesModal: {
					title: "Préférences de cookies",
					acceptAllBtn: "Accepter tout",
					acceptNecessaryBtn: "Tout rejeter",
					savePreferencesBtn: "Sauvegarder les préférences",
					closeIconLabel: "Fermer la modale",
					serviceCounterLabel: "Services",
					sections: [
						{
							title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
							description: "Ces cookies permettent aux services principaux du site de fonctionner de manière optimale.",
							linkedCategory: "necessary"
						},
						{
							title: "Analytics",
							description: "Notre site utilise des cookies et d'autres technologies de suivi pour améliorer votre expérience de navigation, analyser le trafic du site et comprendre d'où viennent nos visiteurs. Ces cookies incluent ceux provenant de Google Analytics, qui nous aident à comprendre comment vous interagissez avec notre site, et Meta Pixel, qui nous permet de mesurer l'efficacité de nos publicités.",
							linkedCategory: "analytics"
						},
					]
				}
			}
		}
	},
	disablePageInteraction: false
});
