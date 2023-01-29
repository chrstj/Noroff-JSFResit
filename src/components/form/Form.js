import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const schema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(1),
    number: yup.string().required("Please enter your phone number").matches(phoneRegExp, "Must be a valid phone number"),
    select: yup.string().required("Please select an option"),
    message: yup.string().required("Please enter your message").min(1, "Your message cannot be empty"),

});

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Name</div>
            <input {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}

            <div>Telephone Number</div>
            <input {...register("number")} />
            {errors.number && <span>{errors.number.message}</span>}

            <div>Subject</div>
            <select {...register("select")}>
            <option value="">Select an option</option>
            <option value="Enquiry">Enquiry</option>
            <option value="Complaint">Complaint</option>
            <option value="Compliment">Compliment</option>
            <option value="General">General</option>
            </select>
            {errors.select && <span>{errors.select.message}</span>}

            <div>Your Message</div>
            <textarea {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}
            <div>
            <button>Send</button>
            </div>
        </form>
    
    );
}

export default Form;

