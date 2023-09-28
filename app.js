
function seleccionar(link) {
    const opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    const x = document.getElementById("nav");
    x.className = "";


}



function responsiveMenu(){
    const menu = document.getElementById("nav");
    if(menu.className === "") {
        menu.className = "responsive";
    }else {
        menu.className = "";
    }
}


window.onscroll = function(){
    efectoHabilidades()
};



function efectoHabilidades(){
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("node").classList.add("barra-progreso4");
        document.getElementById("postman").classList.add("barra-progreso5");
        document.getElementById("react").classList.add("barra-progreso6");
        document.getElementById("git").classList.add("barra-progreso7");
    }
}