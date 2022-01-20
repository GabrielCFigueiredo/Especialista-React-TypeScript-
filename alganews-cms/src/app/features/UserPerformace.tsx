import { useEffect , useState } from "react";
import Skeleton from "react-loading-skeleton";
import MetricService from "../../sdk/services/Metric.service";
import transformEditorMonthlyEarningsIntoChartJs from "../../sdk/utils/transformEditorMonthlyEarningsInfoChart";
import Chart, { ChartProps } from "../components/Chart/Chart";

export default function UserPerformace() {

  
const [editorEarnings, setEditorEarings] = useState<ChartProps['data']>()
const [error, setError] = useState<Error>()

useEffect(() => {
MetricService
  .getEditorMonthlyEarnings()
  .then(transformEditorMonthlyEarningsIntoChartJs)
  .then(setEditorEarings)
  .catch((error) => {
    setError(new Error(error.message))
  })
}, [])

if(error)
throw error


  if (!editorEarnings)
    return <div>
      <Skeleton
      height={227}
      />
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />

}