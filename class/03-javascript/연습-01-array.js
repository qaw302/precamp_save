let classmates = ["철수", "맹구", "훈이"]
// undefined
classmates
// (3)?['철수', '맹구', '훈이']
classmates[0]
// '철수'
classmates[1]
// '맹구'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.push("영희")
// 4
classmates
// (4)?['철수', '맹구', '훈이', '영희']
classmates.pop()
// '영희'
classmates.length
// 3
classmates
// (3)?['철수', '맹구', '훈이']'


// ---------------------------------------------------


let developer = ["워라밸", "연봉", "제자", "커리어", "행복"]
// undefined
developer[4]
// '행복'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8)?['워라밸', '연봉', '제자', '커리어', '행복', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result  // 다른 변수에 결과값 저장한 예시
// (8)?['워라밸', '연봉', '제자', '커리어', '행복', '커리어점프', '성공', '할수있다']


//-------------------------------------------------------------


