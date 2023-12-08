import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 -mt-80"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis Proyectos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-40">
        <Link href={"https://netflix-clone-app-astu2222.vercel.app/"}>
          <ProjectCard
            src="/GetFlex.webp"
            title="Netflix Clone"
            description="Podremos verificar las caracteristicas básicas que maneja Netflix como por ejemplo: Página Inicio, Login, Selector de Cuenta, Reproducción de Video, VideoPlayer (AutoPlay, Initial Sound) entre otras."
            />
        </Link>

        <Link href={"https://barber-in-the-house.vercel.app/"}>
          <ProjectCard
            src="/BarberInTheHouse.webp"
            title="Barber in the House"
            description="Página de Barbería Pilar - Funcionalidades como WhatsApp, Instagram, ver catalogo de cortes, Ubicación, Funcionalidades Js y Personalización Acordada con el cliente."
            />
        </Link>

        <Link href={"https://www.tmtoperadora.tur.ar/"}>
          <ProjectCard
            src="/Tmt.webp"
            title="Operadora de Turismo TMT"
            description="Página de Turismo - Funcionalidades básicas como la muestra de la documentación (PDF), Formulario de Arrepentimiento funcional (Notifica al Email del Proveedor), Carrusel, Cards, entre otros."
            />
        </Link>


        
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 mt-10 px-10 z-40">
        <Link href={"https://ecommerce-next-astu2222.vercel.app/"}>
          <ProjectCard
            src="/NextEcommerce.webp"
            title="Next Ecommerce"
            description="Proyecto Personalizado en el cual se podra ver un carrusel - Lista de usuarios - Productos - Cambio de tema - Favoritos Localstorage y grandes avances en diseño a traves de la libreria Next UI."
            />
        </Link>

        <Link href={"https://futbol-para-todos.vercel.app/"}>
          <ProjectCard
            src="/Futbol.webp"
            title="Futbol para todos"
            description="Página donde a través de Transmisiones en vivo accedemos a distintos canales de televisión - Plataformas de stream, funcionalidades básicas... Unico Disponible Tyc Sports"
            />
        </Link>

        <Link href={"https://ctd-esp-fe3-final-taupe.vercel.app/"}>
          <ProjectCard
            src="/DH.webp"
            title="Trabajo Integrador React / Vite"
            description="Página Exámen - Funcionalidades básicas de react como Acceso a información de API´s, Guardar Elementos a Favoritos, sección de Contacto y funcionalidad Light & Dark."
            />
        </Link>


        
      </div>

      
    </div>
  );
};

export default Projects;
