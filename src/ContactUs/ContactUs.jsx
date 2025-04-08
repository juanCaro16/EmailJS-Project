import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
    const refForm = useRef();
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = "service_n5v5dbr";
        const templateId = "template_d2srt1j";
        const apikey = "9msBli-eA30allYrt";

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => {
                console.log(result.text);
                if (result.text === "OK") {
                    setSuccessMessageVisible(true);
                    refForm.current.reset();
                    setTimeout(() => setSuccessMessageVisible(false), 3000);
                }
            })
            .catch(error => console.log(error.text));
    };

    return (
        <form ref={refForm} action="" className='text-[#333333]' onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 p-4 bg-[#f5f5dc] rounded-md shadow-md w-[30rem] h-auto max-w-md mx-auto mt-[25%]">
                <div className={`h-15 flex justify-center items-center mb-4 rounded-md p-2 ${successMessageVisible ? 'bg-green-400' : 'hidden'}`} >
                    <p>✅ Mensaje Enviado Con Éxito</p>
                </div>
                <h2 className="text-2xl font-bold text-center">Contáctame</h2>
                <label>Nombre Completo:</label>
                <input type="text" name="username" placeholder="Tu Nombre" className="p-2 border border-[#a3b18a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157]" required
                />
                <label>Email:</label>
                <input type="email" name="emailUser" placeholder="Tu Email" className="p-2 border border-[#a3b18a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157]" required
                />
                <label>Mensaje</label>
                <textarea name="message" placeholder="Tu Mensaje" className="p-2 border border-[#a3b18a] rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#588157]" required></textarea>
                <button type="submit" className="bg-[#588157] text-white p-2 rounded-md cursor-pointer hover:bg-[#3a5a40]">
                    Send Message
                </button>
                <p className='text-center text-gray-400'>Espero Responderte Lo mas pronto Posible</p>
            </div>
        </form>
    );
};