window.addEventListener('onEventReceived', function (obj) {
    const data = obj.detail.event.data;

    let badge = '';
    const message = data.text;

    //console.log(data["badges"][0]["type"]);
    //console.warn(message);

    if(data["badges"][0]["type"]){
    
    let badge = data["badges"][0]["type"];
        console.log('badges:', badge);
    
    let command = message.split(" ")[0];
        console.log('command:', command.toLowerCase());
    
    let team = message.split(" ")[1];
        console.log('team:', team);
    
    let points = message.split(" ")[2];
        console.log('points:', points);

        if(command.toLowerCase() == "!team" && ( badge === 'moderator' || badge === 'broadcaster')){
        if(team === 'a'){
            document.getElementById("nameTeamA").innerText = points;
        } else if(team === 'b'){
            document.getElementById("nameTeamB").innerText = points;
        } else if(team === 'reset'){
            document.getElementById("nameTeamA").innerText = null;
            document.getElementById("nameTeamB").innerText = null;
        }
        };


        if(command.toLowerCase() == "!set" && ( badge === 'moderator' || badge === 'broadcaster')){
            if (team === 'a') {
                document.getElementById("punteggioA").innerText = points;
            }else if(team === 'b'){
                document.getElementById("punteggioB").innerText = points;
            }else if(team === 'reset'){
                document.getElementById("punteggioA").innerText = 0;
                document.getElementById("punteggioB").innerText = 0;
            };
        };
        }
    });