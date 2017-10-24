/*
	To do list:
	1. Sublists doesn't yet have plus and minor icons to state their expansion status.
	2. Some default SASS colouring would be great for consistency.
*/

const Navigation = {

	init: function() {

		const vars = {

			navigation: document.getElementById("navigation"),
			hamburgerBtn: document.getElementsByClassName("hamburger-btn")[0],
			hamburgerCollapseBtn: document.getElementsByClassName("hamburger-collapse-btn")[0],
			sublists: document.getElementsByClassName("nav-sublist"),
			sublistsLength: document.getElementsByClassName("nav-sublist").length

		};

		Navigation.Hamburger.CreateListeners(vars);
		Navigation.Hamburger.ToggleListElements(vars);

		vars.navigation.addEventListener("mouseleave", function() {

			Navigation.Hamburger.CollapseAllSublists(vars);

		});

	},

	Hamburger: {

		CreateListeners: function(vars) {

			vars.hamburgerBtn.addEventListener("click", function() {

				Navigation.Hamburger.Expand(vars);

			});

			vars.hamburgerCollapseBtn.addEventListener("click", function() {

				Navigation.Hamburger.Collapse(vars);

			});

		},

		Expand: function(vars) {

			vars.navigation.classList.add("active");
			vars.hamburgerBtn.classList.add("disabled");
			vars.hamburgerCollapseBtn.classList.add("active");

		},

		Collapse: function(vars) {

			vars.navigation.classList.remove("active");
			vars.hamburgerBtn.classList.remove("disabled");
			vars.hamburgerCollapseBtn.classList.remove("active");

			Navigation.Hamburger.CollapseAllSublists(vars);

		},

		ToggleListElements: function(vars) {

			for (let i = 0; i < vars.sublistsLength; i++) {

				let switcher = vars.sublists[i].parentNode.getElementsByClassName("switcher")[0];

				switcher.addEventListener("click", function() {

					let clickedSubList = vars.sublists[i];

					clickedSubList.classList.toggle("expanded");

					let state = switcher.getElementsByClassName("state")[0];

					if (state && state.innerHTML == "+") {

						state.innerHTML = "-";

					} else if (state && state.innerHTML == "-") {

						state.innerHTML = "+";

					}

					Navigation.Hamburger.CollapseUnfocusedSublists(clickedSubList);

				})

			}

		},

		CollapseAllSublists: function(vars) {

			for (let i = 0; i < vars.sublistsLength; i++) {

				vars.sublists[i].classList.remove("expanded");

				let switcher = vars.sublists[i].parentNode.getElementsByClassName("switcher")[0];
				let state = switcher.getElementsByClassName("state")[0];

				if (state) { state.innerHTML = "+" }

			}

		},

		CollapseUnfocusedSublists: function(clickedSubList) {

			let parentEl = clickedSubList.parentNode;

			while (!parentEl.classList.contains("primary-nav-element")) {

				parentEl = parentEl.parentNode;

			}

			const parentID = parentEl.getAttribute("id");
			const primaryLists = document.getElementsByClassName("primary-nav-element");

			for (let i = 0; i < primaryLists.length; i++) {

				if (primaryLists[i].getAttribute("id") != parentID) {

					primaryLists[i].getElementsByClassName("state")[0].innerHTML = "+";

					let sublists = primaryLists[i].getElementsByClassName("nav-sublist");

					for (let e = 0; e < sublists.length; e++) {

						sublists[e].classList.remove("expanded");

					}

				}

			}

		}

	}

};

Navigation.init();