interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface RepositoriesAction {
  type: "search_repositories";
}

interface RepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}

interface RepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

type Action =
  | RepositoriesAction
  | RepositoriesSuccessAction
  | RepositoriesErrorAction;

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return {
        loading: true,
        error: null,
        data: [],
      };
    case "search_repositories_success":
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case "search_repositories_error":
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
