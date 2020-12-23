function show(){
    let html = '<div class="settings-color"></div>'
    for(i=0;i<33;i++){
        if(i==32||i==29||i==15){
            html += `<div class="data ${data.member[i].student_number}">학번: `+data.member[i].student_number + ' 이름: '+data.member[i].name+`        <span class="minus" onClick="minus(${i})">-</span>  `+(data.member[i].number-3)+`  <span class="plus" onClick="plus(${i})">+</span></div>`
        }
        else{
            html += `<div class="data ${data.member[i].student_number}">학번: `+data.member[i].student_number + ' 이름: '+data.member[i].name+`        <span class="minus" onClick="minus(${i})">-</span>  `+data.member[i].number+`  <span class="plus" onClick="plus(${i})">+</span></div>`
        }
    }

    document.querySelector('.settings').innerHTML = html
}
show()