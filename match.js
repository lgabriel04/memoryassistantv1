class mathcy{
    constructor(data){
        this.data = data;
    }

    display_pasted_data(){
        
        let words = document.getElementById('pasted_display').textContent = `What is the word?`;
    }

}


class get_mathcy extends mathcy{
    constructor(memoryData, mathc_check){
        super(memoryData)
        this.mathc_check = mathc_check;
    }

    check_match_conditions(){
        if (this.data === this.mathc_check){
            document.getElementById('pasted_display').textContent = `Yeah tama ka boi!: ${this.data}`;
        } else{
            document.getElementById('pasted_display').textContent =`Mali ka gago! it's ${this.data}`;
        }
    }
}

function check_match(){
    const pasted_data = document.getElementById("pasted_data").value;
    window.memoryData = pasted_data;
    const get_mathcy = new mathcy(pasted_data);
    get_mathcy.display_pasted_data();
}

function checking_match(){
    const match_checking = document.getElementById("match_checking").value;
    const get_the_extended = new get_mathcy( window.memoryData, match_checking);
    get_the_extended.check_match_conditions();
}