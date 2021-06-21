console.log('welcome');
showNotes();

// If user adds a note, add it to localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();
})

function showNotes() {
    document.getElementById("notes1").innerHTML ="" ;
    console.log('hello');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
     if(notesObj.length==0){
        
            document.getElementById("notes1").innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
        
    }
    Array.from(notesObj).forEach(function(element, index) {
        console.log('func');
        if(notesObj.length != 0){
        document.getElementById("notes1").innerHTML += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delet Note</button>
        </div>
    </div>`;
        }
        
    });
}
    
    // function for deleting note
    function deleteNote(index){
        console.log("deleting note", index );
        let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    }

    let search = document.getElementById('searchTxt');
    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener("click", function(){

        let inputVal = search.value.toLowerCase();
        console.log('Input event fired!', inputVal);
        let noteCard = document.getElementsByClassName('noteCard');
        Array.from(noteCard).forEach(function(element){
            let cardTxt = element.getElementsByTagName("p")[0].innerText;    //paragraph tag
            if(cardTxt.includes(inputVal)){
                element.style.display = "block";
            }       
            else{
                element.style.display= "none";
            }

        })
    })
        
