  // // Selects
if ($('select').length > 0) {
  $('select.search').chosen()
  $('select.no-search').chosen({disable_search: true});
}