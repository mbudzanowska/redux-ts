import { ActionType } from "../action-types";

export interface RepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface RepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface RepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | RepositoriesAction
  | RepositoriesSuccessAction
  | RepositoriesErrorAction;