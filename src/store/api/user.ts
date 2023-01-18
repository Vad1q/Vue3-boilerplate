import transport from '@/store/api/utils/transport'
import type { ObjectDataInterface } from '@/store/interfaces/interfaces'

const apiName = ''

export const getUserItem = (params: ObjectDataInterface = {}) => {
  return transport.get(`${apiName}/`, params)
}
