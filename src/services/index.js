import { partial } from 'ramda'
import axios from 'axios'
import { getUsersBuilder } from './users.service'
export const getUsers = partial(getUsersBuilder, [{ axios }])
