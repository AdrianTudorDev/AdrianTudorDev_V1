import { SiteResources } from './resources/resources.js';
var date = new Date;

var gridvalues = document.querySelector('.grid-values');

var footer = document.querySelector('footer');
var aside = document.querySelector('aside');

window.onload = init;

async function init(){
    addAside();
    // addFooter();
    if (!window.location.href.indexOf("contact") > -1) {
        addFooter();
    }
    if (window.location.href.indexOf("index") > -1) {
        loadValues();
        loadSuccessStories();
    }
    if (window.location.href.indexOf("services") > -1) {
        loadServices();
    } 
    if (window.location.href.indexOf("about") > -1) {
        loadMEMEAbout();
        loadFAQ();
    } 

}

function loadSiteNavBar(){
    let navbaritems = document.querySelector('#navbaritems');
    SiteResources.siteNavigation.forEach(nav => {
        let line =
            `<li class="list-group-item bg-transparent border-0 container-fluid py-1"> 
                <a href="${nav.path}" class="row text-decoration-none text-secondary ">
                    <i class="col ${nav.icon} fs-3 text-center"></i>
                    <span class="col fs-5">${nav.title}</span>
                </a>                                               
            </li>`               
        navbaritems.innerHTML += line;
   });      
};

function loadSocialLinks(){
    let sociallinks = document.querySelector('#sociallinks');
    SiteResources.socialMedia.forEach(soc => {
        let line =
            `<li class="list-group-item border-0 bg-transparent">
                <a href="${soc.path}" class="text-decoration-none text-white ${soc.icon}" target="_blank" rel="noopener noreferrer"></a>
            </li>`
        sociallinks.innerHTML += line;
   });      
};

function loadValues(){
    SiteResources.values.forEach(val => {
        let line =
            `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-around">
                <div class="card bord-prim-light border-3 border m-2 background-info" style="width: 15rem; min-height: 7rem">                    
                    <div class="card-img-top text-center mt-2">                    
                     <p class="card-text text-prim-dark ${val.icon} fs-1"></p>
                    </div>
                    <div class="card-body mt-2 text-center">
                        <p class="card-text fs-4">${val.title}</p>
                    </div>
                </div>
            </div>`
        gridvalues.innerHTML += line;
   });      
};

function loadSuccessStories(){
    let succesStories = document.querySelector('#success-stories');
    SiteResources.succesStories.forEach((nav, index) => {
        let line
        if (index === SiteResources.succesStories.length - 1) {
            line = 
            `<div class="row mt-4 mb-5">
                <div class="col-11 ms-5 mb-5 pb-5">
                    <h5 class="h5 fw-bold">${nav.title}</h5>
                    <p class="fs-6 mt-2">${nav.paragraph1}</p>
                    <p class="fs-6 mt-2">${nav.paragraph2}</p>
                </div>
            </div> `
        } else {
            line =
            `<div class="row mt-4">
                <div class="col-11 ms-5">
                    <h5 class="h5 fw-bold">${nav.title}</h5>
                    <p class="fs-6 mt-2">${nav.paragraph1}</p>
                    <p class="fs-6 mt-2">${nav.paragraph2}</p>
                </div>
            </div>`
        }
                        
        succesStories.innerHTML += line;
   });      
};      

function loadServices(){
    let services = document.querySelector('.main-services');
    SiteResources.webServices.forEach(nav => {
        let line = 
            `<div class="col-xs-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 border rounded-4 border-3 bord-prim m-3 p-3 background-prim-light text-center" >
                <img src="${nav.imageURL}" class="img-thumbnail border rounded-circle bord-prim-dark" alt="${nav.title}" style="width:35%">
                <h5 class="h5">${nav.title}</h5>
                <p class="fs-6 mt-2">${nav.paragraph}</p>               
            </div>`                              
        services.innerHTML += line;
   });      
};

function addFooter() {
    footer.classList.add('container-fluid');
    footer.classList.add('bg-dark');
    footer.innerHTML = 
        `<article class="row d-flex justify-content-around">
            <div class="col-md-3 col-sm-12 mt-5 ps-3">
                <h4 class="h5 fw-bold mb-2">
                    <a href="#" class="text-decoration-none text-danger">
                        Tell me your stroy!
                    </a>                        
                </h4>                      
                <p class="fs-6 text-light-site">Feel free to contact me at: </p>
                <p class="fs-6 text-danger">adrian.tudor.dev@gmail.com</p>                        
            </div>
            <div class="col-md-3 col-sm-12 mt-5 ps-3">
                <h4 class="h4 text-light-site mb-2">Services</h4>
                <p class="fs-6 text-light-site"> Web development</p>
                <p class="fs-6 text-light-site"> Web design</p>
                <p class="fs-6 text-light-site"> Mobile development</p>
            </div>
            <div class="col-md-3 col-sm-12 mt-5 ps-3">
                <h4 class="h4 text-light-site mb-2">Contact</h4>
                <p class="fs-6 text-light-site"> adrian.tudor.dev@gmail.com</p>
            </div>
        </article>

        <article class="row">
            <div class="col-12 text-center mt-4 pb-3">
                <p class="fs-5 text-white">&copy; Adrian Tudor <span id="an">${date.getFullYear()}</span>. All rights reserved!</p>
            </div>                    
        </article>`;
};

