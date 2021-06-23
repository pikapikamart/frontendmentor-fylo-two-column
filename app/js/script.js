const query = name => document.querySelector(name);
const queryAll = name => document.querySelectorAll(name);

const testEmail = email=>{
    let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return re.test(email);
}



class Form {
    constructor() {
        this.successBanner = query(".email-success");
        this.emailForms = queryAll(".js-email-form");
        this.formRegion = query(".js-email-region");
        
        this.emailForms.forEach(form =>{
            form.addEventListener("submit", event => this._checkForm(event));
        })
    }

    _checkForm(event){
        event.preventDefault();
        if (!testEmail(event.target.email.value)) {
            event.target.email.classList.add("error");
            this.formRegion.textContent = "invalid email, please check your email";
            setTimeout(()=>{
                this.formRegion.textContent = "";
            }, 200);
        } else{
            event.target.email.classList.remove("error");
            event.target.email.value = "";
            this.successBanner.classList.add("show");
            this.formRegion.textContent = "email successfully submitted";
            setTimeout(()=>{
                this.successBanner.classList.remove("show");
                this.formRegion.textContent = "";
            }, 4000)
        }
    }
}

new Form();