export interface Members {
  id: string;
  nick: string;
  role: string;
  color: string;
  rango: string;
  pais: string;
  edad: number;
  descripcion: string;
  horarioHabitual: string;
}

let lider = "#FF5555";
let admin = "#55FFFF";
let mod = "#5555FF";
let miembro = "#FFFF55";

export const members: Members[] = [
  {
    id: "1",
    nick: "Facuux_09",
    role: "Lider",
    color: lider,
    rango: "Galaxy",
    pais: "Argentina",
    edad: 16,
    descripcion:
      "Soy Desarrollador Junior Fullstack , estudio el bachillerato de Informática, Construyó en minecraft. Horario habitual: Variado, depende cuando esté trabajando y/o estudiando, afk casi 24/7",
    horarioHabitual: "De 22:00 a 00:00/1:00",
  },
  {
    id: "2",
    nick: "Tondrox",
    role: "Administrador",
    color: admin,
    rango: "Galaxy",
    pais: "España",
    edad: 19,
    descripcion: "Estudiante de ingeniería",
    horarioHabitual:
      "Cuando puedo y me apetece, normalmente estoy más activo por las noches en mi país",
  },
  {
    id: "3",
    nick: "Onasor",
    role: "Miembro",
    color: miembro,
    rango: "Arefy+",
    pais: "Uruguay",
    edad: 17,
    descripcion:
      "Soy Desarrollador Junior Fullstack , estudio el bachillerato de Informática, Construyó en minecraft.",
    horarioHabitual:
      "Variado, depende cuando esté trabajando y/o estudiando, afk casi 24/7",
  },
  {
    id: "4",
    nick: "AndradeLPA",
    role: "Miembro",
    color: miembro,
    rango: "Galaxy",
    pais: "Mexico",
    edad: 32,
    descripcion: "Pendiente",
    horarioHabitual: "Lunes a domingo de 4pm a 10pm 10pm a 1pm afk ",
  },
  {
    id: "5",
    nick: "ZzlFull5",
    role: "Miembro",
    color: miembro,
    rango: "Arefy+",
    pais: "Chile",
    edad: 23,
    descripcion: " No hago nada estudio arquitectura pero me tome 1 año",
    horarioHabitual: "Variado",
  },
  {
    id: "6",
    nick: "lowwn",
    role: "Miembro",
    color: miembro,
    rango: "Arefy",
    pais: "Argentina",
    edad: 17,
    descripcion:
      "Wazaa jugador de fornai good y salir de joda estudio obvio qno?",
    horarioHabitual: "1am hasta 7am afk, si o si 15:30pm 20pm",
  },

  {
    id: "7",
    nick: "luzmila_MYT",
    role: "Miembro",
    color: miembro,
    rango: "Hero",
    pais: "Pendiente",
    edad: 16,
    descripcion: "Pendiente",
    horarioHabitual: "Pendiente",
  },
  {
    id: "8",
    nick: "QCB",
    role: "Miembro",
    color: miembro,
    rango: "Leyenda",
    pais: "Perú",
    edad: 18,
    descripcion: "illo",
    horarioHabitual: "24/7",
  },
];
export const allMembers = [...members];
