class User {

    constructor(name, gender, email, birth, country, password, photo, admin){

        this._id;
        this._name = name;
        this._gender = gender;
        this._email = email;
        this._birth = birth;
        this._country = country;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();


    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }
    get gender(){
        return this._gender;
    }
    get email(){
        return this._email;
    }
    get birth(){
        return this._birth;
    }
    get country(){
        return this._country;
    }
    get password(){
        return this._password;
    }
    get photo(){
        return this._photo;
    }
    set photo(value){
        this._photo = value;
    }
    get admin(){
        return this._admin;
    }
    get register(){
        return this._register;
    }

    loadFromJSON(json){

        for (let name in json){

            switch (name) {
                case '_register':
                    this[name] = new Date(json[name]) ;
                    break;
            
                default:
                    this[name] = json[name];
                    
            }
        }
    }

    getNewID(){

        let usersID = parseInt(localStorage.getItem('usersID'));

        if (!usersID > 0) usersID = 0;

        usersID++;

        localStorage.setItem('usersID', usersID)

        return usersID;
    }

    save(){

        let users = User.getUsersStorage();

        if (this.id > 0) {

            users.map(u=>{ 
                
                if (u._id == this.id){
                    
                   Object.assign(u, this);

                }});
            
            
        }else{

            this._id = this.getNewID();

            users.push(this);
    
        }
        
        localStorage.setItem("users", JSON.stringify(users))
    }

    remove(){

        let users = User.getUsersStorage();

        users.forEach((userData, index) => {
            
            if (this._id == userData._id) {

                users.splice(index, 1)
            }
        });

        localStorage.setItem("users", JSON.stringify(users))
    }

    static getUsersStorage(){
        
        let users = [];

        if (localStorage.getItem("users")) {

            users = JSON.parse(localStorage.getItem("users"))
        }

        return users;

    }

}