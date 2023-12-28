import { Card } from '../element/Card'
import { ListProductProps } from '../../interface/ElementProps'

const List = ({ datas }: ListProductProps) => {
    return (
        <div className='flex flex-row gap-4 flex-wrap' dir='rtl'>
            {datas.map((item) => <Card>
                <div className='text-gray-600'><b>{item.title}</b></div>
                <div className='text-gray-400'><span>{item.price.toLocaleString()}</span></div>
                <div className='text-gray-300'><small>{item?.description?.substring(0,10)}</small></div>
            </Card>)}
        </div>
    )
}

export default List