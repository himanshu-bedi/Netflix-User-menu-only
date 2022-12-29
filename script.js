const users = ['Himanshu','Harsh'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <a href="https://codeforces.com/profile/bedi_1234" target="_blank"><button class="btn"><span>${curElem}</span></button></a>
        `);
    })
};

addIcon.addEventListener('click', () => {
    let userName = prompt('please enter your name');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <a href="https://codeforces.com/profile/bedi_1234" target="_blank"><button class="btn"><span>${curElem}</span></button></a>
        `);
    }else{
        alert('username already exist');
    }
})


userIcons();
