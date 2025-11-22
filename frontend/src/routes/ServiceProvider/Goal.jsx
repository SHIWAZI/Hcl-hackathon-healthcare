
import { useNavigate } from 'react-router'
import Button from '../../components/common/Button'

export default function Goal() {
    const navigate = useNavigate();

    const handleCreateGoal = () => {
        navigate("/service-provider/goals")
    }
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between mb-5'>
                <div className='text-2xl font-bold mb-4'>Goal Management</div>
                <Button smallBtn>Create Goal</Button>
            </div>
            <div className='bg-white mb-2 py-4 px-3 rounded'>
                List of Added Goals
            </div>

        </div>
    )
}