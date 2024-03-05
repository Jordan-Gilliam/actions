import { TActionOutput, TActionType } from "./action-data"
import { AuthType, TAuthType, TNoAuth } from "./auth"
import { ActionBuilderWithAuth, TActionBuilderWithAuthData } from "./with-auth"
import { TActionDataWithInput } from "./with-input"
import { ActionBuilderWithOAuthType } from "./with-oauth"
import { ActionBuilderWithTokenType } from "./with-token"

export type TActionBuilderWithOutputData<
  TInputActionData extends TActionDataWithInput,
  TOutput extends TActionOutput,
  TType extends TActionType,
> = TInputActionData & {
  outputSchema: TOutput
  actionType: TType
}

export interface TActionDataWithOutput
  extends TActionBuilderWithOutputData<
    TActionDataWithInput,
    TActionOutput,
    TActionType
  > {}

export class ActionBuilderWithOutput<
  TLocalActionData extends TActionDataWithOutput,
> {
  _actionData: TLocalActionData

  constructor({ actionData }: { actionData: TLocalActionData }) {
    this._actionData = actionData
  }

  /**
   * The authentication type for the action. This is used to generate the authentication page
   * for the action and get users authenticated.
   */
  setAuthType(
    type: typeof AuthType.NONE
  ): ActionBuilderWithAuth<
    TActionBuilderWithAuthData<TLocalActionData, TNoAuth>
  >
  setAuthType(
    type: typeof AuthType.TOKEN
  ): ActionBuilderWithTokenType<TLocalActionData>
  setAuthType(
    type: typeof AuthType.OAUTH
  ): ActionBuilderWithOAuthType<TLocalActionData>

  setAuthType(type: TAuthType) {
    if (type === AuthType.NONE) {
      return new ActionBuilderWithAuth({
        actionData: {
          ...this._actionData,
          authConfig: {
            type: AuthType.NONE,
            config: undefined,
          },
        },
      })
    }
    if (type === AuthType.TOKEN) {
      return new ActionBuilderWithTokenType({
        actionData: this._actionData,
      })
    }
    if (type === AuthType.OAUTH) {
      return new ActionBuilderWithOAuthType({
        actionData: this._actionData,
      })
    }
    throw new Error("Invalid authentication type")
  }
}
