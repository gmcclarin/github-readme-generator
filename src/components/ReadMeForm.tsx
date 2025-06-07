import { useForm, type SubmitHandler } from "react-hook-form";
import generateMarkdown from "../utils/generateMarkdown";
import { Button, TextField } from "@mui/material";

type ReadMeFormValues = {

}

export default function ReadMeForm () {
    const {
        register,
        handleSubmit,
        formState
    } = useForm();

    const onSubmit: SubmitHandler<ReadMeFormValues> = (data) => {
        generateMarkdown(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <Button
            type="submit"
            >Make my ReadMe!</Button>
        </form>
    )
}