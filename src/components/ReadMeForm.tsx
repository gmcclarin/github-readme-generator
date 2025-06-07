import { useForm, SubmitHandler } from "react-hook-form";

type ReadMeFormValues = {

}

export default function ReadMeForm () {
    const {
        register,
        handleSubmit,
        watch,
        formState
    } = useForm();


    return (
        <form>
        </form>
    )
}