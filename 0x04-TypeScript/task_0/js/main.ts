export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Paul",
  lastName: "Okoli",
  age: 29,
  location: "Lagos, Nigeria"
};

const student2: Student = {
  firstName: "Melody",
  lastName: "Albert",
  age: 26,
  location: "Abia, Nigeria"
};

const studentsList: Array<Student> = [student1, student2];

function render(students: Array<Student>) {
  const table = document.createElement('TABLE');
  const thead = document.createElement('THEAD');
  const thead_tr = document.createElement('TR');
  const tbody = document.createElement('TBODY');
  Object.keys(students[0]).forEach((k) => {
    const th = document.createElement('TH');
    th.innerText = k;
    thead_tr.appendChild(th);
  });
  thead.appendChild(thead_tr);
  table.appendChild(thead);
  students.forEach((student: Student) => {
    const tr = document.createElement('TR');
    Object.values(student).forEach((v) => {
      const td = document.createElement('TD');
      td.innerText = v.toString();
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.querySelector('body').appendChild(table);
}

render(studentsList);
