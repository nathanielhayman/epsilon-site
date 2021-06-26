// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery_ujs
//= require_tree .

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "../stylesheets/application"
import "channels"

global.toastr = require("toastr")

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).on("turbolinks:load", () => {
    $("#notifications").on("click", () => {
        if ($("#notifications-dropdown").is(":hidden")) {
            $(".overlay").hide();
            $("#notifications-dropdown").show();
            $("#notification-img").attr("src", "/assets/bell");
        } else {
            $("#notifications-dropdown").hide();
        }
    });

    $("#user-info").on("click", () => {
        if ($("#account-dropdown").is(":hidden")) {
            $(".overlay").hide();
            $("#account-dropdown").show();
        } else {
            $("#account-dropdown").hide();
        }
    });

    $("#page-content").on("click", () => {
        $(".overlay").hide();
    });

    const scrollElements = document.querySelectorAll(".js-scroll");

    function elementInView(el, dividend = 1) {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    function elementOutofView(el) {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    function displayScrollElement(element) {
        element.classList.add("scrolled");
    };

    function hideScrollElement(element) {
        element.classList.remove("scrolled");
    };

    function handleScrollAnimation() {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el)
            }
        });
    };

    function handleHeaderOpacity() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 0) {
            $("#navbar").addClass("show");
            $("#nav-logo").show();
        } else {
            $("#navbar").removeClass("show");
            $("#nav-logo").hide();
        }
    }

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
        handleHeaderOpacity();
    });

    handleScrollAnimation();
});