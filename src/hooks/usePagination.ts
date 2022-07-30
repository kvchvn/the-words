import { usePageSelector, useAppDispatch } from '../redux';
import { goToNextPage, goToPage, goToPrevPage } from '../redux/slices/wordsListSlice';

interface usePaginationHookArgs {
  firstPage: number;
  lastPage: number;
}

const usePagination = ({ firstPage, lastPage }: usePaginationHookArgs) => {
  const currentPage = usePageSelector();
  const dispatch = useAppDispatch();

  const selectNextPage = () => dispatch(goToNextPage());

  const selectPrevPage = () => dispatch(goToPrevPage());

  const selectFirstPage = () => dispatch(goToPage(firstPage));

  const selectLastPage = () => dispatch(goToPage(lastPage));

  return { currentPage, selectNextPage, selectPrevPage, selectFirstPage, selectLastPage };
};

export default usePagination;
