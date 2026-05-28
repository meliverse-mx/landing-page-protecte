// EJECUCIÓN CUANDO EL DOCUMENTO ESTÁ COMPLETAMENTE CARGADO
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFECTO DINÁMICO EN EL MENÚ DE NAVEGACIÓN AL HACER SCROLL
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. LÓGICA DE LA CALCULADORA DE AHORRO INTERACTIVA
    const slider = document.getElementById('pagoActual');
    const sliderValue = document.getElementById('sliderValue');
    const pagoNuevo = document.getElementById('pagoNuevo');

    if (slider && sliderValue && pagoNuevo) {
        slider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            
            // Actualizar el texto del dinero del slider en formato moneda mexicana
            sliderValue.innerText = `$${val.toLocaleString('es-MX')} MXN`;
            
            // Simulación: el cliente solar ahorra un 95%, pagando sólo el 5% (el cargo mínimo de CFE)
            const minimoCFE = Math.round(val * 0.05);
            pagoNuevo.innerText = `$${minimoCFE.toLocaleString('es-MX')} MXN`;
        });
    }

    // 3. ENVÍO ESTÉTICO DEL FORMULARIO DE LEADS
    const leadForm = document.getElementById('leadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue bruscamente
            
            // Capturar datos para usarlos en el mensaje de éxito
            const nombreCliente = document.getElementById('nombre').value;
            
            // Feedback visual exitoso para enganchar al cliente
            alert(`¡Excelente elección, ${nombreCliente}! Hemos recibido tus datos de manera segura. Un ingeniero especializado de PROTECTE se comunicará contigo vía WhatsApp en menos de 24 horas para entregarte tu análisis técnico.`);
            
            // Reiniciar el formulario
            leadForm.reset();
        });
    }
});