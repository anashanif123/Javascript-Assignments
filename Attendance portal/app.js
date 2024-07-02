var users = [
  {
    name: 'Muhammad Anas',
    fatherName: 'Muhammad Hanif',
    age: 20,
    rollNo: '175121',
    class: '12th Grade',
  },
  {
    name: 'Abdul Moiz',
    fatherName: 'Muhammad Tahir',
    age: 20,
    rollNo: '32231',
    class: '12th Grade',
  },
  {
    name: 'Ahsan',
    fatherName: 'Hanif',
    age:19,
    rollNo: '23191',
    class: '10th Grade',
  },
  {
    name: 'ustad',
    fatherName: 'shamroo',
    age: 22,
    rollNo: '214',
    class: '16th Grade',
  },
  {
    name: ' gafoor',
    fatherName:'ustad',
    age: 12,
    rollNo: '105',
    class: '6th Grade',
  },
  {
    name: 'aleem',
    fatherName: 'pasha',
    age: 17,
    rollNo: '106',
    class: '10th Grade',
  },
  {
    name:'Andrew',
    fatherName:'Tate',
    age: 17,
    rollNo: '107',
    class: '11th Grade',
  },
  {
    name: 'David Lee',
    fatherName: 'George Lee',
    age: 14,
    rollNo: '108',
    class: '8th Grade',
  },
  {
    name: 'Laura Martin',
    fatherName: 'Paul Martin',
    age: 16,
    rollNo: '109',
    class: '10th Grade',
  },
  {
    name: 'Kevin White',
    fatherName: 'Mark White',
    age: 15,
    rollNo: '110',
    class: '9th Grade',
  },
  {
    name: 'Anna Harris',
    fatherName: 'Steven Harris',
    age: 17,
    rollNo: '111',
    class: '11th Grade',
  },
  {
    name: 'Brian Clark',
    fatherName: 'Edward Clark',
    age: 14,
    rollNo: '112',
    class: '8th Grade',
  },
  {
    name: 'Sophia Lewis',
    fatherName: 'Henry Lewis',
    age: 16,
    rollNo: '113',
    class: '10th Grade',
  },
  {
    name: 'Christopher Walker',
    fatherName: 'Frank Walker',
    age: 15,
    rollNo: '114',
    class: '9th Grade',
  },
  {
    name: 'Grace Hall',
    fatherName: 'Peter Hall',
    age: 17,
    rollNo: '115',
    class: '11th Grade',
  },
  {
    name: 'Justin Allen',
    fatherName: 'Patrick Allen',
    age: 14,
    rollNo: '116',
    class: '8th Grade',
  },
  {
    name: 'Olivia Young',
    fatherName: 'Bruce Young',
    age: 16,
    rollNo: '117',
    class: '10th Grade',
  },
  {
    name: 'Nathan Hernandez',
    fatherName: 'Larry Hernandez',
    age: 15,
    rollNo: '118',
    class: '9th Grade',
  },
  {
    name: 'Mia King',
    fatherName: 'Joe King',
    age: 17,
    rollNo: '119',
    class: '11th Grade',
  },
  {
    name: 'Ethan Wright',
    fatherName: 'Stanley Wright',
    age: 14,
    rollNo: '120',
    class: '8th Grade',
  },
  {
    name: 'Ava Lopez',
    fatherName: 'Timothy Lopez',
    age: 16,
    rollNo: '121',
    class: '10th Grade',
  },
  {
    name: 'Jacob Scott',
    fatherName: 'Chris Scott',
    age: 15,
    rollNo: '122',
    class: '9th Grade',
  },
  {
    name: 'Samantha Green',
    fatherName: 'Shawn Green',
    age: 17,
    rollNo: '123',
    class: '11th Grade',
  },
  {
    name: 'Andrew Adams',
    fatherName: 'Jason Adams',
    age: 14,
    rollNo: '124',
    class: '8th Grade',
  },
  {
    name: 'Ella Baker',
    fatherName: 'Ryan Baker',
    age: 16,
    rollNo: '125',
    class: '10th Grade',
  },
];


var userTable = document.getElementById('userTable');
var userPresent = document.getElementById('presentCount');
var userAbsent = document.getElementById('absentCount');
var userLeave = document.getElementById('leaveCount');
var presentCount = 0;
var absentCount = 0;
var leaveCount = 0;

function updateCounts() {
  presentCount = 0;
  absentCount = 0;
  leaveCount = 0;

  users.forEach(user => {
    if (user.status === 'present') {
      presentCount++;
    } else if (user.status === 'absent') {
      absentCount++;
    } else if (user.status === 'leave') {
      leaveCount++;
    }
  });

  userPresent.innerHTML = presentCount;
  userAbsent.innerHTML = absentCount;
  userLeave.innerHTML = leaveCount;
}

function addData() {
  for (var i = 0; i < users.length; i++) {
    userTable.innerHTML += `
  <tr>
      <td>0${i + 1}</td>
      <td>${users[i].name}</td>
      <td>${users[i].fatherName}</td>
      <td>${users[i].rollNo}</td>
      <td>${users[i].age}</td>
      <td>
        <button id="present_p" onclick="updateStatus(${i}, 'present')">Present</button>
      </td>
      <td>
        <button id="absent_p" onclick="updateStatus(${i}, 'absent')">Absent</button>
      </td>
      <td>
        <button id="leave_p" onclick="updateStatus(${i}, 'leave')">Leave</button>
      </td>
  </tr>
    `;
  }
}

function updateStatus(index, status) {
  users[index].status = status;
  updateCounts();
}

addData();