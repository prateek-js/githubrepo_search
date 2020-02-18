class UI {
    constructor(){
        this.profile = document.querySelector("#profile");
        this.average_score = 0;
    }
    showProfile(result){
        var repos = [];
        if (result.items && result.items.length > 1) {
            this.profile.innerHTML = `
            <h3 class="page-heading mb-3">Repositories</h3>
            <div id="repos"></div>
            `;
            for (let i =0; i<5; i++) {
                repos.push(result.items[i]);
            }
            repos.sort(function(a,b){
                return new Date(b.updated_at) - new Date(a.updated_at);
            });
            var sum = 0;
            repos.forEach(function(res) {
                sum += parseInt( res.score, 10 ); //don't forget to add the base
            });
            this.average_score = sum/repos.length;
            this.showRepos(repos);
        } else if (result.errors) {
            this.profile.innerHTML = `
            <h3 class="page-heading mb-3">No Repositories Found</h3>
            
            `;
        }
        
    }

    //Show repos

    showRepos(repos){ //repos stored as array, sowe ave to loop through to display each
        let output = "";
        repos.forEach(function(repo) {

            output += `
            
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <span class="badge badge-pill badge-info">${repo.owner.login}</span>
                    </div>
                    
                    <div class="col-md-6">
                    <span class="badge badge-pill badge-info">Score: ${repo.score}</span>
                    <span class="badge badge-pill badge-secondary">Language: ${repo.language}</span>
                    <span class="badge badge-pill badge-info">Forks: ${repo.forks_count}</span>
                    <span class="badge  badge-pill badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-pill badge-primary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-pill badge-primary">Size: ${repo.size}</span>
                    <br><br> 
                    </div>
                </div>
            </div>   
                    
            
            
            
            
            `
        });
        //output repositories

        document.getElementById('repos').innerHTML = output;

    }

    //show alert
    showAlert(message, className) {
        //clear any remaining alerts
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //add classes
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));

        //get paarent element to add div to
        const container = document.querySelector(".searchContainer");

        //get searchbox
        const search = document.querySelector(".search");
        //insert alert
        container.insertBefore(div, search); //insert alert msg(div) before search in container(parent). search is the card

        //alert dissapper after 2seconds
        setTimeout( () =>{
            this.clearAlert();
        },2000 ); //clear alert msg after 2seconds
    }



    //clear alert message
        clearAlert(){
            //get alert
            const currentAlert = document.querySelector(".alert");
            if(currentAlert){
                currentAlert.remove()

            }
        }



    //clear profile
    clearProfile(){
        this.profile.innerHTML = "";
    }

}