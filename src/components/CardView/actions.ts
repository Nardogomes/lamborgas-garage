import { fetchGetCarData } from '../../api/getCars'
import { CarModel } from './props'

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await fetchGetCarData(id)

    setCarData(response ?? null)
  } catch (error) {
    console.error('Error action loadCarData: ', error)
  }
}

export const handlePreviuosItem = async () => {

}

export const handleNextItem = async () => {

}
