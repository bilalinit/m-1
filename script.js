"use strict";
//------------------ refrence section --------------//
let ref_section = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//------------------ skills section ----------------//
let skills_section = document.getElementById("skills");
let skills_btn = document.getElementById("skills_btn");
skills_btn?.addEventListener('click', () => {
    skills_section.classList.toggle('hide');
});
//------------------ skills section ----------------//
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
