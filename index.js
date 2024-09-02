class memory_assistant{
    constructor(passage){
        this.passage = passage;
    }

    display_passage(){
        document.getElementById("display").textContent = this.passage;
    }

    slicerandom(){
    
        let words = this.passage.split(" ");
        let random_word = Math.floor(Math.random() * words.length)

        this.chosen_word = words[random_word];
        
        words[random_word] = "____";

        // words.splice(random_word, 1);

        let joining_words = words.join(" ");

        document.getElementById("display").textContent = joining_words;
    }

}

class checking extends memory_assistant{
    constructor(memoryAssistantInstance, missing_piece){
        super(memoryAssistantInstance.passage);
        this.memoryAssistantInstance = memoryAssistantInstance;
        this.missing_piece = missing_piece;
    };

    checking(){
        if (this.memoryAssistantInstance.chosen_word ===  this.missing_piece){
            alert('correct!');
        }else{
            alert('wrong!' + this.memoryAssistantInstance.chosen_word);
        }
    }
}

function process(){
   const get_passageinfo = document.getElementById("passage_info").value;
   const get_memory_assistant = new memory_assistant(get_passageinfo);
   get_memory_assistant.slicerandom();
   window.memoryAssistantInstance = get_memory_assistant
}   

function check_missing(){   
    const missing_word = document.getElementById('missing_word').value;
    const get_extension = new checking(memoryAssistantInstance, missing_word);
    get_extension.checking();
    
}

