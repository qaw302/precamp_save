let classmates = ["ö��", "�ͱ�", "����"]
// undefined
classmates
// (3)?['ö��', '�ͱ�', '����']
classmates[0]
// 'ö��'
classmates[1]
// '�ͱ�'
classmates[2]
// '����'
classmates.includes("����")
// true
classmates.push("����")
// 4
classmates
// (4)?['ö��', '�ͱ�', '����', '����']
classmates.pop()
// '����'
classmates.length
// 3
classmates
// (3)?['ö��', '�ͱ�', '����']'


// ---------------------------------------------------


let developer = ["�����", "����", "����", "Ŀ����", "�ູ"]
// undefined
developer[4]
// '�ູ'
let dream = ["Ŀ��������", "����", "�Ҽ��ִ�"]
// undefined
developer.concat(dream)
// (8)?['�����', '����', '����', 'Ŀ����', '�ູ', 'Ŀ��������', '����', '�Ҽ��ִ�']
let result = developer.concat(dream)
// undefined
result  // �ٸ� ������ ����� ������ ����
// (8)?['�����', '����', '����', 'Ŀ����', '�ູ', 'Ŀ��������', '����', '�Ҽ��ִ�']


//-------------------------------------------------------------


