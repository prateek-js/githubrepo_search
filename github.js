class Github {
    constructor(){
        this.clientId = "b05381dce518209a5a10";
        this.clientSecret = "88c0abbbe090d131fa32a28ea32638ef662d8518";
        this.parameter = 'language';
        this.searchKey = '';
    }

    async getRepo(searchText){
        //get profileresponse
        //const profileResponse = await fetch(`https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);// add on clientid an client secret right after user
        const profileResponse = await fetch(`https://api.github.com/search/repositories?q=${this.parameter}:${searchText}&sort:updated-desc`);// add on clientid an client secret right after user
        //get profiledata
        const profileData = await profileResponse.json(); //gives s json data
        return {
            profile: profileData,
        }

    }
}