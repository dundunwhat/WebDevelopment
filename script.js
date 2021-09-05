const prvi = document.querySelectorAll(".prv");
const nxti = document.querySelectorAll(".nxt");
const fini = document.querySelectorAll(".fin");

const progress = document.getElementById("progress");
const progresssteps = document.querySelectorAll(".progress-step");

const formsteps = document.querySelectorAll(".form-step");

let formstepsnun = 0;

nxti.forEach((button) => {

    button.addEventListener ("click", () => {

        formstepsnun++;
        updateformsteps();
        updateprogressbar();
    });
});

prvi.forEach((button) => {

    button.addEventListener ("click", () => {

        formstepsnun--;
        updateformsteps();
        updateprogressbar();
    });
});

function updateformsteps () {

    formsteps.forEach(formstep => {
        
    formstep.classList.contains("form-step-active")
      formstep.classList.remove ("form-step-active");
});
    formsteps[formstepsnun].classList.add("form-step-active")
}

function updateprogressbar(){
    

    progresssteps.forEach((progressstep, idx) => {

        if(idx < formstepsnun + 1) {
            progressstep.classList.add("progress-step-active");
        } else {
            progressstep.classList.remove("progress-step-active");
        }
    });


const progressactive = document.querySelectorAll(".progress-step-active");

    progress.style.width = 
     ((progressactive.length - 1 ) / (progresssteps.length -1 )) * 100 + "%";
}
