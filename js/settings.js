let data = fetch('./data.txt').then(function(data){return JSON.parse(data)})
let html = ''

for(i=0;i<33;i++){
    html += `<div class="data">학번: `+data.member[i].student_number + ' 이름: '+data.member[i].name+'    <img src="icon_1">  '+data.member[i].number+'  <img src="icon_2"></div>'
}

document.querySelector('.settings').innerHTML = html