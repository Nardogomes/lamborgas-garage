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

export const handlePreviuosItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response = null

  try {
    if(carData && carData?.id > 1) {
      response = await fetchGetCarData(carData?.id - 1)
    }

    if(response) {
      setCarData(response)
    }

  } catch (error) {
    console.error('Erro ao carregar o item anterior: ', error)
    setCarData(null)
  }
}

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response = null

  try {
    if(carData && carData?.id < 10) {
      response = await fetchGetCarData(carData?.id + 1)
    }

    if(response) {
      setCarData(response)
    }

  } catch (error) {
    console.error('Erro ao carregar o próximo item: ', error)
    setCarData(null)
  }
}
