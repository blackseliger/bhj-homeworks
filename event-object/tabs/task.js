// let tab_navigation = [...document.querySelectorAll(".tab__navigation")];
let tabs = [...document.querySelectorAll(".tab")];
let tab_content = [...document.querySelectorAll(".tab__content")];


let closeTabIndex = () =>{
    let openTabIndex = tabs.findIndex( function (tab) {
        return tab.classList.contains(`tab_active`);
    });

    if (openTabIndex >= 0){
        tabs[openTabIndex].classList.remove(`tab_active`);
        tab_content[openTabIndex].classList.remove(`tab__content_active`);
    }
}

function openTab(e){
    
    closeTabIndex();
    this.classList.add(`tab_active`);

    let openTabIndex = tabs.findIndex( function (tab) {
        return tab.classList.contains(`tab_active`);
    });

    tab_content[openTabIndex].classList.add(`tab__content_active`);

}


tabs.forEach( (tab) => {
    tab.addEventListener(`click`, openTab);
})

