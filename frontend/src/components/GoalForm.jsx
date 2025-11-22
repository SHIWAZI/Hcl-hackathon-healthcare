import { useForm } from "react-hook-form"
import InputBox from "./common/Input"
import Button from "./common/Button"
import TextArea from "./common/TextArea"
import SelectBox from "./common/SelectBox"
import { useDispatch, useSelector } from 'react-redux'
import { createGoal } from "../store/goalSlice"

export default function GoalForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state?.goal?.isFormLoading);

    const onSubmit = (data) => {
        dispatch(createGoal(data))
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputBox
                placeholder='Title'
                label="Title"
                className='text-input w-full'
                {...register(`title`, {
                    required: "Required",
                })}
                error={errors.title?.message}
            />
            <TextArea
                placeholder='Description'
                label="Description"
                type="textbox"
                className='text-input w-full'
                {...register(`description`, {
                    required: "Required",
                })}
                error={errors.description?.message}
            />
            <InputBox
                placeholder='Target Value'
                label="Target Value"
                type="textbox"
                className='text-input w-full'
                {...register(`targetValue`, {
                    required: "Required",
                    pattern: { value: /^\d*$/, message: "Number only allowed" }
                })}
                error={errors.targetValue?.message}
            />
            <SelectBox
                label="Unit"
                placeholder="Select unit"
                options={[{ label: "Steps", value: "steps" }, { label: "Hours", value: "hours" }]}
                {...register(`unit`, {
                    required: "Required",
                })}
                error={errors.unit?.message}
            />
            <SelectBox
                label="Frequency"
                placeholder="Select frequency"
                options={[{ label: "Daily", value: "daily" }, { label: "Weekly", value: "weekly" }]}
                {...register(`frequency`, {
                    required: "Required",
                })}
                error={errors.unit?.message}
            />
            <div className="flex justify-end mt-5">
                <Button
                    type="submit"
                    disabled={isLoading}
                    // icon={isLoading ? <svg class="mr-3 size-5 animate-spin " viewBox="0 0 24 24">...
                    // </svg> : ""}
                    smallBtn
                >Submit</Button>
            </div>
        </form>
    )
}
