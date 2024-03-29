import { ApiContext, User } from "types"
import { fetcher } from "utils"

export type GetUserParams = {
  id: number
}

export const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  )
}
