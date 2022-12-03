var a = 0;
function mouseOver() {
    var comt = document.forms['suForm']['comt'].value;
    var email = document.forms['suForm']['email'].value;
    var pass = document.forms['suForm']['pass'].value;

    var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ((comt == "" || !email.match(emailCheck) || pass.length < 8 || tick.checked == false) && a == 0) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    if ((comt == "" || !email.match(emailCheck) || pass.length < 8 || tick.checked == false) && a == 1) {
        buttonMoveRight();
        a = 2;
        return false;
    }

    if ((comt == "" || !email.match(emailCheck) || pass.length < 8 || tick.checked == false) && a == 2) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    else {

        // document.getElementById('submit-btn').click();  
        document.getElementById('submit-btn').style.cursor = 'pointer';
        return false;
    };

};




function buttonMoveLeft() {

    var button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(-160%)';

};


function buttonMoveRight() {

    var button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(160%)';

};


function resetBtn() {
    var button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};