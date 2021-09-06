
function stdlogin(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (success) {
        location.replace("quiz.html")
    }).catch(function (error) {
        alert(error)
    })
}

function stdlogout(){

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            location.replace("index.html")
    
        }).catch((error) => {
            // An error happened.
    
        });
    }
    
    var count = 0

    function fatchQues(){
        var quest = document.getElementById("quest");
        var options = document.getElementById("options");

        firebase.database().ref('quiz').on('child_added',function(data){
            var db = data.val();
            console.log(db);
            quest.innerHTML = db.question
            console.log(db.question);
            options.innerHTML = `
                    <legend>Options</legend>
                    <button>${db.options[0]}</button>
                    <button>${db.options[1]}</button>
                    <button>${db.options[2]}</button>
                    <button>${db.options[3]}</button>
            `
        })
    }

    function nextQ(){
        count++
        fatchQues()
    }

    fatchQues()
