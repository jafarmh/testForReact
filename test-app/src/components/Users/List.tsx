import { Card } from '../element/Card'
import { ListUserProps } from '../../interface/ElementProps'

const List = ({ datas }: ListUserProps) => {
    return (
        <div className='flex flex-row gap-4' dir='rtl'>
            {datas.map((item) => <Card>
                <div className='text-gray-600'><b>{item.name}</b></div>
                <div className='text-gray-400'><span>{item.email}</span></div>
                <div className='text-gray-400'><span>{item.mobile}</span></div>
            </Card>)}
        </div>
    )
}

export default List