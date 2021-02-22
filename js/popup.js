let link = document.querySelector(".writeus");
let modalClose = document.querySelector(".modal-close");
let scroll = document.querySelector("body");
let popup = document.querySelector(".modal");
let name = popup.querySelector("[name=name]");
let email = popup.querySelector("[name=email]");
let form = popup.querySelector("form");

let isStorageSupport = true;

try {
    let storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();

    popup.classList.add("modal-show");
    scroll.classList.add("noscroll");

    if (storage) {
        name.value = storage;
        email.focus();
    } else {
        name.focus();
    }
});


modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();

    popup.classList.remove("modal-show");
    scroll.classList.remove("noscroll");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", name.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {

        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();

            popup.classList.remove("modal-show");
            scroll.classList.remove("noscroll");

            popup.classList.remove("modal-error");
        }
    }
});