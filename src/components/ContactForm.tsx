import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm: React.FC = () => {
  type ResponseStatus = "idle" | "sending" | "success" | "error";
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>("idle");
  const onSubmit = async (data: any) => {
    try {
      setResponseStatus("sending");
      const response = await fetch("https://formspree.io/f/xpwjaanb", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
        }),
      });
      if (response.ok) {
        setResponseStatus("success");
      } else {
        setResponseStatus("error");
      }
    } catch (error) {
      setResponseStatus("error");
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Envíame un correo!</h2>
      <div className="form-input-container">
        <label htmlFor="email">Tu correo electrónico</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "El correo es obligatorio" })}
        />
        {typeof errors.email?.message === "string" && (
          <span>{errors.email.message}</span>
        )}
      </div>
      <div className="form-input-container">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          maxLength={1000}
          {...register("message", {
            required: "El mensaje es obligatorio",
            maxLength: {
              value: 1000,
              message: "El mensaje no puede superar los 1000 caracteres",
            },
          })}
          rows={4}
          style={{ resize: "none", overflow: "hidden" }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
        />
        {typeof errors.message?.message === "string" && (
          <span>{errors.message.message}</span>
        )}
      </div>
      {responseStatus === "sending" && <div className="form-loading" />}
      {responseStatus === "success" && (
        <div className="form-success-message">
          ¡Mensaje enviado correctamente!
        </div>
      )}
      {responseStatus === "error" && (
        <div className="form-error-message">
          Ocurrió un error al enviar el mensaje. Intenta nuevamente.
        </div>
      )}
      <button type="submit">ENVIAR</button>
    </form>
  );
};

export default ContactForm;
