import React from 'react'
import GoalForm from '../../components/GoalForm'

export default function CreateGoal() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between mb-5'>
                <div className='text-2xl font-bold mb-4'>Create Goal</div>
                {/* <Button smallBtn>Create Goal</Button> */}
            </div>
            <div className='bg-white mb-2 py-4 px-3 rounded'>
                <GoalForm />
            </div>
            {/* <div className='w-full'> */}
            {/* <label className='block font-semibold text-sm text-[#545759] mb-1'>Latitude : </label> */}

            {/* <InputBox
                    placeholder='Latitude'
                    hidelabel // We hide the internal label because you have a custom label above
                    className='text-input w-full'
                    // 1. Spread the register function
                    {...register(`coardinates.${index}[0]`, {
                        required: "Required",
                        pattern: { value: /^-?\d*\.?\d*$/, message: "Invalid" }
                    })}
                    // 2. Pass the specific error message
                    error={errors.coardinates?.[index]?.[0]?.message}
                /> */}
            {/* </div> */}
        </div>
    )
}
