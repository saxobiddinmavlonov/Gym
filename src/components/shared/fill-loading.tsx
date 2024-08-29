import { FiLoader } from 'react-icons/fi'
import { Skeleton } from '../ui/skeleton'

const FillLoading = () => {
	return (
		<Skeleton className='inset-0 absolute flex justify-center items-center w-full h-full opacity-20 z-50'>
			<FiLoader className='animate-spin w-6 h-6' />
		</Skeleton>
	)
}

export default FillLoading
