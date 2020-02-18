//app.js is entry point

//initialize github
const github = new Github();
const ui = new UI();


//search input

const searchRepo = document.querySelector('#searchRepo');

//search input event listener
searchRepo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        //get text typed in
        const searchText = e.target.value;

        if(searchText !== "" ){
            //Make http call

            github.getRepo(searchText)
                .then(data => {
                // console.log(data); //we get a reponse of an object with repos::comes from github class at return. with all the data of the i.e name:, owner, repo: url:
                //when you type in input and search a repo that does not exist you will get repo:{message: "Not found"}

                    if(data.profile.message === "Not Found"){

                        //Show alert. will happen in ui class
                        ui.showAlert("Repo not found", "alert alert-danger");

                    } else {
                        //show profile. through ui class
                        ui.showProfile(data.profile);//takes in a repos and we get that from data.profile
                    }
                })

        } else {
            //clear profile, through ui class
            ui.clearProfile();
        }
    }
});

function selectionChange() {
    document.querySelector('#searchRepo').innerHTML = "";
    github.parameter = document.getElementById("myselect").value;
    ui.clearProfile();
}