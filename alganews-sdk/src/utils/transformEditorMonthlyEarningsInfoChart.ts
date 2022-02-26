
import { ChartProps } from "../../app/components/Chart/Chart";
import { Metric } from "../@types/Metric";
import { format } from 'date-fns'
import { ptBR} from 'date-fns/locale'


 function transformEditorMonthlyEarningsIntoChartJs(editorEarnings: Metric.EditorMonthlyEarnings): ChartProps['data']{

    const labels: string[] = []

    const data1: number[] = []

    const data2: number[] = []


    editorEarnings.forEach((earnings) => {
        const formatDate = format(new Date(earnings.yearMonth),'MMMM',{
            locale: ptBR
        })
        labels.push(formatDate)
        data1.push(earnings.totalAmount)
        data2.push(earnings.totalPlatformAverageAmount)
        
    })


    return {
        labels,
        datasets: [
            {
                label: 'Performance Pessoal',
                data: data1,
                fill: true,
                backgroundColor: '#0099FF',
                borderColor: '#0099FF',
                borderWidth: 0.5,
            },
            {
                label: 'Performance do time',
                data: data2,
                fill: true,
                backgroundColor: '#274060',
                borderColor: '#274060',
                borderWidth: 0.5,
            }
            
        ]
    }

}
export default transformEditorMonthlyEarningsIntoChartJs