let students = [
    {name: "ö��", age: 13, school:"�ٶ�����"},
    {name: "����", age: 8, school:"������"},
    {name: "�ͱ�", age: 11, school:"�ź�����"},
]
// undefined
students
// (3)?[{��}, {��}, {��}]0: {name: 'ö��', age: 13, school: '�ٶ�����'}1: {name: '����', age: 8, school: '������'}2: {name: '�ͱ�', age: 11, school: '�ź�����'}length: 3[[Prototype]]: Array(0)
students.length
// 3
students[0].name
// 'ö��'
students[2].age
// 11