import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import ImgNewForm from './assets/img/imgNewForm.jpeg';
import LogoPredictionSoft from "./assets/img/logoPredictionSoft.svg";
import ImganeLogoFooter from "./assets/img/logoSinFondo.svg";
import IconoLogoPequeno from "./assets/img/iconoPequenoLogo.svg";
import IconoFacebook from "./assets/img/iconoFacebook.svg";
import IconoTiktok from "./assets/img/iconoTikTok.svg";
import IconoPhone from "./assets/img/iconoPhone.svg";
import IconoLetter from "./assets/img/iconoLetter.svg";
import IconoLocation from "./assets/img/iconoLocation.svg";
import 'aos/dist/aos.css';
import "./assets/style/App.css";

function App() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        rfc: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        rfc: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        const newErrors = { ...formErrors };

        for (const key in formData) {
            if (formData[key] === '') {
                isValid = false;
                newErrors[key] = `Por favor ingresa tu ${key}.`;
            } else {
                newErrors[key] = '';
            }
        }

        if (!isValid) {
            setFormErrors(newErrors);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor llena todos los campos del formulario!',
            });
        } else {
            fetch('https://backendpredictionsoft-production.up.railway.app/api/user/nuevoFormulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formData.name,
                    email: formData.email,
                    telefono: formData.phone,
                    rfc: formData.rfc, 
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                Swal.fire(
                    '¡Datos verificados!',
                    'Tus datos han sido enviados.',
                    'success'
                ).then(() => {
                    Swal.fire({
                        title: '¡Muy pronto nos comunicaremos contigo!',
                        showClass: 'animate__animated animate__fadeInUp animate__faster',
                        hideClass: 'animate__animated animate__fadeOutDown animate__faster',
                    });
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error al enviar tus datos!',
                });
            });
        }
    };

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);      

    return (
        <>
        {/*Navbar*/}
        <div data-aos="fade-up">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href='https://www.predictionsoft.com.mx/'>
                        <img src={LogoPredictionSoft} className="img-fluid" loading="lazy" alt="Img Prediction Soft" width={200} height={200} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href='https://www.predictionsoft.com.mx/'>INICIO</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href="https://www.predictionsoft.com.mx/">NOSOTROS</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href='https://www.predictionsoft.com.mx/'>MÓDULOS ERP</a>  
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href='https://www.predictionsoft.com.mx/'>COTIZAR</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href='https://www.predictionsoft.com.mx/'>PROMOCIONES</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href='https://www.predictionsoft.com.mx/'>CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        {/*End Navbar*/}
            <div id="formLinkRestringido" />
            <div className="bg-info mb-3 p-1 text-center" data-aos="fade-up">
                <h1 className="mb-3 text-white">Registro para nuevos usuarios</h1>
            </div>
            <div className="col-12 col-lg-6 notifications-container" data-aos="fade-up">
                <div className="alert">
                    <div className="flex">
                        <div className="alert-prompt-wrap">
                            <h5 className="text-sm text-yellow-700" style={{ textAlign: "justify" }}>
                                <h3 className="alert-link text-center mb-5">
                                    AVISO DE PRIVACIDAD
                                </h3>
                                <strong>PredictionSoft</strong>
                                ® es el responsable del tratamiento de los datos personales que nos proporcione.<br/><br/>
                                Los datos personales recabados serán utilizados para las siguientes finalidades: <b>Otorgarle los accesos y registro para el
                                uso demo del sistema PredictionSoft</b>® Usted podrá consultar el aviso de privacidad en: <a href='https://predictionsoft.com.mx/' target='blank'>www.predictionsoft.com.mx</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center">
                     {/* Image section */}
                     <div className="col-lg-6 d-flex align-items-center justify-content-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4 text-center">
                            <img src={ImgNewForm} loading='lazy' alt="imagen new form" className="img-fluid" style={{ width: "100%" }} data-aos="fade-up"/>
                        </div>
                    </div>
                    {/* Form section */}
                    <div className="col-lg-6 mt-4 mb-5">
                        <div className="card-body p-md-5 p-4 mx-md-4 custom-border-shadow">
                            <form className="row g-3 " onSubmit={handleSubmit}>
                                <div className="col-12 mt-3 mb-4">
                                    {/* Name */}
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-control ${formErrors.name && 'is-invalid'}`} placeholder="Nombre" required/>
                                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                </div>
                                <div className="col-12 mt-3 mb-4">
                                    {/* Email */}
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-control ${formErrors.email && 'is-invalid'}`} placeholder="Correo electrónico." required/>
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                </div>
                                <div className="col-12 mt-3 mb-4">
                                    {/* Phone */}
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`form-control ${formErrors.phone && 'is-invalid'}`} placeholder="Número de teléfono." required/>
                                    {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                                </div>
                                <div className="col-12 mt-3 mb-4">
                                    {/* rfc */}
                                    <input type="text" name="rfc" value={formData.rfc} onChange={handleChange} className={`form-control ${formErrors.rfc && 'is-invalid'}`} id="rfc" placeholder="RFC" required></input>
                                    {formErrors.rfc && <div className="invalid-feedback">{formErrors.rfc}</div>}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn button text-bg-blue">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*Footer*/}
            <div data-aos="fade-up">
            <footer className="text-center text-lg-start colorFondo">
                <div className="container p-4 ">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div>
                                <img className="img-fluid" alt="Logo" loading="lazy" src={ImganeLogoFooter} />
                            </div>
                            <ul className="list-unstyled mt-4 mb-0">
                                <li>
                                    <h5>
                                        <a href="tel:+529613662079"><img className="img-fluid" target="_blank" loading="lazy" src={IconoPhone} alt="Icono Teléfono" /> 961 366 2079</a>
                                    </h5>
                                </li>
                                <li>
                                    <p>
                                        <a href="mailto:ventas@predictionsoft"><img className="img-fluid" loading="lazy" src={IconoLetter} alt="Icono Correo" /> ventas@predictionsoft</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="https://www.google.com.mx/maps/place/Multillantas+de+Chiapas/@16.7290886,-93.1027877,19.26z/data=!4m9!1m2!2m1!1sCalzada+Zoomat+130.+Col.+Francisco+y+Madero.+Tuxtla+Guti%C3%A9rrez.+Chiapas.!3m5!1s0x85ecd8740a049a3b:0x57a5857763c34ad9!8m2!3d16.7286371!4d-93.1026817!16s%2Fg%2F11clssr4z_?entry=ttu" target="_blank" rel="noopener noreferrer"><img className="img-fluid" loading="lazy" src={IconoLocation} alt="Icono Ubicación" /> Calzada Zoomat 130. Col. Francisco <br /> y Madero. Tuxtla Gutiérrez. Chiapas.</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">POLÍTICAS Y TÉRMINOS</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><a href="https://www.predictionsoft.com.mx/"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Términos y condiciones.</a></p>
                                </li>
                                <li>
                                    <p><a href="https://www.predictionsoft.com.mx/"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Aviso de privacidad.</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">NUESTROS <br /> SERVICIOS</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><a href="https://www.predictionsoft.com.mx/"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Asesoría de sistemas.</a></p>
                                </li>
                                <li>
                                    <p><a href="https://www.predictionsoft.com.mx/"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Desarrollo de software.</a></p>
                                </li>
                                <li>
                                    <p><a href="https://www.predictionsoft.com.mx/"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Soporte técnico especializado.</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">NUESTRAS REDES SOCIALES</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><img className="img-fluid" alt="Incono Pequeño" loading="lazy" src={IconoLogoPequeno} /> Síguenos y forma parte de la comunidad Prediction.</p>
                                </li>
                                <li className="mt-4">
                                    <p><a href="https://www.facebook.com/Software.Prediction" target="_blank"><img className="img-fluid" alt="Icono Facebook" loading="lazy" src={IconoFacebook} /></a><img className="img-fluid" alt="Icono Tiktok" loading="lazy" src={IconoTiktok} />predictionsoft</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center p-3 colorCopyRight">
                © Copyright Prediction Software Todos los derechos reservados.
            </div>
            </div>
        </>
    );
}

export default App;