const btn=document.getElementById("btn");
btn.style.backgroundColor="gray";
btn.style.color="white";

const tb=document.getElementById("tb");
tb.style.backgroundColor="rgb(90, 90, 90)";
tb.style.color="lightgray";
tb.style.textAlign="center"

function add() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sec = document.getElementById("sec").value;
    const course = document.getElementById("course").value;
    const sem = document.getElementById("sem").value;

    if (!fname || !lname || !sec || !course || !sem) {
        alert("please input data!!!");
        return;
    }


    const tb = document.getElementById("tb");
    const tr = document.createElement("tr");

    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    const update = document.createElement("button");
    const del = document.createElement("button");
    update.innerHTML = "Edit";
    del.innerHTML = "Delete";
    update.style.backgroundColor="rgb(90, 90, 90)";
    del.style.backgroundColor="rgb(90, 90, 90)";

    update.style.color="lightgray";
    del.style.color="lightgray";

    del.addEventListener("click", function () {
        tb.removeChild(tr);
    })

    update.addEventListener("click", function () {
        const finp = document.createElement("input");
        finp.type = "text";
        finp.placeholder = "Enter edited FirstName";
        tr.appendChild(finp);

        const linp = document.createElement("input");
        linp.type = "text";
        linp.placeholder = "Enter edited LastName";
        tr.appendChild(linp);

        const secinp = document.createElement("input");
        secinp.type = "text";
        secinp.placeholder = "Enter edited Section";
        tr.appendChild(secinp);

        const courseinp = document.createElement("input");
        courseinp.type = "text";
        courseinp.placeholder = "Enter edited Course";
        tr.appendChild(courseinp);

        const seminp = document.createElement("input");
        seminp.type = "text";
        seminp.placeholder = "Enter edited Semester";
        tr.appendChild(seminp);

        const saveBtn = document.createElement("button");
        saveBtn.innerHTML = "SaveEdit";
        tr.appendChild(saveBtn);

        saveBtn.addEventListener("click", function () {
            const newFname = finp.value;
            if (newFname == "") {
                td.innerHTML = fname
            }
            else {
                td.innerHTML = newFname;
            }
            const newLname = linp.value;
            if (newLname == "") {
                td1.innerHTML = lname;
            }
            else {
                td1.innerHTML = newLname;
            }
            const newSec = secinp.value;
            if (newSec == "") {
                td2.innerHTML = sec;
            }
            else {
                td2.innerHTML = newSec;
            }
            const newCourse = courseinp.value;
            if (newCourse == "") {
                td3.innerHTML = course;
            }
            else {
                td3.innerHTML = newCourse;
            }
            const newSem = seminp.value;
            if (newSem == "") {
                td4.innerHTML = sem;
            }
            else {
                td4.innerHTML = newSem;
            }

            td5.appendChild(update);
            td5.appendChild(del);

        })
    })


    td.innerHTML = fname;
    td1.innerHTML = lname;
    td2.innerHTML = sec;
    td3.innerHTML = course;
    td4.innerHTML = sem;


    tb.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td5.appendChild(update);
    td5.appendChild(del);


    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("sec").value = "";
    document.getElementById("course").value = "";
    document.getElementById("sem").value = "";

    document.body.style.backgroundColor = "hsla(120, 60%, 70%, 0.3)";

}