function addAside(){
    aside.classList.add('bg-dark');
    aside.classList.add('d-flex');
    aside.classList.add('align-content-between');  
    aside.classList.add('flex-wrap');
    aside.innerHTML = `
        <!-- toggle button -->
        <button class="btn border border-2 bord-info bg-dark text-center" id="show-hide-side-nav">
            <i class="d-none text-info-site fa-solid fa-bars"></i>
            <i class="text-info-site fa-solid fa-x"></i>
        </button>

        <!-- logo -->
        <div class="container-fluid d-flex justify-content-between flex-row mt-5">
            <div class="col-4 ms-3">
                <img src="./logo/AT.svg" alt="eu" class="img-thumbnail border border-3">               
            </div>
            <div class="col-6">
                <p class="text-white h5">Adrian Tudor</p>
                <p class="text-white fs-6">Web dev</p>
            </div>
        </div>

        <!-- language button -->
        <div class="container-fluid text-center">          
            <button class="btn border border-2 bord-info background-info-dark" id="lang">
                <span class="text-prim fs-6 p-2 fw-bold">Schimba in RO</span>
                <span class="d-none text-info-site fs-6 p-2 w-bold">Switch to EN</span>
            </button>           
        </div>

        <!-- nav bar list -->
        <div class="container-fluid p-2">         
            <ul class="list-group" id="navbaritems" onload=""></ul>
        </div>

        <div class="container-fluid text-center">
            <button class="btn border border-2 bord-info background-info-dark ">
                <a href="#" class="text-decoration-none text-prim">
                    <i class="fa-solid fa-download fs-3 p-1"></i>
                    <span class="fs-5 p-2">Download CV</span>
                </a>
            </button>
        </div>

        <div class="container-fluid">
            <ul class="list-group list-group-horizontal d-flex justify-content-around" id="sociallinks"></ul>
            
        </div>
    `
    loadSiteNavBar();    
    loadSocialLinks();

    const showBtn = document.querySelector('#show-hide-side-nav');
    const main = document.querySelector('main');
    const lang = document.querySelector('#lang');

    showBtn.addEventListener('click', () => {    
        aside.classList.toggle('aside-hidden');
        showBtn.classList.toggle('hidden-side-nav');
        showBtn.firstElementChild.classList.toggle('d-none');      
        showBtn.lastElementChild.classList.toggle('d-none');
        main.classList.toggle('main-w100');   
        btntgg.classList.toggle('btn-container-hidden-side-nav');    
    });

    lang.addEventListener('click', () => {
        if (!lang.firstElementChild.classList.contains('d-none')) {
            lang.firstElementChild.classList.add('d-none');      
            lang.lastElementChild.classList.remove('d-none');
        } else {
            lang.firstElementChild.classList.remove('d-none');      
            lang.lastElementChild.classList.add('d-none');
        };    
    });
};

function loadFAQ(){
    let FAQ = document.querySelector('#questions-FAQ');
    SiteResources.FAQ.forEach(nav => {
        let line =`
        <article class="col-11 shadow rounded border border-2 rounded-2 mb-3 bord-info-dark question-FAQ">
            <!-- question title -->
            <div class="mx-2 question-title-FAQ">
              <p class="fs-5 fw-bold text-info-dark ms-1">${nav.question}</p>
              <button type="button" class="question-btn-FAQ">
                <span class="plus-icon">
                  <i class="far fa-plus-square"></i>
                </span>
                <span class="minus-icon">
                  <i class="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <!-- question text -->
            <div class="question-text-FAQ ms-1">
              <p class="text-prim">
                ${nav.answear}
              </p>
            </div>
          </article>`       
               
        FAQ.innerHTML += line;
   });  
   
   let questions = document.querySelectorAll(".question-FAQ");

    questions.forEach( (question) => {
        const btn = question.querySelector(".question-btn-FAQ");
        console.log(btn)
        btn.addEventListener("click", function () {   
        questions.forEach(function (item) {
            if (item !== question) {
            item.classList.remove("show-text-FAQ");
            }
        });
    
        question.classList.toggle("show-text-FAQ");
        });
    }); 
};

function loadMEMEAbout() {
    let memeAbout = document.querySelector('#memeAbout');
    SiteResources.MEME.forEach(nav => {
        let line =`
        <div class="col-12">
            <h4 class="h4 mb-2">${nav.title}</h4>
            <div class="p-5 ">
                <img src="${nav.path}" class="w-100 border border-4 bord-prim-dark" alt=${nav.title}>
            </div>
        </div>`       
               
          memeAbout.innerHTML += line;
    });
};