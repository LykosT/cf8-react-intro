import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookForm/resolvers/zod";

const formSchema = z.object ({
    name: z.string().trim().min(1, {error: "Name is required"}),
    email: z.email({error: "Invalid Email"}).min(1, {error: "Email is required"}), // or use z.regex(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/),
    message: z
        .string()
        .trim()
        .min(5, {error: "Message must be at least 5 characters."})
        .max(10, {error: "Message must be at most 10 characters."})
});

type FormValues = z.infer<typeof formSchema>;

const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
};

const MultifieldFormWithHookForm =() =>{
    // const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    })

    const watchedValues = watch();

    const onSubmit = () => {
        reset();
    }

    const onClear = () => {
        reset();
    }


    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 mt-12">

                <div>
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="w-full border rounded px-4 py-2"
                    />
                    {errors?.name && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    {/*<label htmlFor="email">Email</label>*/}
                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="w-full border rounded px-4 py-2"
                    />
                    {errors?.email && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    {/*<label htmlFor="message">Message</label>*/}
                    <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Message"
                        className="w-full border rounded px-4 py-2"
                    ></textarea>
                    {errors?.message && (
                        <p className="text-cf-dark-red text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>

                <div className="flex gap-4">
                    <button className="bg-cf-dark-red text-white px-4 py-2 rounded" >
                        Submit
                    </button>
                    <button
                        onClick={onClear}
                        className="bg-cf-dark-gray text-white px-4 py-2 rounded">
                        Clear
                    </button>
                </div>
            </form>

            {watchedValues && (
                <>
                    <div className="mt-6 max-w-sm mx-auto border-top pt-4 text-cf-dark-gray space-y-2">
                        <p><strong>Name:</strong> {watchedValues.name}</p>
                        <p><strong>Email:</strong> {watchedValues.email}</p>
                        <p><strong>Message:</strong> {watchedValues.message}</p>
                    </div>
                </>
                )}

            {/*{submittedData && (*/}
            {/*    <>*/}
            {/*    <div className="mt-6 max-w-sm mx-auto border-top pt-4 text-cf-dark-gray space-y-2">*/}
            {/*        <p><strong>Name:</strong> {submittedData.name}</p>*/}
            {/*        <p><strong>Email:</strong> {submittedData.email}</p>*/}
            {/*        <p><strong>Message:</strong> {submittedData.message}</p>*/}
            {/*    </div>*/}
            {/*    </>*/}

            {/*)}*/}
        </>
    )
}
export default MultifieldFormWithHookForm;