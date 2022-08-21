/*
const c_num = 1;
const i_num = 1;
const n_num = 1;
*/

var person = {
    reward1 : 0,
    reward2 : 0
};

App.addOnLocationTouched("c1", function(player){

    App.showCenterLabel(`${player.name} arrived at c1.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one c1 stamp.`);
        }, 5);
    }
    
});

App.addOnLocationTouched("c2", function(player){

    App.showCenterLabel(`${player.name}arrived at c2.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one c2 stamp.`);
        }, 5);
    }
    
});

App.addOnLocationTouched("c3", function(player){

    App.showCenterLabel(`${player.name}arrived at c3.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one c3 stamp.`);
        }, 5);
    }
    
});

///////////////////////////////////////////////////////////////////////////////////////////

App.addOnLocationTouched("i1", function(player){

    App.showCenterLabel(`${player.name}arrived at i1.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one i1 stamp.`);
        }, 5);
    }
    
});

App.addOnLocationTouched("i2", function(player){

    App.showCenterLabel(`${player.name}arrived at i2.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one i2 stamp.`);
        }, 5);
    }
    
});

App.addOnLocationTouched("i3", function(player){

    App.showCenterLabel(`${player.name}arrived at i3.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one i3 stamp.`);
        }, 5);
    }
    
});

///////////////////////////////////////////////////////////////////////////////////////

App.addOnLocationTouched("n1", function(player){

    App.showCenterLabel(`${player.name}arrived at n1.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one n1 stamp.`);
        }, 5);
    }
    
});

App.addOnLocationTouched("n2", function(player){

    App.showCenterLabel(`${player.name}arrived at n2.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one n2 stamp.`);
        }, 5);
    }
    
});

App.addOnLocationTouched("n3", function(player){

    App.showCenterLabel(`${player.name}arrived at n3.`)
    if(player.storage!=null){
        var reward = JSON.parse(player.storage).reward1;
    }
    else{
        reward=0;
    }
    if(reward>1){
        var reward2=JSON.parse(player.storage).reward2;
        player.storage=null;
        person.reward1=0;
        person.reward2=reward2+1;
        player.storage = JSON.stringify(person);
        var reward = 0;
        App.sayToAll("good job!");
        App.showCenterLabel(`${player.name}'s all stamps exchange to trophy.`)
    }
    else{
        if(player.storage==null){
            person.reward1=1;
            person.reward2=0;
        }
        else{
            var person_obj = JSON.parse(player.storage);
            person.reward1=person_obj.reward1+1;
            person.reward2=person_obj.reward2;
        }
        var person_str = JSON.stringify(person);
        player.storage = person_str;
        var person_obj = JSON.parse(person_str);

        App.sayToAll(player.storage);
        App.sayToAll(person_obj.reward1);
        App.runLater(function() {
            App.showCenterLabel(`${player.name} gets one n3 stamp.`);
        }, 5);
    }
    
});

///////////////////////////////////////////////////////////////////////////////////////

App.addOnKeyDown(81,function(p){
	let players = App.players;
	for(let i in players){
		let player = players[i]
        App.showCenterLabel(player.name+" 's current number of stamps and trophys is "+JSON.parse(player.storage).reward1 + " and " +JSON.parse(player.storage).reward2);
	}
})

App.addOnLocationTouched("main", function(player){

    player.storage=null;
    App.showCenterLabel(`점수가 초기화됨.`)

});