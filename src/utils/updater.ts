import { pick, omit } from 'ramda'
export const updater = <Key, Data = object>(
  input: Data,
  ...keyNames: string[]
) => {
  const key: Key = pick(keyNames, input) as any
  const data = omit(keyNames, input) as Partial<Data>
  return { key, data }
}
