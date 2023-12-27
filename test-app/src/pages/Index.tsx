import AreaChart from '../components/charts/AreaChart'
import BarChart from '../components/charts/BarChart'
import GroupedBarChart from '../components/charts/GroupedBarChart'
import PieChart from '../components/charts/PieChart'

const Index = () => {
  return (
    <>

      <div className='flex flex-row flex-wrap gap-4 my-4 p-1'>
        <div className="bg-white p-2 max-h-[450px] flex justify-center items-center w-full 2xl:basis-[45%] rounded-2xl">
          <BarChart />
        </div>
        <div className="bg-white p-2 max-h-[450px] flex justify-center items-center w-full 2xl:basis-[45%] rounded-2xl">
          <PieChart />
        </div>
        <div className="bg-white p-2 max-h-[450px] flex justify-center items-center w-full 2xl:basis-[45%] rounded-2xl">
          <GroupedBarChart />
        </div>
        <div className="bg-white p-2 max-h-[450px] flex justify-center items-center w-full 2xl:basis-[45%] rounded-2xl">
          <AreaChart />
        </div>
      </div>

    </>
  )
}

export default Index