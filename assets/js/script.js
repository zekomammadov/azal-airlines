const nightBtn = document.getElementById('night')
const light = document.querySelector('.light')
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const socialBtn = document.querySelectorAll('.socialBtn')
const directions = document.querySelectorAll('.direct')
const usefulLink = document.querySelectorAll('#useful')
const moreBtn = document.querySelectorAll('.moreBtn')
const usefulHead = document.querySelectorAll('.h2')
const labels = document.querySelectorAll('.label')
const tabs = document.querySelectorAll('.tabs button')



function tabsChange() {
    const tabs = document.querySelectorAll('.tab');

    for (let tab of tabs) {
        tab.addEventListener('click', function () {
            for (t of tabs) {
                t.classList.remove('active');
            }
            tab.classList.add('active');
        })
    }
}
tabsChange();

nightBtn.addEventListener('click', function () {
    if(light.src.includes('light') ) {
        nightMode();
    }
    else{defaultMode();}
})

function nightMode() {
    light.src = 'assets/img/moon.svg'
    body.classList.add('bg-black')
    footer.classList.remove('bg-[#01357e]')
    for(let btn of socialBtn) {
        btn.classList.replace('bg-white','bg-[#1f2022]')
        btn.classList.replace('text-[#01357e]','text-white')
    }
    // for(let direct of directions) {
        //     direct.classList.add('text-white')
        // }
        for(let useful of usefulLink) {
            useful.classList.add('bg-[#1f2022]');
            useful.classList.remove('border')
        }
        for(let btnMore of moreBtn) {
            btnMore.classList.replace('text-[#40b7de]','text-white')
        }
    for(let head of usefulHead) {
        head.classList.add('text-white')
    }
    
    

}
function defaultMode() {
    light.src = 'assets/img/light.svg'
    body.classList.remove('bg-black')
    footer.classList.add('bg-[#01357e]')
    for(let btn of socialBtn) {
        btn.classList.replace('bg-[#1f2022]','bg-white')
        btn.classList.replace('text-white','text-[#01357e]')
    }
    // for(let direct of directions) {
        //     direct.classList.remove('text-white')
        // } 
        for(let useful of usefulLink) {
            useful.classList.remove('bg-[#1f2022]');
            useful.classList.add('border')
        }
        for(let btnMore of moreBtn) {
            btnMore.classList.replace('text-white','text-[#40b7de]')
        }
        for(let head of usefulHead) {
            head.classList.remove('text-white')
        }
    }
    
    function inputValueCheck() {
        const inputs = document.querySelectorAll('.from');
        
        for (let input of inputs) {
            const label = input.nextElementSibling;
            const border = input.closest('.labell');
            const dropdown = input.closest('.labell').nextElementSibling;
    
            input.addEventListener('focus', function () {
                label.classList.add('focused');
                border.style.borderColor = '#37A6DB';
                dropdown.classList.add('show');
            });
    
            input.addEventListener('blur', function () {
                setTimeout(() => {
                    dropdown.classList.remove('show');
                    if (input.value === '') {
                        label.classList.remove('focused');
                        border.style.borderColor = '#C52F5C';
                    } else {
                        border.style.borderColor = '#DBE0E4'; // Default boz rəng
                    }
                }, 200); // Bu gecikmə, dropdown seçimlərindəki klik hadisəsinin qeydiyyata alınmasına imkan verir
            });
    
            input.addEventListener('input', function (event) {
                const value = event.target.value;
    
                if (value !== '') {
                    label.classList.add('focused');
                    border.style.borderColor = '#37A6DB';
                } else {
                    label.classList.add('focused');
                    border.style.borderColor = '#37A6DB';
                }
            });
    
            dropdown.querySelectorAll('.option button').forEach(button => {
                button.addEventListener('click', function () {
                    const countryName = this.querySelector('.flex-1').textContent;
                    input.value = countryName;
                    dropdown.classList.remove('show');
                });
            });
        }
    }
    
    function setupChangeButton() {
        const changeBtn = document.getElementById('changeBtn');
        const inputs = document.querySelectorAll('.from');
    
        changeBtn.addEventListener('click', function() {
            if (inputs[0].value !== '' && inputs[1].value !== '') {
                const tempValue = inputs[0].value;
                inputs[0].value = inputs[1].value;
                inputs[1].value = tempValue;
            }
        });
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        inputValueCheck();
        setupChangeButton();
    });
    
    
    
       



