import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function getEditorsDescription(editorCreatonData: Date) {

const distance = formatDistance(editorCreatonData, new Date(), { locale: ptBR })

return `editor há ${distance} `
}