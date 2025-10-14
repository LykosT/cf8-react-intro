import * as React from "react";

type FormValues = {
    name: string,
    email: string,
    message: string,
}

const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
}

type FormErrors = {
    name?: string,
    email?: string,
    message?: string,
}

const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;


const MultifieldFormWithValidation =() =>{

    const [values, setValues] = React.useState(initialValues);
    const [submittedData, setSubmittedData] = React.useState<FormValues | null>(null);
    const [errors, setErrors] = React.useState<FormErrors | null>(null);

    const validateForm = (values: FormValues) =>{
        const errors: FormErrors = {};
        if (!values.name.trim()) {
            errors.name = "Name is required.";
        }
        if (!values.email.trim() || !emailRegex.test(values.email)) {
            errors.email = "Email is required or enter a valid email address!";
        }
        if (!values.message.trim() || !values.message.length) {
            errors.message = "Message is required more than 5 characters.";
        }
        return errors;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setValues((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
        setErrors((prev) => {
            return {
                ...prev,
                [name]: undefined,
            }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmittedData(null);
            return;
        }

        setSubmittedData(values);
        setValues(initialValues);
    }

    const handleClear = () => {
        setValues(initialValues);
        setSubmittedData(null);
        setErrors({});
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-12">

                <div>
                    {/*<label htmlFor="name">Name</label>*/}
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                    />
                    {errors?.name && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors?.name}</p>
                    )}
                </div>

                <div>
                    {/*<label htmlFor="email">Email</label>*/}
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                    />
                    {errors?.name && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors?.email}</p>
                    )}
                </div>

                <div>
                    {/*<label htmlFor="message">Message</label>*/}
                    <textarea
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full border rounded px-4 py-2"
                    ></textarea>
                    {errors?.name && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors?.message}</p>
                    )}
                </div>

                <div className="flex gap-4">
                    <button className="bg-cf-dark-red text-white px-4 py-2 rounded" >
                        Submit
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-cf-dark-gray text-white px-4 py-2 rounded">
                        Clear
                    </button>
                </div>
            </form>

            {submittedData && (
                <>
                <div className="mt-6 max-w-sm mx-auto border-top pt-4 text-cf-dark-gray space-y-2">
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Message:</strong> {submittedData.message}</p>
                </div>
                </>
            )}
        </>
    )
}
export default MultifieldFormWithValidation;