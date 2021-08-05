let list;
let newList;
let notes;
let notesChildren;
let p;
let hr;
let parent;
let new_name = document.getElementById("new_name");

// localStorage.clear();

if (localStorage.getItem("list") === null) {
    list = ["Front-End 16:00", "Dentist 10:00", "Walking 20:00"];
    localStorage.setItem("list", JSON.stringify(list));
}

WriteNotes();


function WriteNotes() {
    list = JSON.parse(localStorage.getItem("list"));
    notes = document.getElementById("notes");
    notes.innerHTML = ``;

    for (let i = 0; i < list.length; i++) {
        p = document.createElement("p");
        p.innerHTML = `${i + 1}. ${list[i]} <i class="fas fa-trash-alt" onclick="DeleteNote(this)"></i>`;
        hr = document.createElement("hr");

        notes.appendChild(p);
        notes.appendChild(hr);
    }
}

function ZeroValue() {
    new_name.value = '';
    new_name.innerText = '';
}

function AddNewNote() {
    newList = JSON.parse(localStorage.getItem("list"));
    newList.push(new_name.value);

    localStorage.setItem("list", JSON.stringify(newList));

    WriteNotes();
}

function DeleteNote(element) {
    parent = element.parentElement;
    notesChildren = document.getElementById("notes").querySelectorAll("p");

    for (let i = 0; i < notesChildren.length; i++) {
        if (notesChildren[i] == parent) {
            newList = JSON.parse(localStorage.getItem("list"));
            newList.splice(i, 1);

            localStorage.setItem("list", JSON.stringify(newList));

            break;
        }
    }

    WriteNotes();
}