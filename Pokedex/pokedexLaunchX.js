const fetchPokemon = () =>{
    ocultarinputs();
    const pokeName=document.getElementById("pokeName");
    let pokeInput=pokeName.value.toLowerCase();
    const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            console.log(res);
            pokeImage("");
            ocultarinputs();
        }else{
            return res.json();
        }
    }).then((data)=>{
        console.log(data);
        let pokeImg=data.sprites.front_default;
        let pokeType1=data.types[0].type.name;
        let pokeType2;
    
        if(data.types.length == 2){
            pokeType2=data.types[1].type.name;
            poketype2(pokeType2);
        }
    
        let pokeStat1=data.stats[0].base_stat;
        let pokeStat2=data.stats[1].base_stat;
        let pokeStat3=data.stats[2].base_stat;
        let pokeStat4=data.stats[3].base_stat;
        let pokeStat5=data.stats[4].base_stat;
        let pokeStat6=data.stats[5].base_stat;

        pokeImage(pokeImg)
        poketype1(pokeType1);
        pokeStats(pokeStat1,pokeStat2,pokeStat3,pokeStat4,pokeStat5,pokeStat6);
        searchmove(data);
    })
}

//fetchPokemon();

const ocultarinputs=()=>{
    document.getElementById("tipo").setAttribute("type","hidden");
    document.getElementById("stats").setAttribute("type","hidden");
    document.getElementById("mov").setAttribute("type","hidden");
    document.getElementById("pokeType").setAttribute("type","hidden");
    document.getElementById("pokeType2").setAttribute("type","hidden");
    document.getElementById("pokeStat1").setAttribute("type","hidden");
    document.getElementById("pokeStat2").setAttribute("type","hidden");
    document.getElementById("pokeStat3").setAttribute("type","hidden");
    document.getElementById("pokeStat4").setAttribute("type","hidden");
    document.getElementById("pokeStat5").setAttribute("type","hidden");
    document.getElementById("pokeStat6").setAttribute("type","hidden");
    document.getElementById("pokeMove1").setAttribute("type","hidden");
    document.getElementById("pokeMove2").setAttribute("type","hidden");
    document.getElementById("pokeMove3").setAttribute("type","hidden");
    document.getElementById("pokeMove4").setAttribute("type","hidden");
}


const pokeImage=(url)=>{
    const pokeImg=document.getElementById("pokeImg");
    pokeImg.src= url;
}

const poketype1=(type1)=>{
    document.getElementById("tipo").setAttribute("type","text");
    document.getElementById("pokeType").setAttribute("type","text");
    const poketype=document.getElementById("pokeType");
    poketype.value=type1;
}

const poketype2=(type2)=>{
    document.getElementById("pokeType2").setAttribute("type","text");
    const poketype2=document.getElementById("pokeType2");
    poketype2.value=type2;
}

const pokeStats=(Stats1,Stats2,Stats3,Stats4,Stats5,Stats6)=>{
    document.getElementById("stats").setAttribute("type","text");
    document.getElementById("pokeStat1").setAttribute("type","text");
    document.getElementById("pokeStat2").setAttribute("type","text");
    document.getElementById("pokeStat3").setAttribute("type","text");
    document.getElementById("pokeStat4").setAttribute("type","text");
    document.getElementById("pokeStat5").setAttribute("type","text");
    document.getElementById("pokeStat6").setAttribute("type","text");
    const pokeStat1=document.getElementById("pokeStat1");
    pokeStat1.value="HP " + Stats1;
    const pokeStat2=document.getElementById("pokeStat2");
    pokeStat2.value="Attack " + Stats2;
    const pokeStat3=document.getElementById("pokeStat3");
    pokeStat3.value="Defense " + Stats3;
    const pokeStat4=document.getElementById("pokeStat4");
    pokeStat4.value="Special-attack "+Stats4;
    const pokeStat5=document.getElementById("pokeStat5");
    pokeStat5.value="Special-defense "+Stats5;
    const pokeStat6=document.getElementById("pokeStat6");
    pokeStat6.value="Speed " + Stats6;
}

const searchmove=(data)=>{
    indexP = data.base_experience;
    i=1;
    document.getElementById("mov").setAttribute("type","text");

    for (index = 0; i <= 4; index++) {
        indexM = data.moves[index].version_group_details[0].level_learned_at;

        if(indexP < 70){
            if(indexM > 0 &&  indexM < 23){
                inpoke="pokeMove"+i;
                document.getElementById(`${inpoke}`).setAttribute("type","text");
                const pokeMove=document.getElementById(`${inpoke}`);
                pokeMove.value=data.moves[index].move.name;
                console.log(data.moves[index].move.name);
                i++
            }
        }
        if(indexP > 70 && indexP < 150){
            if(indexM > 23 &&  indexM < 35){
                inpoke="pokeMove"+i;
                document.getElementById(`${inpoke}`).setAttribute("type","text");
                const pokeMove=document.getElementById(`${inpoke}`);
                pokeMove.value=data.moves[index].move.name;
                console.log(data.moves[index].move.name);
                i++
            }
        }
        if(indexP > 150 ){
            if(indexM > 35 &&  indexM < 100){
                inpoke="pokeMove"+i;
                document.getElementById(`${inpoke}`).setAttribute("type","text");
                const pokeMove=document.getElementById(`${inpoke}`);
                pokeMove.value=data.moves[index].move.name;
                console.log(data.moves[index].move.name);
                i++
            }
        }

    }
}
const imprimir=()=>{
    const pokeName=document.getElementById("pokeName");
    let pokeInput=pokeName.value;
}