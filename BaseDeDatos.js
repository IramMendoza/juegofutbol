function jugador (nombre, edad, nacionalidad, posicion,
                velocidad, tiro, pase, regate, defensa, fuerza, potencial) {
let valorPotencial = null;
if (potencial <= 60){valorPotencial = 60}
else if (potencial <= 65 && potencial >= 61){valorPotencial = 70}
else if (potencial <= 70 && potencial >= 66){valorPotencial = 80}
else if (potencial <= 75 && potencial >= 71){valorPotencial = 90}
else if (potencial <= 80 && potencial >= 76){valorPotencial = 100}
else if (potencial <= 85 && potencial >= 81){valorPotencial = 110}
else if (potencial <= 90 && potencial >= 86){valorPotencial = 120}
else if (potencial <= 95 && potencial >= 91){valorPotencial = 130}
else if (potencial <= 100 && potencial >= 96){valorPotencial = 140}

let valorEdad = null;
if (edad <= 21){valorEdad = 10;}
else if (edad <= 26){valorEdad = 7;}
else if (edad <= 30){valorEdad = 5;}
else if (edad <= 35){valorEdad = 2;}
else {valorEdad = 1;}

let min = 1;
let max = 5;
let animo = Math.floor(Math.random() * (max - min + 1)) + min;
let general = Math.floor((velocidad + tiro + pase + regate + defensa + fuerza)/5.1);

let valorGeneral = null;
if (general <= 60){valorGeneral = 5}
else if (general <= 63 && general >= 61){valorGeneral = 10}
else if (general <= 66 && general >= 64){valorGeneral = 20}
else if (general <= 69 && general >= 67){valorGeneral = 40}
else if (general <= 72 && general >= 70){valorGeneral = 80}
else if (general <= 75 && general >= 73){valorGeneral = 100}
else if (general <= 77 && general >= 76){valorGeneral = 200}
else if (general <= 79 && general >= 78){valorGeneral = 400}
else if (general <= 82 && general >= 80){valorGeneral = 800}
else if (general <= 85 && general >= 83){valorGeneral = 1600}
else if (general <= 88 && general >= 86){valorGeneral = 3200}
else if (general <= 92 && general >= 89){valorGeneral = 6400}
else if (general <= 95 && general >= 93){valorGeneral = 12800}
else if (general <= 97 && general >= 96){valorGeneral = 25600}
else if (general <= 100 && general >= 98){valorGeneral = 51200}

let precio = Math.floor(valorEdad * valorPotencial * valorGeneral)*31;
let precioFormateado = precio.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
let sueldo = Math.floor(precio / 4.5);
let sueldoFormateado = sueldo.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
general = general + animo;

    nombre = {"nombre":nombre, "edad":edad, "nacionalidad":nacionalidad, "posicion":posicion,
                "velocidad":velocidad, "tiro":tiro, "pase":pase, "regate":regate, "defensa":defensa, "fuerza":fuerza,
                "animo":animo, "general":general, "potencial":potencial, "precio":precioFormateado, "sueldo":sueldoFormateado};
return nombre;
};

let Lewandoski = jugador("Lewandoski",33,"Polonia","Delantero",75,91,79,86,44,83,89);
let AnsuFati = jugador("Ansu Fati",20,"España","Delantero",88,77,72,82,30,53,90);
let Huescas = jugador("Rodrigo Huescas", 18, "Mexico", "Medio", 58, 52, 50, 50, 52, 48, 74);
let Mbappe = jugador ("Mbappe", 24, "Francia","Delantero", 97, 89, 80, 92, 36, 76,95);
let Messi = jugador("Messi", 35, "Argentina", "Delantero", 81,89,90,94,34,64,91);
let Lozano = jugador("Hirving Lozano", 27, "Mexico", "Delantero", 93, 76, 72, 82, 41, 62, 81);
let Halaand = jugador("Haaland", 22, "Noruega", "Delantero", 89, 91, 65, 80, 49, 87, 94);
let Orbelin = jugador("Orbelin Pineda", 27, "Mexico", "Medio", 75, 67, 71, 75, 45, 60, 77);
let Guardado = jugador("Guardado", 33, "Mexico", "Medio", 63, 70, 73, 70, 64, 56, 80);
let Benzema = jugador("Benzema", 33, "Francia", "Delantero", 80, 88, 83, 87, 37, 98, 91);
let Pedri = jugador("Pedri", 20, "España", "Medio", 73, 65, 85, 87, 65, 63, 93);
console.log (Pedri);

