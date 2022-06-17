TASK: list of users with pagination

{

  task.map:
  {
    index.jsx <- App.jsx <- UsersList.jsx <-- Pagination.jsx
                                          |
                                          <-- User.jsx
  }

  task.data:
  {
    UsersList.jsx:
    {
      state -> currentPage;
      goPrev (function to decrease the currentPage) -> on the button in Pagination.jsx;
      goNext (function to increase the current page number) -> on the button in Pagination.jsx;
      currentPage -> in Pagination.jsx to manage navigation buttons;
      totalItems -> in Pagination.jsx to manage navigation buttons;
      itemsPerPge -> in Pagination.jsx to manage navigation buttons;
      name, age -> in User.jsx to render the list;
    }
  }

  the page navigation in Pagination.jsx:
  {
    startPage = 1;
    endPage = Math.ceil(totalItems/itemsPerPage);

    if currentPage === startPage  -> isPrevPageAvailable = false, else true;
    if currentPage === endPage -> isNextPageAvailable = false, else true;

    -> navigation.button.disabled = {is...PageAvailable};
    -> navigation.button.textContent = {is...PageAvailable && arrow};
  }

  set the currentPage in UsersList.jsx:
  {
    currentPage = startPage;
    click on the navigation.button -> currentPage = +/- 1
  }

  render of currentPage in UsersList.jsx
  {
    startItem = (currentPage - 1) * itemsPerPage;
    endItem = startItem + itemsPerPage;

    render -> usersList.slice(startItem, endItem + 1);
  }
}





