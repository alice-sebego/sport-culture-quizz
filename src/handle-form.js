export default class HandleForm{
    
    constructor(form, fieldsets, resultDisplay, goodAnswers, userAnswers, score, resultDiv, gifGoodAnswers){
        this._form = form,
        this._fieldsets = fieldsets,
        this._resultDisplay = resultDisplay,
        this.goodAnswers = goodAnswers,
        this.userAnswers = userAnswers,
        this.score = score,
        this._resultDiv = resultDiv,
        this._gifGoodAnswers = gifGoodAnswers
    }

    checkResult(){

        for(let i = 0; i < this._fieldsets.length; i ++){
            this.userAnswers[i] === this.goodAnswers[i] ? this.score.push(true) : this.score.push(false);     
        }
        this.displayResult(this.score);
        this.handleDisplayAnswer(this.score);
        this.score = [];
   
    }

    displayMissingAnswer(){

        const missingAnswer = document.createElement("div");
        missingAnswer.style.fontSize = "smaller";
        missingAnswer.innerHTML = "<p>Pour vérifier toutes vos réponses, vous devez répondre à toutes les questions<br/>Vérifiez SVP<p>";
        this._resultDiv.appendChild(missingAnswer);
        this.userAnswers = [];
        
    }

    displayResult(){

        this.result = this.score.filter(userScore => userScore !== true ).length;
        this._resultDiv.style.padding = "1.5vh";

        switch (this.result) {
            case 0:
                this._resultDiv.innerHTML = "<p>5/5</p><img src=\""+ this._gifGoodAnswers[0] +"\"/><p class=\"comment\">Parfait</p>"; 
                break;
            case 1:
                this._resultDiv.innerHTML = "<p>4/5</p><img src=\""+ this._gifGoodAnswers[1] +"\"><p class=\"comment\">Retente ta chance en corrigeant tes réponses :)</p>";
                break;
            case 2:
                this._resultDiv.innerHTML = "<p>3/5</p><img src=\""+ this._gifGoodAnswers[2] +"\"><p class=\"comment\">Retente ta chance en corrigeant tes réponses :)</p>";
                break;
            case 3:
                this._resultDiv.innerHTML = "<p>2/5</p><img src=\""+ this._gifGoodAnswers[3] +"\"><p class=\"comment\">Retente ta chance en corrigeant tes réponses :)</p>";
                break;
            case 4:
                this._resultDiv.innerHTML = "<p>1/5</p><img src=\""+ this._gifGoodAnswers[4] +"\"><p class=\"comment\">Retente ta chance en corrigeant tes réponses :)</p>";
                break;
            case 5:
                this._resultDiv.innerHTML = "<p>0/5</p><img src=\""+ this._gifGoodAnswers[5] +"\"><p class=\"comment\">Retente ta chance en corrigeant tes réponses :)</p>";
                break;
            default:
                console.log("Ooops");
        }

    }

    handleDisplayAnswer(){

        for(let i = 0; i < this.score.length; i++){
            if(this.score[i] === true){
                this._fieldsets[i].style.backgroundColor = "#a3e9f2";
            } else {
                this._fieldsets[i].style.backgroundColor = "#f4acac";
                this._fieldsets[i].classList.add("echec");
                setTimeout(() => {
                    this._fieldsets[i].classList.remove("echec");
                }, 500)
            }
        }
        
    }

    submitEvent(){

        this._form.addEventListener("submit", e => {
    
            e.preventDefault();
        
            for(let i = 1; i < this._fieldsets.length + 1; i++){
                if(!document.querySelector(`input[name="q${i}"]:checked`)){
                    this.displayMissingAnswer();
                    return;
                } else {
                    this.userAnswers.push(document.querySelector(`input[name="q${i}"]:checked`).value);
                }   
            }

                this.checkResult();
                this.userAnswers = [];
                window.scrollTo(0, 2000);
        });
    }

    clickAnswer(color){
        this._fieldsets.forEach(fieldset => {
            fieldset.addEventListener("click", () => {
                fieldset.style.backgroundColor = color;
            })
        });
    }
    
}