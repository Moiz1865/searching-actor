let userlist = document.querySelector(".userlist")
let searchBox = document.querySelector(".searchbox")



const users = [

      {      
          profileUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkf4f3MBM-nOnQXduIReRLT2G_ygTa7gTsQ&s`,
          name: `Alice Johnson`,
          Email: `aLice-main@example.com`
      },

      {      
          profileUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YLp0YKWYQM868MF5mdpWCyU3KCXYeSn2aQ&s`,
          name: `Bob Smith-`,
          Email: `bob@example.com`
      },
      {      
          profileUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGD5sx-vsL1alTWNkV7g4EDhVCOTzSc8VW_g&s`,
          name: `abdul-Moiz`,
          Email: `Moiz@example.com`
      },
      {      
          profileUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTO7JUONF5gJKLz3g0J1GmZ-CP7Iuvsw94A&s`,
          name: `Hamza-Bangash`,
          Email: `Hamza@example.com`
      },

]
function renderUser(arr) {
    userlist.innerHTML=``
    arr.map((obj)=>{
    let {profileUrl, name, Email} = obj
    let divElem = document.createElement('div') 
    divElem.className = `user-card`
    divElem.innerHTML = `
     <img src=${profileUrl} alt="Alice Johnson">
  <div class="user-info">
                    <h3>${name}</h3>
                    <p>${Email}</p>
    </div>

    `
    userlist.append(divElem)
    
})
}
 renderUser(users);

function handleSearch(e) {
    let searchValue = e.target.value
    let  filterUsers = users.filter(obj =>{
        return(obj.name.toLowerCase().includes(searchValue.toLowerCase())
    ||
    obj.Email.toLowerCase().includes(searchValue.toLowerCase())
)
})   
renderUser(filterUsers);
}

searchBox.addEventListener('input',handleSearch)


