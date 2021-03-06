let data = {
    "member": [
        {"name":"곽세은", "student_number":"10201", "number":3},
        {"name":"궁나영", "student_number":"10202", "number":3},
        {"name":"김나현", "student_number":"10203", "number":3},
        {"name":"김성현", "student_number":"10204", "number":3},
        {"name":"명소정", "student_number":"10205", "number":3},
        {"name":"박지은", "student_number":"10206", "number":3},
        {"name":"서현서", "student_number":"10207", "number":3},
        {"name":"송인효", "student_number":"10208", "number":3},
        {"name":"신부광", "student_number":"10209", "number":3},
        {"name":"양이로운", "student_number":"10210", "number":3},
        {"name":"오정빈", "student_number":"10211", "number":3},
        {"name":"유현서", "student_number":"10212", "number":3},
        {"name":"이연진", "student_number":"10213", "number":3},
        {"name":"정민주", "student_number":"10214", "number":3},
        {"name":"조은서", "student_number":"10215", "number":3},
        {"name":"지윤정", "student_number":"10216", "number":6},
        {"name":"김유석", "student_number":"10217", "number":3},
        {"name":"김재원", "student_number":"10218", "number":3},
        {"name":"김지후", "student_number":"10219", "number":3},
        {"name":"노진웅", "student_number":"10220", "number":3},
        {"name":"박상은", "student_number":"10221", "number":3},
        {"name":"박진", "student_number":"10222", "number":3},
        {"name":"배상진", "student_number":"10223", "number":3},
        {"name":"송기운", "student_number":"10224", "number":3},
        {"name":"염성빈", "student_number":"10225", "number":3},
        {"name":"원종혁", "student_number":"10226", "number":3},
        {"name":"이강현", "student_number":"10227", "number":3},
        {"name":"이주혁", "student_number":"10228", "number":3},
        {"name":"이진원", "student_number":"10229", "number":3},
        {"name":"이형진", "student_number":"10230", "number":6},
        {"name":"장윤성", "student_number":"10231", "number":3},
        {"name":"조민구", "student_number":"10232", "number":3},
        {"name":"최준혁", "student_number":"10233", "number":6}
    ]
}
function clickSettingsBtn(){
    var element1 = document.querySelector(".settings");
    var element2 = document.querySelector(".card");
    element1.classList.toggle("visible");
    element2.classList.toggle("invisible");
}
function minus(i){
    if(data.member[i].number>1){
        data.member[i].number -= 1;
        randList = arrayRemove(randList, i)
        show()
    }
}
function plus(i){
    data.member[i].number += 1;
    randList.push(i)
    show()
}
function arrayRemove(arr, value) { 
    let iszero = true;
    let result = []
    data.member[value].number -= 1;
    for(i = 0; i<arr.length; i++){
        if(arr[i] == value && iszero){
            iszero = !iszero
            continue;
        }
        else{
            result.push(arr[i])
        }
    }
    return result
}

const card = document.querySelector('.card__inner');
let randList = []
for(i=0;i<33;i++){
    for(j=0;j<data.member[i].number;j++){
        randList.push(i)
    }
}
let isdel = true;
card.addEventListener('click', function () {
    if(isdel){
        var item = randList[Math.floor(Math.random() * randList.length)];
        document.querySelector('.card__face--back').innerHTML = `<div class="text">학번: `+data.member[item].student_number + '<br/>이름: '+data.member[item].name+"</div>";
        randList = arrayRemove(randList, item)
    }
    isdel = !isdel
    card.classList.toggle('is-flipped')
    show()
})