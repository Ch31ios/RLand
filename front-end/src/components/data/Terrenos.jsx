// src/data/terrenos.jsx
const terrenos = [
    {
      id: 1,
      nombre: "Terreno Norte",
      ubicacion: "Ciudad Norte, Sector A",
      tamano: "500 m²",
      estado: "Alquiler",
      precio: "USD 1000/mes",
      descripcion: "Terreno ideal para construcción residencial.",
      imagen: "/src/assets/terreno_norte.jpg"
    },
    {
      id: 2,
      nombre: "Terreno Sur",
      ubicacion: "Ciudad Sur, Zona B",
      tamano: "700 m²",
      estado: "Venta",
      precio: "USD 50,000",
      descripcion: "Terreno listo para urbanización.",
      imagen: "/assets/terreno_sur.jpg"
    },
    {
      id: 3,
      nombre: "Terreno Este",
      ubicacion: "Ciudad Este, Sector C",
      tamano: "600 m²",
      estado: "Venta",
      precio: "USD 75,000",
      descripcion: "Terreno con vista al mar.",
      imagen: "/assets/terreno_este.jpg"
    },
    {
      id: 4,
      nombre: "Terreno Oeste",
      ubicacion: "Ciudad Oeste, Sector D",
      tamano: "800 m²",
      estado: "Venta",
      precio: "USD 90,000",
      descripcion: "Terreno amplio ideal para uso comercial.",
      imagen: "/assets/terreno_oeste.jpg"
    },
    {
      id: 5,
      nombre: "Terreno Centro",
      ubicacion: "Ciudad Centro, Sector E",
      tamano: "1000 m²",
      estado: "Alquiler",
      precio: "USD 1200/mes",
      descripcion: "Terreno en el centro de la ciudad, excelente para negocios.",
      imagen: "/assets/terreno_centro.jpg"
    },
    {
      id: 6,
      nombre: "Terreno Campestre",
      ubicacion: "Zona Rural, Sector F",
      tamano: "1500 m²",
      estado: "Venta",
      precio: "USD 60,000",
      descripcion: "Terreno ideal para una finca o casa de campo.",
      imagen: "/assets/terreno_campestre.jpg"
    },
    {
      id: 7,
      nombre: "Terreno Comercial",
      ubicacion: "Zona Comercial, Sector G",
      tamano: "1200 m²",
      estado: "Venta",
      precio: "USD 110,000",
      descripcion: "Terreno en el corazón de la zona comercial.",
      imagen: "/assets/terreno_comercial.jpg"
    },
    {
      id: 8,
      nombre: "Terreno Residencial",
      ubicacion: "Ciudad Residencial, Sector H",
      tamano: "900 m²",
      estado: "Alquiler",
      precio: "USD 800/mes",
      descripcion: "Terreno perfecto para un proyecto habitacional.",
      imagen: "/assets/terreno_residencial.jpg"
    },
    {
      id: 9,
      nombre: "Terreno Industrial",
      ubicacion: "Zona Industrial, Sector I",
      tamano: "2000 m²",
      estado: "Venta",
      precio: "USD 200,000",
      descripcion: "Terreno con excelente acceso para actividades industriales.",
      imagen: "/assets/terreno_industrial.jpg"
    },
    {
      id: 10,
      nombre: "Terreno Playa",
      ubicacion: "Zona Costera, Sector J",
      tamano: "500 m²",
      estado: "Venta",
      precio: "USD 300,000",
      descripcion: "Terreno con acceso directo a la playa.",
      imagen: "/assets/terreno_playa.jpg"
    },
    {
      id: 11,
      nombre: "Terreno Montaña",
      ubicacion: "Zona Alta, Sector K",
      tamano: "750 m²",
      estado: "Venta",
      precio: "USD 130,000",
      descripcion: "Terreno con vista panorámica a las montañas.",
      imagen: "/assets/terreno_montana.jpg"
    },
    {
      id: 12,
      nombre: "Terreno Urbano",
      ubicacion: "Ciudad Urbana, Sector L",
      tamano: "550 m²",
      estado: "Alquiler",
      precio: "USD 950/mes",
      descripcion: "Terreno ubicado en una zona urbana en crecimiento.",
      imagen: "/assets/terreno_urbano.jpg"
    },
    {
      id: 13,
      nombre: "Terreno Suburbano",
      ubicacion: "Zona Suburbana, Sector M",
      tamano: "600 m²",
      estado: "Venta",
      precio: "USD 80,000",
      descripcion: "Terreno cerca de la ciudad, ideal para proyectos residenciales.",
      imagen: "/assets/terreno_suburbano.jpg"
    },
    {
      id: 14,
      nombre: "Terreno Industrial Norte",
      ubicacion: "Zona Norte, Sector N",
      tamano: "1800 m²",
      estado: "Venta",
      precio: "USD 175,000",
      descripcion: "Terreno preparado para infraestructura industrial.",
      imagen: "/assets/terreno_industrial_norte.jpg"
    },
    {
      id: 15,
      nombre: "Terreno Comercial Sur",
      ubicacion: "Zona Sur, Sector O",
      tamano: "1300 m²",
      estado: "Venta",
      precio: "USD 150,000",
      descripcion: "Terreno comercial en zona de alto tráfico.",
      imagen: "/assets/terreno_comercial_sur.jpg"
    },
    {
      id: 16,
      nombre: "Terreno para Parque",
      ubicacion: "Ciudad Verde, Sector P",
      tamano: "2000 m²",
      estado: "Venta",
      precio: "USD 250,000",
      descripcion: "Terreno ideal para un proyecto de parque o áreas verdes.",
      imagen: "/assets/terreno_parque.jpg"
    },
    {
      id: 17,
      nombre: "Terreno Hotelero",
      ubicacion: "Zona Turística, Sector Q",
      tamano: "3000 m²",
      estado: "Venta",
      precio: "USD 400,000",
      descripcion: "Terreno preparado para construir un hotel.",
      imagen: "/assets/terreno_hotelero.jpg"
    },
    {
      id: 18,
      nombre: "Terreno Recreativo",
      ubicacion: "Ciudad Deportiva, Sector R",
      tamano: "1500 m²",
      estado: "Alquiler",
      precio: "USD 1200/mes",
      descripcion: "Terreno adecuado para centros recreativos o deportivos.",
      imagen: "/assets/terreno_recreacional.jpg"
    },
    {
      id: 19,
      nombre: "Terreno Forestal",
      ubicacion: "Zona Boscosa, Sector S",
      tamano: "5000 m²",
      estado: "Venta",
      precio: "USD 500,000",
      descripcion: "Terreno en una zona boscosa ideal para proyectos ecológicos.",
      imagen: "/assets/terreno_forestal.jpg"
    },
    {
      id: 20,
      nombre: "Terreno de Esquina",
      ubicacion: "Ciudad Comercial, Sector T",
      tamano: "900 m²",
      estado: "Alquiler",
      precio: "USD 1100/mes",
      descripcion: "Terreno en esquina con gran visibilidad para negocios.",
      imagen: "/assets/terreno_esquina.jpg"
    }
  ];
  
  export default terrenos;
  