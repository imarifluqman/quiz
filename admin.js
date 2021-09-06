
function signup() {
    var admin = document.getElementById("admin");
    var signup = {}

    signup.email = document.getElementById('email').value
    signup.password = document.getElementById('password').value


    // console.log(signup)

    firebase.auth().signInWithEmailAndPassword(signup.email, signup.password)
        .then(function (success) {
            location.replace("addquestion.html")
        }).catch(function (error) {
            alert(error)
        })

}

function logout(){

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        // admin.style.display = "none";
        location.replace("admin.html")

        
    }).catch((error) => {
        // An error happened.

    });
}


function addQuestion(){
    var questions = document.getElementById("question").value;
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var currectAnsw = document.getElementById("currectAns").value
    var model = {}

    model.question = questions
    model.options = [option1, option2,option3,option4]
    model.currectAns = currectAnsw

    // console.log(model)

    firebase.database().ref('/').child('quiz').push(model)
    .then(function (success) {
        alert("Successfully Add your Question")
        location.reload()
        // questions = ""
        // option1 = ""
        // option2 = ""
        // option3 = ""
        // option4 = ""
        // currectAnsw = ""
 
    }).catch(function (error) {
        alert(error)
    })

}
