let arr = ["Initializing Hack Program", "Intruding into User's Phone", "Unlocking User's Password", "Trying 200k passwords", "Match Not Found", "Trying Another 200k passwords", "Match Not Found", "Trying Another 200k passwords" , "Finally User's Mobile opened has been opened" ,"", "Accessing User's contacts", "Retrieving User's Data" , "Copying All files","All Files has been Copied","" ,"Accessing Facebook's Account","Unlocking User's Password", "Trying 200k passwords", "Match Not Found", "Trying Another 200k passwords", "Match Not Found", "Trying Another 200k passwords","User's Facebook Account Hacked" ,"Hack Successful"]

const sleep = async(seconds)=> {
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            resolve(true)
        },seconds *1000)
    })
}

const showMessage = async(message)=>{
    await sleep(2)
    console.log(message)
    document.querySelector('.display2').innerHTML = document.querySelector('.display2').innerHTML + message+'<br>'
}

(async () => {
   for (let i=0; i< arr.length; i++) {
    await showMessage(arr[i])
   }
})();