/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  LOGIN = '@repositories/LOGIN',
  SAVE_SELECTED = '@repositories/SAVE_SELECTED',
  SEARCH_DATA = '@repositories/SEARCH_DATA',
  CLEAR_DATA = '@repositories/CLEAR_DATA',
  LOAD_FINISH = '@repositories/LOAD_FINISH'
}

/**
 * Data types
 */
export interface Repository {
  id: number
  name: string
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly selectValue: any
  readonly  type00: any []
  readonly  type01: any []
  readonly type02:  any []
  readonly type03:  any []
  readonly type04:  any []
  readonly oldtype00: any[]
  readonly oldtype01: any[]
  readonly oldtype02: any[]
  readonly oldtype03: any[]
  readonly oldtype04: any[]
  readonly initialType00: any[]
  readonly initialType01: any[]
  readonly initialType02: any[]
  readonly initialType03: any[]
  readonly initialType04: any[]
  readonly loading: boolean
  readonly error: boolean
  readonly selected: any
  readonly search: any
}
