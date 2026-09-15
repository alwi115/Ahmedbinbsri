const menu=document.querySelector(".menu-toggle");const nav=document.querySelector("nav");if(menu){menu.addEventListener("click",()=>nav.classList.toggle("open"))}
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const form=document.getElementById("contactForm");const msg=document.getElementById("formMessage");
if(form){form.addEventListener("submit",e=>{e.preventDefault();msg.textContent="تم استلام رسالتك — شكرًا لتواصلك!";form.reset()})}
