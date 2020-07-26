let tab_navigation = [...document.querySelectorAll(".tab__navigation")];
let tab_content = [...document.querySelectorAll(".tab__content")];


function closeTabIndex(){
    let openTabIndex = tab_navigation.findIndex( function(tab) {
        return tab.classList.contains("tab_active");
    })

    if (openTabIndex >= 0){
        tap_navigation[openTabIndex].classList.remove("tab_active");
        tab_content[openTabIndex].classList.remove("tab__content_active");
    };
}

function openTab(e){
    // closeTabIndex();

    // tabN.classList.add("tab_active");
    console.log(tab_navigation);
    // let tab_content = [...e.target.closest(`.tabs`).querySelectorAll(`.tab__content`)];
    // console.log(tab_content);
    console.log(tab_content);
    // let openTabIndex = tab_navigation.findIndex( function(tab) {
    //     return tab.classList.contains("tab_active");
    // })

    // tab_content[openTabIndex].classList.add("tab__content_active");
    

}






tab_navigation.forEach( function (tabN) {
    tabN.addEventListener(`click`, openTab);
})