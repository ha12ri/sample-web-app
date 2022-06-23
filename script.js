b = true;
function func() {
    let ele = document.querySelector('.side-nav-bar');
    let ele2 = document.querySelector('.topics');
    let ele3 = document.querySelector('.journey');
    let ele4 = document.querySelector('.board');
    let ele5 = document.querySelector('.h5-txt');
    if (b) {

        ele.style = "width:8vw;transition:all 2s ease;";
        ele2.style = "display:none;";
        ele3.style = "display:none;";
        ele4.style = "border-radius: 0% 10% 0% 0% / 0% 20% 0% 0%;";
        ele5.style="display:block;";
        b = false;

    }
    else {

        ele.style = "width:20vw;transition:all 2s ease;";
        ele2.style = "display:block;overflow:hidden;";
        ele3.style = "display:block;overflow:hidden;";
        ele4.style = "border-radius: 0% 5% 0% 0% / 0% 20% 0% 0%;";
        ele5.style="display:none;";
        b = true;

    }

}